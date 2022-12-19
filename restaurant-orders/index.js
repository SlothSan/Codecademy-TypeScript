"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders.forEach(function (restaurant) {
        var filteredForRestaurant = restaurant.filter(function (order) { return order.price <= getMaxPrice(price); });
        filteredOrders.push(filteredForRestaurant);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, filteredOrders) {
    filteredOrders.forEach(function (order, index) {
        if (order.length > 0) {
            console.log("".concat(restaurants[index].name));
            order.forEach(function (item) {
                console.log("- ".concat(item.name, ": $").concat(item.price));
            });
        }
    });
}
/// Main
var elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
