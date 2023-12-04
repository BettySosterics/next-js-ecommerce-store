import styles from './page.module.css';
import ProductsGrid from './products/ProductsGrid';

export default function HomePage() {
  return (
    <>
      <h1 className={styles.heroText}>Welcome to SlowPack!</h1>
      <span className={styles.productsGrid}>{ProductsGrid()}</span>
    </>
  );
}
