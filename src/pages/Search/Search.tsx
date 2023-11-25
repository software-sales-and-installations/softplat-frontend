import { FC } from 'react';
import styles from './Search.module.scss';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { useAppSelector } from '../../services/redux/store';
import { useLocation } from 'react-router-dom';

// type Props = {}

const Search: FC = () => {
  const { state } = useLocation();
  const cards = useAppSelector(state => state.cards.cards);
  const searchedCountries = cards.products.filter(card => {
    return card.name.toLowerCase().includes(state.toLowerCase());
  });
  return (
    <section className={styles.search}>
      <h2 className={styles.search__title}>Результаты поиска: {state}</h2>
      {!searchedCountries.length && (
        <p className={styles.search__notFound}>
          Ничего не найдено. Возможно, Вам понравятся эти программы
        </p>
      )}
      <div className={styles.search__items}>
        <CardsGrid
          cards={searchedCountries.length !== 0 ? {products: searchedCountries} : cards}
        />
      </div>
    </section>
  );
};

export default Search;
