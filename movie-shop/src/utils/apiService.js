import api from './api';

export const getUsers = async () => {
    let users = await api.get(`/customers`);
    users = users.data;
    console.log("---U-->", users);
    return users.results;
};

export const getUser = async (id) => {
    let user = await api.get(`/customers/${id}`);
    user = user.data;
    console.log("---P-->", user);
    return user.results;
}

export const getProducts = async () => {
    let products = await api.get(`/products`);
    products = products.data._embedded.products;
    console.log("---Prod-->", products);
    return products;
}

export const getProduct = async (id) => {
    let product = await api.get(`/products/${id}`);
    product = product.data;
    console.log("---Product-->", product);
    return product.results;
}

export const getCategories = async () => {
    let categories = await api.get(`/categories`);
    categories = categories.data._embedded.categories;
    console.log("---C--->", categories);
    return categories;
}

export const getCategory = async (id) => {
    let category = await api.get(`/category/${id}`);
    category = category.data._embedded.categorie;
    console.log("---Categorie-->", category);
    return category.results;
}

export const getOrders = async () => {
    let orders = await api.get(`/orders`);
    orders = orders.data;
    console.log("---Orders-->", orders);
    return orders.results;
}

export const getOrder = async (id) => {
    let order = await api.get(`/orders/${id}`);
    order = order.data;
    console.log("---Order-->", order);
    return order.results;
}