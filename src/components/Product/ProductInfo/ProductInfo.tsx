import { Button } from '../../../UIStorybook/Button/Button.tsx';
import styles from './ProductInfo.module.scss'
import { SliderOneCard } from '../SliderOneCard/SliderOneCard.tsx';
import { slides } from '../../../utils/constants.ts';
import ProductButtons from '../ProductButtons/ProductButtons.tsx';
import ProductModerationForm from '../ProductModerationForm/ProductModerationForm.tsx';

const fakeSeller = {
  id: '1',
  category: 'Категория',
  title: 'Название товара',
  vendor: 'Вендор',
  price: '1000',
  seller: 'Продавец',
  text: 'Описание товара',
}

const ProductInfo = ({}) => {

  return (
    <section className={styles.productInfo}>
      <div className={styles.productInfo__slider}>
        <SliderOneCard slides={slides}/>
      </div>
      <div className={styles.productInfo__description}>
      <p className={styles.productInfo__category}>{fakeSeller.category}</p>
        <div className={styles.productInfo__name}>
          <h1>{fakeSeller.title}</h1>
          <h2>{fakeSeller.vendor}</h2>
          <p>{fakeSeller.id}</p>
        </div>
        <div className={styles.productInfo__priceInfo}>
          <h3>{fakeSeller.price} &#8381;</h3>
          <div>
            <p>{fakeSeller.seller}</p>
          </div>
          <Button buttonType='minorGrey' width='136px' height='35px'>Скачать демо</Button>
        </div>
        <p className={styles.productInfo__text}>{fakeSeller.text}</p>
        <ProductButtons />
        <ProductModerationForm />
    </div>
    </section>
  );
};

export default ProductInfo;
