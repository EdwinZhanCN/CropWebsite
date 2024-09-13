package com.edwinzhan.cropwebsitebackend.service;

import com.edwinzhan.cropwebsitebackend.entity.News;
import com.edwinzhan.cropwebsitebackend.entity.Products;

public interface StaticDataService {
    News getNewsByIdOrTitle(String text);
    Products getProducts(String text);
    void insertProduct(Products product);
}
