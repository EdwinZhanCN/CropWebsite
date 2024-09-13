package com.edwinzhan.cropwebsitebackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
@MapperScan("com.edwinzhan.cropwebsitebackend.mapper")
public class CropwebsiteBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CropwebsiteBackendApplication.class, args);
    }

}
