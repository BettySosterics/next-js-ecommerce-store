import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Product } from '../migrations/00000-createTableProduct';

// Array of products
// const products = [
// {
//   id: 1,
//   name: 'Billy',
//   imageName: 'billy',
//   price: 39,
//   description: 'Billy is the saviour of all!',
// },
// {
//   id: 2,
//   name: 'Jack',
//   imageName: 'jack',
//   price: 39,
//   description: 'Do not mess with eagle-eye Jack',
// },
// {
//   id: 3,
//   name: 'Dines',
//   imageName: 'dines',
//   price: 39,
//   description: 'Fear the power of Dines!',
// },
// {
//   id: 4,
//   name: 'Mydas',
//   imageName: 'mydas',
//   price: 39,
//   description: 'The Greek is here!',
// },
// {
//   id: 5,
//   name: 'Chelo',
//   imageName: 'chelo',
//   price: 39,
//   description: 'Chelo shows you the way',
// },
// ];

// type Product = {
//   id: number;
//   name: string;
//   imageName: string;
//   price: number;
//   description: string;
// };

export const getProducts = cache(async () => {
  // return products;
  const products = await sql<Product[]>`
SELECT * FROM products
`;
  return products;
});

export const getProductById = cache(async (id: number) => {
  // return products;
  const [product] = await sql<Product[]>`
    SELECT
     *
     FROM
      products
      WHERE
       id = ${id}
       `;
  return product;
});
// export function getProduct(id: number) {
//   return products.find((product) => product.id === id);
// }

export const deleteProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    DELETE FROM
      products
    WHERE
      id = ${id}
    RETURNING *
  `;

  return product;
});

export const createProduct = cache(
  async (
    name: string,
    imageName: string,
    price: number,
    description: string,
  ) => {
    const [product] = await sql<Product[]>`
      INSERT INTO products
        (name, image_name, price, description)
      VALUES
        (${name}, ${imageName}, ${price}, ${description})
      RETURNING *
    `;

    return product!;
  },
);

export const updateProductById = cache(
  async (
    id: number,
    name: string,
    imageName: string,
    price: number,
    description: string,
  ) => {
    const [product] = await sql<Product[]>`
      UPDATE
        products
      SET
        name = ${name},
        image_name = ${imageName},
        price = ${price},
        description = ${description}
      WHERE id = ${id}
      RETURNING *
    `;
    return product;
  },
);
