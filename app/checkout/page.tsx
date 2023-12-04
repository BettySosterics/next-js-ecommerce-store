import Link from 'next/link';
import CheckoutButton from './CheckoutButton';

export const metadata = {
  title: 'Checkout',
  description: 'Your checkout at Your Turtles',
};

export default function CheckoutPage() {
  return (
    <>
      <section>
        <h1>CHECKOUT</h1>
        <Link href="/products">back to all products</Link>
      </section>

      <section>
        <h1>PAYMENT METHOD</h1>
        <form className="form">
          <label htmlFor="your name on your card">
            name on card
            <input required />
          </label>
          <label htmlFor="card number">
            card number
            <input required />
          </label>
          <label htmlFor="expiry date">
            expiry date
            <input required />
          </label>
          <label htmlFor="cvc">
            cvc
            <input required />
          </label>
        </form>
      </section>

      <section>
        <h1>YOUR ORDER SUMMARY</h1>
        <p>item1</p>
        <p>item2</p>
      </section>

      <CheckoutButton />
    </>
  );
}
