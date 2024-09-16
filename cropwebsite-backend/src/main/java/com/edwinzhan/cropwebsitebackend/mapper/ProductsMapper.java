package com.edwinzhan.cropwebsitebackend.mapper;

import com.edwinzhan.cropwebsitebackend.entity.Products;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;


@Mapper
public interface ProductsMapper {
    @Select("select * from products where id = #{text} or product_name LIKE CONCAT('%', #{text}, '%')")
    List<Products> findProductsByIdOrProductName(String text);

    //Insert the new product into the database
    @Insert("insert into products (upload_date, file_name, product_name, price, quantity, description, url)" +
            "values (#{upload_date}, #{file_name}, #{product_name}, #{price}, #{quantity}, #{description}, #{url})")
    void insertProduct(Products product);

    @Select("select * from products")
    List<Products> findAllProducts();
}
