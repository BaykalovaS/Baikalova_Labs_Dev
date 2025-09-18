import { orders } from "./data.js"

export function getUserOrders(userId) {
    return orders.filter(order => order.userId === userId);
}

export function addProductToOrder(orderId, newProduct) {
    let order = orders.find(order => order.id = orderId);
    if (order === undefined) {
        return null;
    }
    order.products = [...order.products, newProduct];
    return order;
}

export function getOrderSummary(orderId) {
    let order = orders.find(order => order.id = orderId);
    if (order === undefined) {
        return null;
    }
    const {id, userId, products, total, status} = order;
    const orderData = {
        productsCount: products.length,
        total: "$" + total,
        status: status.toUpperCase(),
        userId: userId
    };
    return orderData;
}