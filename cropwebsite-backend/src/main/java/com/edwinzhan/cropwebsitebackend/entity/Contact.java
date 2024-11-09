package com.edwinzhan.cropwebsitebackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "contact")
public class Contact {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Id
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name="value", nullable = false)
    private String value;

    @Column(name="img_url")
    private String img_url;
}
