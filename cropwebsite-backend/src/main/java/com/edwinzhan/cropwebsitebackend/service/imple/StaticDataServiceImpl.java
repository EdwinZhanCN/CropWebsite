package com.edwinzhan.cropwebsitebackend.service.imple;

import com.edwinzhan.cropwebsitebackend.entity.News;
import com.edwinzhan.cropwebsitebackend.entity.Products;
import jakarta.annotation.Resource;
import com.edwinzhan.cropwebsitebackend.mapper.ProductsMapper;
import org.springframework.stereotype.Service;
import com.edwinzhan.cropwebsitebackend.service.StaticDataService;

import java.util.List;

@Service
public class StaticDataServiceImpl implements StaticDataService {

    @Resource
    private ProductsMapper productsMapper;

    /**
     * Find products by id or product name
     * @param text id or product name
     * @return products
     */
    @Override
    public List<Products> getProducts(String text) {
        return productsMapper.findProductsByIdOrProductName(String.valueOf(text));
    }

    /**
     * Get all products
     * @return all products
     */
    @Override
    public List<Products> getAllProducts() {
        return productsMapper.findAllProducts();
    }

    /**
     * Insert the new product into the database
     * @param product the product to be inserted
     */
    @Override
    public void insertProduct(Products product) {
        productsMapper.insertProduct(product);
    }
}
