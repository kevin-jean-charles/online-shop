package com.onlineshop.springbootecommerce.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.onlineshop.springbootecommerce.dto.CategoryDto;
import com.onlineshop.springbootecommerce.entity.Category;
import com.onlineshop.springbootecommerce.service.CategoryService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class CategoryController {
    ModelMapper modelMapper = new ModelMapper();
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<CategoryDto> getPosts() {

        List<Category> categories = categoryService.findAll();
        return categories.stream()
        .map(category -> modelMapper.map(category, CategoryDto.class))
        .collect(Collectors.toList());
    }
    }

