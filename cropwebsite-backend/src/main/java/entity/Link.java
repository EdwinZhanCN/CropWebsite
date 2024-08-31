package entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Link {
    @Id
    private Long id;

    @Column(name = "url", length = 512)
    private String url;

    @Column(name = "description", length = 512)
    private String description;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private ImgBox imgBox;
}
