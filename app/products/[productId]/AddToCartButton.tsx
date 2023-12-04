'use client';
import { useState } from 'react';
import { createOrUpdateItem } from './actions.js';

type Props = {
  productId: string;
};

export default function AddToCartButton(props: Props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      {/* <p>Quantity:</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      /> */}
      {count}{' '}
      <button
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
        data-test-id="product-quantity"
      >
        -
      </button>
      <button
        onClick={() => setCount(count + 1)}
        data-test-id="product-quantity"
      >
        +
      </button>
      *max quantity: 20
      <br />
      <button
        onClick={async () => {
          await createOrUpdateItem(props.productId, count);
        }}
        data-test-id="product-add-to-cart"
      >
        Add to Cart
      </button>
    </div>
  );
}
