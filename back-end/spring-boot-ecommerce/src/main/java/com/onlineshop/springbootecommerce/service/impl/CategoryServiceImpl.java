package com.onlineshop.springbootecommerce.service.impl;

import java.util.List;
import java.util.Optional;

import com.onlineshop.springbootecommerce.dao.CategoryRepository;
import com.onlineshop.springbootecommerce.dto.CategoryDto;
import com.onlineshop.springbootecommerce.entity.Category;
import com.onlineshop.springbootecommerce.service.CategoryService;
import com.onlineshop.springbootecommerce.service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Optional<Category> find(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Category save(Category entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void update(Long id, Category entity) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Category> findAll() {
        // TODO Auto-generated method stub

        return categoryRepository.findAll();
    }
    
}
