import { FC } from 'react';
import styles from './CatalogSection.module.scss';
import { useParams } from 'react-router-dom';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import {
  CATALOGUE_NAMES,
  CATEGORIZED_TEXT_VENDOR,
  SELECT_COUNTRIES_OPTIONS,
  SELECT_OPTIONS,
} from '../../utils/constants';
import { useAppSelector } from '../../services/redux/store';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import {
  IProductCard,
  ProductStatus,
} from '../../components/ProductCard/ProductCardTypes';
import Preloader from '../../components/Preloader/Preloader';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useVendorListQuery } from '../../utils/api/vendorApi';
import { Categories } from '../../components/Categories/Categories';

const CatalogSection: FC = () => {
  const { section } = useParams();
  const selectState = useAppSelector(state => state.dropdown.option.value);
  const countrySelected = useAppSelector(state => state.dropdown.countryOption);
  const vendorSelected = useAppSelector(state => state.dropdown.vendorOption);

  const { data: vendorAll } = useVendorListQuery();

  const vendorsOptions = vendorAll?.vendors.map((v: any) => ({
    value: v.name,
    label: v.name,
  }));

  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: '',
    sort: selectState,
  });

  const currentCatalog = CATALOGUE_NAMES.find(
    item => item.pathName === section,
  );
  const categorizedCards = data?.products?.filter(
    (card: IProductCard) =>
      card.category?.id === currentCatalog?.id &&
      card.productStatus === ProductStatus.PUBLISHED &&
      card.quantity > 0,
  );

  const filterCards = () => {
    const filteredByCountry = categorizedCards?.filter((i: any) => {
      if (countrySelected.length) {
        // @ts-ignore
        return countrySelected.map(c => c.value).includes(i.vendor.country);
      }
      return categorizedCards;
    });

    const filteredByVendor = filteredByCountry?.filter((i: any) => {
      if (vendorSelected.length) {
        // @ts-ignore
        return vendorSelected.map(v => v.value).includes(i.vendor.name);
      }
      return categorizedCards;
    });

    return filteredByVendor;
  };

  const productsCards = { products: filterCards() };

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.catalogSection}>
        <h2 className={styles.catalogSection__title}>{currentCatalog?.name}</h2>
        <Categories />
        <div className={styles.catalogSection__selectContainer}>
          <DropDown
            isMultiOption={false}
            type={SelectorType.BASE}
            options={SELECT_OPTIONS}
          />
          <DropDown
            isMultiOption
            type={SelectorType.VENDOR}
            options={vendorsOptions || []}
          />
          <DropDown
            isMultiOption
            type={SelectorType.COUNTRY}
            options={SELECT_COUNTRIES_OPTIONS}
          />
        </div>
        <div className={styles.catalogSection__items}>
          {isLoading ? (
            <Preloader />
          ) : error ? (
            <p>Произошла ошибка</p>
          ) : (
            <CardsGrid cards={productsCards} />
          )}
        </div>
      </section>
    </>
  );
};

export default CatalogSection;
