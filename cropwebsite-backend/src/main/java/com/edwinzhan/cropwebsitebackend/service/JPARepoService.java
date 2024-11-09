package com.edwinzhan.cropwebsitebackend.service;

import com.edwinzhan.cropwebsitebackend.entity.Contact;
import com.edwinzhan.cropwebsitebackend.entity.News;

import java.util.List;

public interface JPARepoService {
    List<Contact> getAllContacts();
    void updateContact(List<Contact> contact);
    List<News> getAllNews();
    void updateNews(List<News> news);
}
