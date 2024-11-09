package com.edwinzhan.cropwebsitebackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", length = 512)
    private String title;

    @Column(name = "file_url", length = 4096)
    private String fileUrl;

    @Column(name = "upload_date")
    private Date date;

    @Column(name = "short", length = 4096)
    private String shortText;
}
