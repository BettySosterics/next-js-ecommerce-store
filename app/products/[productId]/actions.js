'use server';
// Case A: cookie is undefined
// Case B: cookie is defined but have the fruit id
// Case C: cookie is defined but doesn't have the fruit id

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateItem(productId, quantity) {
  // 1. get the current cookie
  const productCookie = getCookie('cart');
  // 2. parse the cookie value

  // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined
  const productsQuantity = !productCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productCookie);

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const productToUpdate = productsQuantity.find((productQuantity) => {
    return productQuantity.id === productId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (productToUpdate) {
    productToUpdate.quantity = quantity;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    productsQuantity.push({
      id: productId,
      quantity: quantity,
    });
  }

  // 4. we override the cookie
  await cookies().set('cart', JSON.stringify(productsQuantity));
}

// add delete function to cookie
// export async function removeOneProductInCart(productId) {
//   const cartCookie = getCookie('cart');
//   const cart = !cartCookie ? [] : parseJson(cartCookie);

//   const itemToDelete = cart.filter((cartItem) => {
//     return cartItem.id !== productId;
//   });

//   if (itemToDelete) {
//     itemToDelete.quantity = undefined;
//   }

//   await cookies().set('cart', JSON.stringify(itemToDelete));
// }
