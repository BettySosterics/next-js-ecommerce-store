import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default async function ProductsGrid() {
  const products = await getProducts();
  return (
    <>
      {products.map((product) => {
        return (
          <span key={`product-div-${product.id}`}>
            <br />
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              <h3>{product.name}</h3> <br />{' '}
              <Image
                src={`/images/${product.imageName}.png`}
                alt={product.name}
                width={200}
                height={200}
              />
            </Link>
          </span>
        );
      })}
    </>
  );
}
