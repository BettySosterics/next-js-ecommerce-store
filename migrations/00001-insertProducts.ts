import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Billy',
    imageName: 'billy',
    price: 39,
    description: 'Billy is the saviour of all!',
  },
  {
    id: 2,
    name: 'Jack',
    imageName: 'jack',
    price: 39,
    description: 'Do not mess with eagle-eye Jack',
  },
  {
    id: 3,
    name: 'Dines',
    imageName: 'dines',
    price: 39,
    description: 'Fear the power of Dines!',
  },
  {
    id: 4,
    name: 'Mydas',
    imageName: 'mydas',
    price: 39,
    description: 'The Greek is here!',
  },
  {
    id: 5,
    name: 'Chelo',
    imageName: 'chelo',
    price: 39,
    description: 'Chelo shows you the way',
  },
  {
    id: 6,
    name: 'Dodo',
    imageName: 'dodo',
    price: 39,
    description: 'Dodo for the win!',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
   INSERT INTO products
   (name, image_name, price, description)
   VALUES (${product.name}, ${product.imageName}, ${product.price}, ${product.description})
   `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
  DELETE FROM products WHERE id = ${product.id}`;
  }
}
