package mapper;

import entity.Products;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface ProductsMapper {
    @Select("select * from products where id = #{text} or product_name LIKE CONCAT('%', #{text}, '%')")
    Products findProductsByIdOrProductName(String text);

    //Insert the new product into the database
    @Insert("insert into products (upload_date, file_name, product_name, price, quantity, description, url)" +
            "values (#{createdAt}, #{fileName}, #{productName}, #{price}, #{quantity}, #{description}, #{url})")
    void insertProduct(Products product);
}
