package com.onlineshop.springbootecommerce.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

/**
 * Disable put, post, delete methode for product & category
 */
@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // HttpMethod[] theUnsupportedAction = { HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE };

        // config.getExposureConfiguration().forDomainType(Product.class)
        //         .withItemExposure((metadata, HttpMethods) -> HttpMethods.disable(theUnsupportedAction))
        //         .withCollectionExposure((metadata, HttpMethods) -> HttpMethods.disable(theUnsupportedAction));

        // config.getExposureConfiguration().forDomainType(Category.class)
        //         .withItemExposure((metadata, HttpMethods) -> HttpMethods.disable(theUnsupportedAction))
        //         .withCollectionExposure((metadata, HttpMethods) -> HttpMethods.disable(theUnsupportedAction));
    }

}
