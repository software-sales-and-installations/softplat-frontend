import { FC, useEffect } from 'react';
import styles from './CatalogSection.module.scss';
import { useParams } from 'react-router-dom';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { CATALOGUE_NAMES, SELECT_OPTIONS } from '../../utils/constants';
import { Categories } from '../../components/Categories/Categories';
import { fetchSortedCards } from '../../services/redux/slices/cards/cards';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';

// type Props = {};

const CatalogSection: FC = () => {
  const { section } = useParams();
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(state => state.dropdown.option.value);
  const cards = useAppSelector(store => store.cards.cards) || [];

  useEffect(() => {
    dispatch(fetchSortedCards(selectState));
  }, [selectState]);

  const currentCatalog = CATALOGUE_NAMES.find(
    item => item.pathName === section,
  );
  const categorizedCards = cards?.products?.filter(
    card => card.category?.id === currentCatalog?.id,
  );
  const productsCards = {products: categorizedCards}

  return (
    <section className={styles.catalogSection}>
      <h2 className={styles.catalogSection__title}>{currentCatalog?.name}</h2>
      <div className={styles.catalogSection__categories}>
        <Categories />
      </div>
      <div className={styles.catalogSection__selectForm}>
        <DropDown type={SelectorType.BASE} options={SELECT_OPTIONS} />
      </div>
      <div className={styles.catalogSection__items}>
        <CardsGrid cards={productsCards} />
      </div>
    </section>
  );
};

export default CatalogSection;
