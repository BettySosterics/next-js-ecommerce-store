'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();
  const redirect = async () => {
    await router.push('/thankyou');
  };
  return (
    <div>
      <h2>Confirm your Order</h2>

      <button data-test-id="checkout-confirm-order" onClick={redirect}>
        Confirm Order
      </button>
    </div>
  );
}
