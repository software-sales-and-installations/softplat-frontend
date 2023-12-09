import { FC } from 'react';
import styles from './Search.module.scss';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { useAppSelector } from '../../services/redux/store';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Search: FC = () => {
  const { state } = useLocation();
  const cards = useAppSelector(state => state.cards.cards);
  const searchedCountries = cards.products.filter(card => {
    return card.name.toLowerCase().includes(state.toLowerCase());
  });
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.search}>
        {!searchedCountries.length ? (
          <>
            <h2 className={styles.search__title}>Ничего не найдено</h2>
            <p className={styles.search__notFound}>
              Возможно, Вам понравятся эти программы
            </p>
          </>
        ) : (
          <h2 className={styles.search__title}>Лучшие совпадения</h2>
        )}
        <div className={styles.search__items}>
          <CardsGrid
            cards={
              searchedCountries.length !== 0
                ? { products: searchedCountries }
                : cards
            }
          />
        </div>
      </section>
    </>
  );
};

export default Search;
