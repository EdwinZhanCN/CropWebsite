package com.edwinzhan.cropwebsitebackend.repository;

import com.edwinzhan.cropwebsitebackend.entity.ImgBox;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * ImgBoxRepository
 */
@Repository
public interface ImgBoxRepository extends JpaRepository<ImgBox, Long> {

}
