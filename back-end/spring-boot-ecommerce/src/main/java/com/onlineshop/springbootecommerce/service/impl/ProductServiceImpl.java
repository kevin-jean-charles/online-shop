package com.onlineshop.springbootecommerce.service.impl;

import com.onlineshop.springbootecommerce.dao.ProductRepository;
import com.onlineshop.springbootecommerce.entity.Product;
import com.onlineshop.springbootecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public Optional<Product> find(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Product save(Product entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void update(Long id, Product entity) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Product> findAll() {
        // TODO Auto-generated method stub

        return productRepository.findAll();
    }
    
}
