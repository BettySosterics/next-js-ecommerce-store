'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// type CartItem = {
//   id: number;
//   quantity: number;
// };

// type Item = {
//   id: number;
//   quantity: string;
// };

// type Index = {
//   index: number;
// };

// export async function RemoveProductButton(id: number) {
//   const currentCartCookie = getCookie('cart');

//   const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

//   const updatedCart = currentCart.filter((item: CartItem) => item.id !== id);

//   await setCookie(JSON.stringify(updatedCart));
// }

// add delete function to cookie

export async function removeOneProductInCart(productId) {
  const cartCookie = getCookie('cart');
  const cart = !cartCookie ? [] : parseJson(cartCookie);

  const itemToDelete = cart.filter((cartItem) => {
    return cartItem.id !== productId;
  });

  if (itemToDelete) {
    itemToDelete.quantity = undefined;
  }

  await cookies().set('cart', JSON.stringify(itemToDelete));
}
