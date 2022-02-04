package com.onlineshop.springbootecommerce.service;

import java.util.List;
import java.util.Optional;

public interface CrudService<T, D> {
    Optional<T> find(Long id);
    T save(T entity);
    void update(Long id, T entity);
    void delete(Long id);
    List<T> findAll();
}
