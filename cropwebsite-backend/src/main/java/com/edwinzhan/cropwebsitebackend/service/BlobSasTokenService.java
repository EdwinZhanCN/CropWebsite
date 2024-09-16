// TODO: Implement the BlobSasTokenService class
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.redis.core.StringRedisTemplate;
//import org.springframework.data.redis.core.ValueOperations;
//import org.springframework.stereotype.Service;
//
//import java.time.Duration;
//
//@Service
//public class BlobSasTokenService {
//    private static final long SAS_TOKEN_EXPIRATION = 2592000; // 1 hour in seconds
//
//    @Autowired
//    private BlobServiceClient blobServiceClient;
//
//    @Autowired
//    private StringRedisTemplate redisTemplate;
//
//    public String getSasToken(String containerName, String blobName) {
//        String key = "sas:" + containerName + ":" + blobName;
//        ValueOperations<String, String> ops = redisTemplate.opsForValue();
//        String sasToken = ops.get(key);
//
//        if (sasToken == null) {
//            sasToken = generateSasTokenForBlob(containerName, blobName);
//            ops.set(key, sasToken, Duration.ofSeconds(SAS_TOKEN_EXPIRATION));
//        }
//
//        return sasToken;
//    }
//
//    private String generateSasTokenForBlob(String containerName, String blobName) {
//        String connectionString = "DefaultEndpointsProtocol=https;AccountName=<your-account-name>;AccountKey=<your-account-key>;EndpointSuffix=core.windows.net";
//        String containerName = "your-container-name";
//        String blobName = "your-blob-name.jpg";
//
//        AzureBlobUtility blobUtility = new AzureBlobUtility(connectionString);
//        String sasToken = blobUtility.generateSasTokenForBlob(containerName, blobName);
//
//        System.out.println("Generated SAS Token: " + sasToken);
//    }
//}

//import com.azure.storage.blob.BlobServiceClient;
//import com.azure.storage.blob.BlobServiceClientBuilder;
//import com.azure.storage.blob.sas.BlobContainerSasPermission;
//import com.azure.storage.blob.sas.BlobServiceSasSignatureValues;
//import com.azure.storage.blob.models.UserDelegationKey;
//import java.time.OffsetDateTime;
//
//public class AzureBlobUtility {
//
//    private final BlobServiceClient blobServiceClient;
//
//    public AzureBlobUtility(String connectionString) {
//        this.blobServiceClient = new BlobServiceClientBuilder()
//                .connectionString(connectionString)
//                .buildClient();
//    }
//
//    public String generateSasTokenForBlob(String containerName, String blobName) {
//        // 获取容器客户端
//        var containerClient = blobServiceClient.getBlobContainerClient(containerName);
//        var blobClient = containerClient.getBlobClient(blobName);
//
//        // 设置 SAS 令牌的权限
//        BlobContainerSasPermission permissions = new BlobContainerSasPermission()
//                .setReadPermission(true); // 设置为只读权限
//
//        // 设置 SAS 令牌的有效期
//        OffsetDateTime expiryTime = OffsetDateTime.now().plusHours(1); // SAS 令牌有效期为1小时
//        OffsetDateTime startTime = OffsetDateTime.now().minusMinutes(5); // 避免时钟偏差问题，开始时间提前5分钟
//
//        // 创建 SAS 令牌
//        BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(expiryTime, permissions)
//                .setStartTime(startTime);
//
//        // 生成 SAS 令牌
//        String sasToken = blobClient.generateSas(sasValues);
//        return sasToken;
//    }
//}
