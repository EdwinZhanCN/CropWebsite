package service;

import entity.News;
import entity.Products;

public interface StaticDataService {
    News getNewsByIdOrTitle(String text);
    Products getProducts(String text);
    void insertProduct(Products product);
}
