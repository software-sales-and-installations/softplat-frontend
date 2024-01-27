import { FC, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import {
  IProductCard,
  ProductStatus,
} from '../../components/ProductCard/ProductCardTypes';
import Preloader from '../../components/Preloader/Preloader';
import { useLocation } from 'react-router-dom';

const Search: FC = () => {
  const { state } = useLocation();
  const [searchvalue, setSearchvalue] = useState<string>('');
  useEffect(() => {
    setSearchvalue(localStorage.getItem('searchValue') || '');
  }, [state]);

  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: '',
    sort: 'NEWEST',
  });

  const searchedCountries = data?.products.filter((card: IProductCard) => {
    return (
      (card.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
        card.id.toString().includes(searchvalue)) &&
      ProductStatus.PUBLISHED &&
      card.quantity > 0
    );
  });

  const recommended = data?.products.filter(
    (card: IProductCard) => card.quantity > 0,
  );

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.search}>
        {!searchedCountries?.length ? (
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
          {isLoading ? (
            <Preloader />
          ) : error ? (
            <p>Произошла ошибка</p>
          ) : (
            <CardsGrid
              cards={
                searchedCountries?.length !== 0
                  ? { products: searchedCountries }
                  : { products: recommended }
              }
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
