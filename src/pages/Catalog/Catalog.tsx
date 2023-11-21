import { FC, useEffect } from 'react';
import styles from './Catalog.module.scss';
import { Categories } from '../../components/Categories/Categories';
import SelectForm from '../../components/SelectForm/SelectForm';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { PRODUCT_ITEMS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { fetchAllCards } from './CatalogSlice';

// type Props = {};

const Catalog: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCards())
  }, [])

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
