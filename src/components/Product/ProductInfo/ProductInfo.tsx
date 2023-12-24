import { Button } from '../../../UIStorybook/Button/Button.tsx';
import styles from './ProductInfo.module.scss'
import { SliderOneCard } from '../SliderOneCard/SliderOneCard.tsx';
import { ReactNode } from 'react';
import { IProductCard } from '../../ProductCard/ProductCardTypes.tsx';


interface IProductInfo {
  children: ReactNode;
  product: IProductCard | undefined;
  id: string | undefined;
}
const ProductInfo = ({children, product, id}: IProductInfo) => {
  const handleDownloadDemo = () => {
    // console.log('test')
    // const blob = info.blob()
    // const downloadURL = window.createObjectURL(blob)
    // const link = document.createElement('a')
    // link.href = downloadURL
    // link.download = product!.name
    // document.appendChild(link)
    // link.click()
    // link.remove()
 }

  return (
    <section className={styles.productInfo}>
      <div className={styles.productInfo__slider}>
        <SliderOneCard id={id}/>
      </div>
      <div className={styles.productInfo__description}>
      <p className={styles.productInfo__category}>{product?.category?.name}</p>
        <div className={styles.productInfo__name}>
          <h1>{product?.name}</h1>
          <h2>{product?.vendor?.name}</h2>
          <p>{product?.version}</p>
        </div>
        <div className={styles.productInfo__priceInfo}>
          <h3>{product?.price} &#8381;</h3>
          <div>
            <p>{product?.seller?.name}</p>
          </div>
          { product?.hasDemo && <Button onClick={handleDownloadDemo} buttonType='minorGrey' width='136px' height='35px'>Скачать демо</Button>}
        </div>
        <p className={styles.productInfo__text}>{product?.description}</p>
        {children}
    </div>
    </section>
  );
};

export default ProductInfo;
