import { cookies } from 'next/headers';

export default function ItemsImCart() {
  const getCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !getCookie || JSON.parse(getCookie).length === 0
      ? []
      : JSON.parse(getCookie);

  function sumQuantity() {
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + Number(object.quantity);
    }, 0);
    return sumTotal;
  }

  // const productsInCart = products.map((product) => {
  //   const matchingProductCookie = productsQuantity.find(
  //     (productQuantity) => product.id === productQuantity.id,
  //   );
  //   return { ...product, quantity: matchingProductCookie?.quantity };
  // });

  // const productsWithQuantity = productsInCart.filter((productInCart) => {
  //   return productInCart.quantity >= 1;
  // });

  return <div>{getCookie ? sumQuantity() : '0'}</div>;
}
