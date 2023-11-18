import { FC } from 'react';
import styles from './Catalog.module.scss';
import { Categories } from '../../components/Categories/Categories';
import SelectForm from '../../components/SelectForm/SelectForm';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { PRODUCT_ITEMS } from '../../utils/constants';

type Props = {};

const Catalog: FC = (props: Props) => {
  return (
    <section className={styles.catalog}>
      <h2 className={styles.catalog__title}>Каталог</h2>
      <div className={styles.catalog__categories}>
        <Categories />
      </div>
      <div className={styles.catalog__selectForm}>
        <SelectForm />
      </div>
      <div className={styles.catalog__items}>
        <CardsGrid cards={PRODUCT_ITEMS} />
      </div>
    </section>
  );
};

export default Catalog;
