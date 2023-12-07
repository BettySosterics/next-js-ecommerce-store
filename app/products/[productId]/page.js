import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCartButton from './AddToCartButton';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  if (!singleProduct) {
    return notFound();
  }
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <img
        src={`/images/${singleProduct.imageName}.png`}
        width={200}
        height={200}
        alt={singleProduct.name}
        data-test-id="product-image"
      />
      <p>{singleProduct.description}</p>€
      <p data-test-id="product-price">{singleProduct.price}</p>
      <br />
      <AddToCartButton productId={singleProduct.id} />
      <Link href="/products">back to all products</Link>
    </div>
  );
}
