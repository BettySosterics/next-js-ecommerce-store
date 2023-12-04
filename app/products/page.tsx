import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

// import ProductsGrid from './ProductsGrid';

export const metadata = {
  title: 'Products',
  description: 'SlowPack Products Page',
};

export default async function ProductsPage() {
  // return (
  //   <>
  //     <h1>Choose your SlowPack!</h1>
  //     <span>{ProductsGrid()}</span>
  //   </>
  // );
  const products = await getProducts();
  return (
    <>
      <h1 data-test-id="products-link">🐢 The SlowPacks 🐢</h1>
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              {product.name} {product.description}
              <Image
                src={`/images/${product.imageName}.png`}
                alt={product.name}
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
}
