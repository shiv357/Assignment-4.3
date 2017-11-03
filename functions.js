"use strict";
exports.__esModule = true;
/**
 * @function isAvailable [This function checks whether a product is available or not]
 * @param {Product} product [The Product type interface is passed as parameter]
 * @return {boolean} [boolean true is returned if the product is available. Otherwise boolean false is returned.]
 */
function isAvailable(product) {
    if (product.stock > 0)
        return true;
    else
        return false;
}
exports.isAvailable = isAvailable;
/**
 * @function buy [This function is used to buy the product]
 * @param {Product} product [The product to be bought]
 * @param {number} quantity [The quantity of the product to be bought]
 * @return [No value is returned]
 */
function buy(product, quantity) {
    if (quantity > product.stock)
        console.log("\nSorry, the desired quantity is not available.");
    else {
        var bill = product.price * quantity;
        product.stock -= quantity;
        console.log("\nPurchase Successful: Your bill is " + bill + " rupees.");
    }
}
exports.buy = buy;
