"use strict";
exports.__esModule = true;
var functions_1 = require("./functions");
/* Buying Product 1 */
var product1 = { title: "Power Bank", price: 1800, stock: 0 };
console.log('\nProduct 1:');
if (functions_1.isAvailable(product1))
    console.log("\n" + product1.title + " is available.");
else
    console.log("\n" + product1.title + " is not available.");
functions_1.buy(product1, 5);
/* Buying Product 2 */
var product2 = { title: "EarPhone", price: 1200, stock: 18 };
console.log('\nProduct 2:');
if (functions_1.isAvailable(product2))
    console.log("\n" + product2.title + " is available.");
else
    console.log("\n" + product2.title + " is not available.");
functions_1.buy(product2, 2);
