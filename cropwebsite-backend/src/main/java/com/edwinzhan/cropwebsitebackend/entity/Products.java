package com.edwinzhan.cropwebsitebackend.entity;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Products {
    private String upload_date;
    private String file_name;
    private String product_name;
    private double price;
    private int quantity;
    private String description;
    private String url;
}
