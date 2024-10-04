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
     * @param text id or title of the news
     * @return RestBean<News>
     */
    @GetMapping("/news")
    public RestBean<News> getNews(@RequestParam String text){
        // get the news by id or title
        News news = staticDataService.getNewsByIdOrTitle(text);

        // if no news found, return 404
        if(news == null){
            return RestBean.failure(404, "News not found");
        }

        // return the news
        return RestBean.success("News found", news);
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
