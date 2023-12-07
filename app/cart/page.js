import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { removeOneProductInCart } from './actions';

export default async function CartPage() {
  const productCookie = getCookie('cart');
  const productsQuantity = !productCookie ? [] : parseJson(productCookie);
  const products = await getProducts();

  const productsInCart = products.map((product) => {
    const matchingProductCookie = productsQuantity.find(
      (productQuantity) => product.id === productQuantity.id,
    );
    return { ...product, quantity: matchingProductCookie?.quantity };
  });

  const productsWithQuantity = productsInCart.filter((productInCart) => {
    return productInCart.quantity >= 1;
  });

  return (
    <div>
      <h1>YOUR ORDER</h1>
      <Link href="/products">back to all products</Link>
      {productsWithQuantity.map((product) => {
        return (
          <div
            key={`product-${product.id}`}
            data-test-id={`cart-product-${product.id}`}
          >
            <h3>{product.name}</h3>
            <img
              src={`/images/${product.imageName}.png`}
              width={200}
              height={200}
              alt={product.name}
            />

            <p data-test-id={`cart-product-quantity-${product.id}`}>
              Quantity: {product.quantity}
            </p>
            <p>Price: € {product.price}</p>
            <p>Subtotal Price: € {product.price * product.quantity} </p>
            <button
              onClick={removeOneProductInCart}
              data-test-id={`cart-product-remove-${product.id}`}
            >
              Remove
            </button>

            <hr />
          </div>
        );
      })}

      <button>remove all products from cart</button>
      <h2 data-test-id="cart-total">
        Total Price: €{' '}
        {productsWithQuantity.price * productsWithQuantity.quantity}
      </h2>
      <Link href="/checkout" data-test-id="cart-checkout">
        Checkout
      </Link>
    </div>
  );
}
