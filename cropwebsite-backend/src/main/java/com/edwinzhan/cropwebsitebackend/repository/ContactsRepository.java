package com.edwinzhan.cropwebsitebackend.repository;

import com.edwinzhan.cropwebsitebackend.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactsRepository extends JpaRepository<Contact, Long> {}
