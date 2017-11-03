import {Product} from './interface'
import {isAvailable, buy} from './functions'

/* Buying Product 1 */
let product1: Product = { title: "Power Bank", price: 1800, stock: 0 };

console.log ( '\nProduct 1:' );

if ( isAvailable(product1) )
    console.log ( `\n${product1.title} is available.` );
else
    console.log ( `\n${product1.title} is not available.` );

buy ( product1, 5 );

/* Buying Product 2 */
let product2: Product = { title: "EarPhone", price: 1200, stock: 18 };

console.log ( '\nProduct 2:' );

if ( isAvailable(product2) )
    console.log ( `\n${product2.title} is available.` );
else
    console.log ( `\n${product2.title} is not available.` );

buy ( product2, 2 );
