package entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "upload_date")
    private LocalDateTime createdAt;

    @Column(name = "file_name", length = 255)
    private String fileName;

    @Column(name = "product_name", length = 255)
    private String productName;

    @Column(name = "price")
    private double price;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "url", length = 255)
    private String url;
}
