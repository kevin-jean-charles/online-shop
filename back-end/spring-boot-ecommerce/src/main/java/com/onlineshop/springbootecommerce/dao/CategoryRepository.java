package com.onlineshop.springbootecommerce.dao;

import com.onlineshop.springbootecommerce.entity.Category;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


// @RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
