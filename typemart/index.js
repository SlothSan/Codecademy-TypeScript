"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'shirt';
const product = products_1.default.filter(product => product.name === productName);
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = '36 Gallivan Close';
Number(product[0].price) >= 25 ? shipping = 0 : shipping = 25;
if (shippingAddress.match(`New York`)) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product[0].price) * taxPercent;
total = Number(product[0].price) + taxTotal + shipping;
console.log("Product:", product[0].name);
console.log("Shipping Address:", shippingAddress);
console.log("Price:", product[0].price);
console.log("Tax Total:", taxTotal);
if (shipping > 0) {
    console.log(`Your shipping costs $${shipping}`);
}
else {
    console.log(`Free shipping!`);
}
console.log("Total:", total);
if (Boolean(product[0].preOrder) === true) {
    console.log('We will send you a message when your product is on its way.');
}
console.log("Have a nice day! :)");
