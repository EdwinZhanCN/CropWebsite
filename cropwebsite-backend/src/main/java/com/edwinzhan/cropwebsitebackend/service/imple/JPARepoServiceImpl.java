package com.edwinzhan.cropwebsitebackend.service.imple;

import com.edwinzhan.cropwebsitebackend.entity.Contact;
import com.edwinzhan.cropwebsitebackend.repository.ContactsRepository;
import com.edwinzhan.cropwebsitebackend.service.JPARepoService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JPARepoServiceImpl implements JPARepoService {

    //Resources repository
    @Resource
    private ContactsRepository contactsRepository;


    /**
     * Get all contacts
     * @return all contacts
     */
    @Override
    public List<Contact> getAllContacts() {
        return contactsRepository.findAll();
    }

    /**
     * Update the contact
     * @param contact the contact to be updated
     */
    @Override
    public void updateContact(List<Contact> contact) {
        contactsRepository.saveAll(contact);
    }
}
