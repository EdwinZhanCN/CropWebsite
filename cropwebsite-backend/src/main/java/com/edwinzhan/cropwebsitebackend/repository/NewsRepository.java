package com.edwinzhan.cropwebsitebackend.repository;

import com.edwinzhan.cropwebsitebackend.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {

}
