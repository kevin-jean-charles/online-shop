package com.onlineshop.springbootecommerce;

import com.onlineshop.springbootecommerce.entity.Product;

import org.junit.jupiter.api.BeforeAll;

public class ProductTest {

    // declerer un produit
    private Product productTest;
    // private 


    // setup product test
    @BeforeAll
    public void setup() {
        this.productTest = new Product();
        this.productTest.setId(1L);
        this.productTest.setActive(true);
        this.productTest.setBarcode("barcode");
        // this.productTest.setCategory(category);

        // this.testUser = new User();
        // this.testUser.setName("Hermione Granger");
        // this.testUser.setEmail(email);
        // this.testUser.setHashedpw("somehashedpw");
        // this.jwt = "somemagicjwt";
        // mongoClient
        // .getDatabase(databaseName)
        // .getCollection("users")
        // .deleteOne(new Document("email", "log@out.com"));
    }

    // tester creation de produit

    // tester recherche de un produit
    // tester recherche de tout les produits
    // tester recherche de catégorie du produit

    // tester modification du produit
    // tester modification de la categoriy du produit
    // tester suppression de produit
}
