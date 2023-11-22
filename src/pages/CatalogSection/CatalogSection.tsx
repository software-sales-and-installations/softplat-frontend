import { FC, useEffect } from 'react';
import styles from './CatalogSection.module.scss';
import { useParams } from 'react-router-dom';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { CATALOGUE_NAMES, PRODUCT_ITEMS } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import { Categories } from '../../components/Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCards } from '../Catalog/CatalogSlice';
import { AppDispatch, RootState } from '../../services/redux/store';

// type Props = {};

const CatalogSection: FC = () => {
  const { section } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllCards())
  }, [])

  const cards = useSelector((store: RootState) => store.cards.cards)

  console.log(cards);


  const catalogName = CATALOGUE_NAMES.find(item => item.pathName === section);
  return (
    <section className={styles.catalogSection}>
      <h2 className={styles.catalogSection__title}>{catalogName?.name}</h2>
      <div className={styles.catalogSection__categories}>
        <Categories />
      </div>
      <div className={styles.catalogSection__selectForm}>
        <SelectForm />
      </div>
      <div className={styles.catalogSection__items}>
        <CardsGrid cards={cards} />
      </div>
    </section>
  );
};

export default CatalogSection;
