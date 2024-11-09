package com.edwinzhan.cropwebsitebackend.controller;

import com.edwinzhan.cropwebsitebackend.entity.Contact;
import com.edwinzhan.cropwebsitebackend.entity.News;
import com.edwinzhan.cropwebsitebackend.entity.Products;
import com.edwinzhan.cropwebsitebackend.entity.RestBean;
import com.edwinzhan.cropwebsitebackend.service.AzureBlobService;
import com.edwinzhan.cropwebsitebackend.service.JPARepoService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import com.edwinzhan.cropwebsitebackend.service.StaticDataService;
import io.github.cdimascio.dotenv.Dotenv;


import java.util.List;


/**
 * StaticDataController
 */
@RestController
@RequestMapping("/api/static")
public class StaticDataController {

    Dotenv dotenv = Dotenv.configure().load();

    // this is the service that will be used to get the static data
    @Resource
    private StaticDataService staticDataService;

    // this is the service that will be used to get the sas token
    @Resource
    private AzureBlobService sasTokenService;

    // this is the service that will be used to get the jpa data
    @Resource
    private JPARepoService jpaRepoService;

    /**
     * Get news by id or title
     * @return RestBean<List<News>>
     */
    @GetMapping("/news")
    public RestBean<List<News>> getAllNews(){
        // get the presigned url for the news
        String container = "news-doc";

        // get all news from JPA
        List<News> news = jpaRepoService.getAllNews();
        if (news == null) {
            return RestBean.failure(404, "News not found");
        }

        // get file name from the file url
        // sample: https://cropwebsitefile.blob.core.windows.net/news/2022-06-30_浙江大学中标信息_1.md
        // file name: 2022-06-30_浙江大学中标信息_1.md

        news.forEach(news1 -> {
            String fileName = news1.getFileUrl().substring(news1.getFileUrl().lastIndexOf("/") + 1);
            news1.setFileUrl(sasTokenService.getPresignedUrl(container, fileName,10800));
        });
        return RestBean.success("News found", news);
    }

    /**
     * Update news
     * @param news the news to be updated
     * @return RestBean<String>
     */
    @RequestMapping(value = "/news", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public RestBean<String> updateNews(@RequestBody List<News> news){
        for (News n : news) {
            if (n.getTitle() == null || n.getFileUrl() == null || n.getDate() == null || n.getShortText() == null) {
                return RestBean.failure(400, "Title, fileUrl, date and shortText are required");
            }
        }
        // update the news
        jpaRepoService.updateNews(news);

        // return success message
        return RestBean.success("News updated", null);
    }


    /**
     * Get all products or products by text
     * @return RestBean<List<Products>>
     */
    @GetMapping("/products")
    public RestBean<List<Products>> getProducts(@RequestParam(required = false) String text){
        // define the container name, azure blob storage container name
        String container = "product-images";


        if (text != null && !text.isEmpty()) {
            // get the products by text
            List<Products> products = staticDataService.getProducts(text);

            // if no products found, return 404
            if (products.isEmpty()) {
                return RestBean.failure(404, "No products available");
            }

            // get the sas token for each product
            products.forEach(product -> {
                product.setUrl(sasTokenService.getPresignedUrl(container, product.getFile_name(),10800));
            });

            // return the products
            return RestBean.success("Selected products retrieved", products);
        } else {

            // get all products
            List<Products> allProducts = staticDataService.getAllProducts();

            // if no products found, return 404
            if (allProducts.isEmpty()) {
                return RestBean.failure(404, "No products available");
            }

            // get the sas token for each product
            allProducts.forEach(product -> {
                product.setUrl(sasTokenService.getPresignedUrl(container, product.getFile_name(),10800));
            });

            // return all products
            return RestBean.success("All products retrieved", allProducts);
        }
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public RestBean<String> insertProduct(@RequestBody Products product){

        // insert the product into the database, no null check
        if (product == null) {
            return RestBean.failure(400, "Upload date is required");
        }

        // insert the product
        staticDataService.insertProduct(product);

        // return success message
        return RestBean.success("Product inserted", null);
    }

    /**
     * Get contacts information
     * @return RestBean<List<Contact>>
     */
    @GetMapping(value = "/contacts")
    public RestBean<List<Contact>> getContacts(){
        // get the contacts information
        List<Contact> contacts = jpaRepoService.getAllContacts();

        // if no contacts found, return 404
        if(contacts == null){
            return RestBean.failure(404, "Contacts not found");
        }

        // return the contacts
        return RestBean.success("Contacts found", contacts);
    }

    /**
     * Update contacts information
     * @param contacts the contacts to be updated
     * @return RestBean<String>
     */
    @RequestMapping(value = "/contacts", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public RestBean<String> updateContacts(@RequestBody List<Contact> contacts){
        for (Contact contact : contacts) {
            System.out.println(contact.getName());
            if (contact.getName() == null || contact.getValue() == null) {
                return RestBean.failure(400, "Name and value are required");
            }
        }
        // update the contacts information
        jpaRepoService.updateContact(contacts);

        // return success message
        return RestBean.success("Contacts updated", null);
    }
}
