import { FC, useEffect } from 'react';
import styles from './CatalogSection.module.scss';
import { useParams } from 'react-router-dom';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { CATALOGUE_NAMES } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import { Categories } from '../../components/Categories/Categories';
import { fetchCards } from '../../services/redux/slices/cards/cards';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';

// type Props = {};

const CatalogSection: FC = () => {
  const { section } = useParams();
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(state => state.dropdown.option.value);
  const cards = useAppSelector(store => store.cards.cards);

  useEffect(() => {
    dispatch(fetchCards(selectState));
  }, [selectState]);

  const currentCatalog = CATALOGUE_NAMES.find(
    item => item.pathName === section,
  );
  const categorizedCards = cards?.filter(
    card => card.category?.id === currentCatalog?.id,
  );

  return (
    <section className={styles.catalogSection}>
      <h2 className={styles.catalogSection__title}>{currentCatalog?.name}</h2>
      <div className={styles.catalogSection__categories}>
        <Categories />
      </div>
      <div className={styles.catalogSection__selectForm}>
        <SelectForm />
      </div>
      <div className={styles.catalogSection__items}>
        <CardsGrid cards={categorizedCards} />
      </div>
    </section>
  );
};

export default CatalogSection;
