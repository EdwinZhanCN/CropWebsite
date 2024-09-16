package com.edwinzhan.cropwebsitebackend.service;

import com.edwinzhan.cropwebsitebackend.entity.News;
import com.edwinzhan.cropwebsitebackend.entity.Products;

import java.util.List;

public interface StaticDataService {
    News getNewsByIdOrTitle(String text);
    List<Products> getProducts(String text);
    List<Products> getAllProducts();
    void insertProduct(Products product);
}
