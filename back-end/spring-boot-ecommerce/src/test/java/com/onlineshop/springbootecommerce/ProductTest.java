package com.onlineshop.springbootecommerce;

import java.math.BigDecimal;

import com.onlineshop.springbootecommerce.entity.Category;
import com.onlineshop.springbootecommerce.entity.Product;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

public class ProductTest {

    // declerer un produit
    private Product productTest;
    private Category categoryTest;
    private BigDecimal unitPrice;

    // setup product and category to test
    @BeforeAll
    public void setup() {
        unitPrice = new BigDecimal(23.5);
        this.categoryTest = new Category();
        this.productTest = new Product();

        this.categoryTest.setId(1L);
        this.categoryTest.setCategoryName("categoryNameTest");

        this.productTest.setId(1L);
        this.productTest.setActive(true);
        this.productTest.setBarcode("barcodeTest");
        this.productTest.setCategory(categoryTest);
        this.productTest.setDescription("descriptionTest");
        this.productTest.setImageUrl("imageUrlTest");
        this.productTest.setName("nameTest");
        this.productTest.setUnitPrice(unitPrice);
        this.productTest.setUnitsInStock(23);
    }

    // tester insersion de produit
    @Test
    public void insertionTest() {
        
    }


    // tester recherche de un produit
    // tester recherche de tout les produits
    // tester recherche de catégorie du produit

    // tester modification du produit
    // tester modification de la categoriy du produit
    // tester suppression de produit
}
