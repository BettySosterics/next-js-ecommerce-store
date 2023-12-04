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
    CREATE TABLE
      products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        NAME VARCHAR(50) NOT NULL,
        image_name VARCHAR(50) NOT NULL,
        price INTEGER NOT NULL,
        description VARCHAR(50) NOT NULL
      )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products`;
}
