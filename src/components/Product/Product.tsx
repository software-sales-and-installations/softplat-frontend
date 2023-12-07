import styles from './Product.module.scss'
import ProductInfo from './ProductInfo/ProductInfo.tsx';
export const Product = () => {
  return (
    <div className={styles.product}>
      <ProductInfo/>
    </div>
  );
};
