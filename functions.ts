import {Product} from './interface'

/**
 * @function isAvailable [This function checks whether a product is available or not]
 * @param {Product} product [The Product type interface is passed as parameter]
 * @return {boolean} [boolean true is returned if the product is available. Otherwise boolean false is returned.]
 */
export function isAvailable(product: Product): boolean {

    if ( product.stock > 0 )
        return true;
    else
        return false;

}

/**
 * @function buy [This function is used to buy the product]
 * @param {Product} product [The product to be bought]
 * @param {number} quantity [The quantity of the product to be bought]
 * @return [No value is returned]
 */
export function buy(product: Product, quantity: number): void {

    if ( quantity > product.stock )
        console.log ( `\nSorry, the desired quantity is not available.` );
    else {

        let bill: number = product.price * quantity;
        product.stock -= quantity;
        console.log ( `\nPurchase Successful: Your bill is ${bill} rupees.` );

    }

}
