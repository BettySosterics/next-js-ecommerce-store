import './globals.scss';
import { Crushed } from 'next/font/google';
import Link from 'next/link';
import { ReactNode } from 'react';
import ItemsInCart from './ItemsInCart';

const crushed = Crushed({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: { default: 'Home page | SlowPack', template: '%s | SlowPack' },
  description: 'gotta catch those SlowPacks!',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      {/* <head>
        <Link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head> */}
      <body className={crushed.className}>
        <header>
          <nav className="nav">
            <Link href="/">
              <img src="/images/logo.svg" alt="icon" width={50} height={50} />
            </Link>
            {/* <Link href="/">Home</Link> */}
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout" data-test-id="cart-link">
              Checkout
            </Link>
            {/* <Link href="/thankyou">Thank You</Link> */}
            <Link href="/cart">
              <ItemsInCart data-test-id="cart-count" />
            </Link>
          </nav>
        </header>
        {props.children}
        {/* <footer className="footer">
          {' '}
          <Link href="/">Impressum</Link>
          <Link href="/">About SlowPack</Link>
          <Link href="/">Career</Link>
          <Link href="/checkout">Checkout</Link>
          {/* <Link href="/thankyou">Thank You</Link> */}
        {/* </footer> */}
      </body>
    </html>
  );
}
