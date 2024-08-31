package repository;

import entity.ImgBox;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * ImgBoxRepository
 */
@Repository
public interface ImgBoxRepository extends JpaRepository<ImgBox, Long> {

}
