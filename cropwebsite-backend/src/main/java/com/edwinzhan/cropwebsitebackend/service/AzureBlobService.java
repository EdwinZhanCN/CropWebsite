package com.edwinzhan.cropwebsitebackend.service;
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobClientBuilder;
import com.azure.storage.blob.sas.BlobSasPermission;
import com.azure.storage.blob.sas.BlobServiceSasSignatureValues;
import com.azure.storage.common.StorageSharedKeyCredential;
import com.edwinzhan.cropwebsitebackend.config.AzureBlobProperties;
import org.springframework.stereotype.Service;
import org.springframework.data.redis.core.RedisTemplate;

import java.time.OffsetDateTime;
import java.util.concurrent.TimeUnit;

@Service
public class AzureBlobService {

    private final RedisTemplate<String, String> redisTemplate;
    private final AzureBlobProperties azureBlobProperties;

    public AzureBlobService(RedisTemplate<String, String> redisTemplate, AzureBlobProperties azureBlobProperties) {
        this.redisTemplate = redisTemplate;
        this.azureBlobProperties = azureBlobProperties;
    }

    // 从 Redis 获取或生成新的 SAS Token, 10800 分钟过期
    public String getPresignedUrl(String container, String blobName, int expiryInMinutes) {
        String cacheKey = "sasToken:" + blobName;
        String cachedSasToken = redisTemplate.opsForValue().get(cacheKey);

        if (cachedSasToken != null) {
            System.out.println("SAS Token found in cache");
            // 如果 Redis 中有缓存的 SAS Token，直接返回
            return cachedSasToken;
        }

        // 如果 Redis 没有缓存的 Token，生成新的 SAS Token
        String sasToken = generatePresignedUrl(container, blobName, expiryInMinutes);
        // 将新的 SAS Token 存储到 Redis，设置过期时间
        redisTemplate.opsForValue().set(cacheKey, sasToken, expiryInMinutes, TimeUnit.MINUTES);

        return sasToken;
    }

    // generate a pre-signed URL for a blob
    public String generatePresignedUrl(String container, String blobName, int expiryInMinutes) {

        StorageSharedKeyCredential credential = new StorageSharedKeyCredential(
                azureBlobProperties.getAccountName(),
                azureBlobProperties.getAccountKey()
        );

        BlobClient blobClient = new BlobClientBuilder()
                .endpoint(azureBlobProperties.getEndpoint())
                .credential(credential)
                .containerName(container)
                .blobName(blobName)
                .buildClient();

        BlobSasPermission permission = new BlobSasPermission().setReadPermission(true);

        OffsetDateTime expiryTime = OffsetDateTime.now().plusMinutes(expiryInMinutes);

        BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(expiryTime, permission);

        String sasToken = blobClient.generateSas(sasValues);

        return blobClient.getBlobUrl() + "?" + sasToken;
    }
}
