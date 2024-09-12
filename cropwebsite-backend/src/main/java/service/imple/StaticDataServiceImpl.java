package service.imple;

import entity.News;
import entity.Products;
import jakarta.annotation.Resource;
import mapper.NewsMapper;
import mapper.ProductsMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import service.StaticDataService;

@Service
public class StaticDataServiceImpl implements StaticDataService {

    @Resource
    private NewsMapper newsMapper;

    @Resource
    private ProductsMapper productsMapper;

    /**
     * Find news by id or title
     * @param text id or title
     * @return news
     */
    @Override
    public News getNewsByIdOrTitle(String text) {
        return newsMapper.findNewsByIdOrTitle(String.valueOf(text));
    }

    /**
     * Find products by id or product name
     * @param text id or product name
     * @return products
     */
    @Override
    public Products getProducts(String text) {
        return productsMapper.findProductsByIdOrProductName(String.valueOf(text));
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
