package com.onlineshop.springbootecommerce.controller;

import com.onlineshop.springbootecommerce.dto.ProductDto;
import com.onlineshop.springbootecommerce.entity.Product;
import com.onlineshop.springbootecommerce.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductController {
    ModelMapper modelMapper = new ModelMapper();
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<ProductDto> getPosts() {

        List<Product> products = productService.findAll();
        return products.stream()
        .map(product -> modelMapper.map(product, ProductDto.class))
        .collect(Collectors.toList());
    }
    }

