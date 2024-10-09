package com.edwinzhan.cropwebsitebackend.service;

import com.edwinzhan.cropwebsitebackend.entity.Contact;

import java.util.List;

public interface JPARepoService {
    List<Contact> getAllContacts();
    void updateContact(List<Contact> contact);
}
