//КОМПОНЕНТ НЕ ИСПОЛЬЗУЕТСЯ??

import { FC, useEffect } from 'react';
import styles from './Catalog.module.scss';
import { Categories } from '../../components/Categories/Categories';
import SelectForm from '../../components/SelectForm/SelectForm';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { PRODUCT_ITEMS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppSelector } from '../../services/redux/store';
import { fetchAllCards } from '../../services/redux/slices/cards/cards';


const Catalog: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useAppSelector((state) => state.cards.cards)
  console.log(cards)

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
