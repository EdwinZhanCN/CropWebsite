package com.edwinzhan.cropwebsitebackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "img_box")
public class ImgBox {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "image", columnDefinition = "BLOB")
    private byte[] image;

    @Column(name = "description", length = 512)
    private String text;

    // mappedBy = "imgBox" means that the ImgBox entity is the inverse side of the relationship
    @OneToOne(mappedBy = "imgBox", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Link link;
}
