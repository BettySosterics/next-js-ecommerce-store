import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  imageName: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  image_name varchar(50) NOT null,
  price integer NOT null,
  description varchar(50) NOT NULL
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
DROP TABLE products`;
}
