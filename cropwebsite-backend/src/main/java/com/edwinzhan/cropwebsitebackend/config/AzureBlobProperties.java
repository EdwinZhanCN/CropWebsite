package com.edwinzhan.cropwebsitebackend.config;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
@Setter
@ConfigurationProperties(prefix = "spring.cloud.azure.storage.blob")
public class AzureBlobProperties {
    private String accountKey;
    private String accountName;
    private String endpoint;
}