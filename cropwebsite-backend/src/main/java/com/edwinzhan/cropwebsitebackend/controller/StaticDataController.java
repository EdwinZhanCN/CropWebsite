package com.edwinzhan.cropwebsitebackend.controller;

import com.edwinzhan.cropwebsitebackend.entity.News;
import com.edwinzhan.cropwebsitebackend.entity.Products;
import com.edwinzhan.cropwebsitebackend.entity.RestBean;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import com.edwinzhan.cropwebsitebackend.service.StaticDataService;

import java.util.Collections;
import java.util.List;


/**
 * StaticDataController
 */
@RestController
@RequestMapping("/api/static")
public class StaticDataController {

    // this is the service that will be used to get the news
    @Resource
    private StaticDataService service;

    /**
     * Get news by id or title
     * @param text id or title of the news
     * @return RestBean<News>
     */
    @GetMapping("/news")
    public RestBean<News> getNews(@RequestParam String text){
        News news = service.getNewsByIdOrTitle(text);
        if(news == null){
            return RestBean.failure(404, "News not found");
        }
        return RestBean.success("News found", news);
    }

    @GetMapping("/products")
    public RestBean<List<Products>> getProducts(@RequestParam(required = false) String text){
        if (text != null && !text.isEmpty()) {
            Products product = service.getProducts(text);
            if (product == null) {
                return RestBean.failure(404, "Product not found");
            }
            return RestBean.success("Product found", Collections.singletonList(product));
        } else {
            List<Products> allProducts = service.getAllProducts();
            if (allProducts.isEmpty()) {
                return RestBean.failure(404, "No products available");
            }
            return RestBean.success("All products retrieved", allProducts);
        }
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public RestBean<String> insertProduct(@RequestBody Products product){
        System.out.println(product);
        service.insertProduct(product);
        return RestBean.success("Product inserted", null);
    }
}
