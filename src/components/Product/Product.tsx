import styles from './Product.module.scss'
import ProductInfo from './ProductInfo/ProductInfo.tsx';
import Similar from './Similar/Similar.tsx';
export const Product = () => {
  return (
    <div className={styles.product}>
      <ProductInfo/>
      <Similar />
    </div>
  );
};
