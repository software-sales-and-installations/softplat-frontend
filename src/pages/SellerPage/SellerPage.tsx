import {FC, useEffect} from 'react';
import styles from './SellerPage.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Categories } from '../../components/Categories/Categories';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import { useVendorListQuery } from '../../utils/api/vendorApi';
import { SELECT_OPTIONS, SELECT_COUNTRIES_OPTIONS} from '../../utils/constants';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import Preloader from '../../components/Preloader/Preloader';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { IProductCard, ProductStatus } from '../../components/ProductCard/ProductCardTypes';
import { useParams } from 'react-router';
import { useAppSelector } from '../../services/redux/store';
import { useSellerInfoQuery } from '../../utils/api/sellerApi';

export const SellerPage: FC = () =>{
    const { id } = useParams();
    const { data: vendorAll } = useVendorListQuery();
  const countrySelected = useAppSelector(state => state.dropdown.countryOption);
  const vendorSelected = useAppSelector(state => state.dropdown.vendorOption);
  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: 30,
    sort: 'NEWEST',
  });
    const { data: sellerInfo,
    // isFetching,isLoading, error
  } = useSellerInfoQuery(id);
  const publishedCards = data?.products.filter(
    (card: IProductCard) =>
      card.productStatus === ProductStatus.PUBLISHED && card.quantity > 0 && card.seller?.id.toString()===id,
  );
  
    const vendorsOptions = vendorAll?.vendors.map((v: any) => ({
      value: v.name,
      label: v.name,
    }));

    const filterCards = () => {
        const filteredByCountry = publishedCards?.filter((i: any) => {
          if (countrySelected.length) {
            // @ts-ignore
            return countrySelected.map(c => c.value).includes(i.vendor.country);
          }
          return publishedCards;
        });
    
        const filteredByVendor = filteredByCountry?.filter((i: any) => {
          if (vendorSelected.length) {
            // @ts-ignore
            return vendorSelected.map(v => v.value).includes(i.vendor.name);
          }
          return publishedCards;
        });
    
        return filteredByVendor;
      };
      useEffect(()=>{
        console.log(publishedCards)
      }, [publishedCards])
    const productsCards = { products: filterCards() };
    return (
    <>
        <div className={styles.breadcrumbs}>
            <Breadcrumbs />
        </div>
        <div className={styles.sellerPage}>
            <div className={styles.sellerPage__titleContainer}>
                <h1 className={styles.sellerPage__title}>
                    {sellerInfo?.name}
                </h1>
                {/* <div className={styles.sellerPage__rating}>5.0</div> */}
            </div>
            <p className={styles.sellerPage__subtitle}>Дата регистрации: {sellerInfo?.registrationTime.split(' ')[0].split('-').join('.').slice(0,10)}</p>
            <p className={styles.sellerPage__subtitle}>Количество товара: {productsCards?.products?.length}</p>
            <Categories/>
            <div className={styles.sellerPage__selectContainer}>
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
        <div className={styles.sellerPage__items}>
          {isLoading ? (
            <Preloader />
          ) : error ? (
            <p>Произошла ошибка</p>
          ) : (
            <CardsGrid cards={productsCards} />
          )}
        </div>
        </div>
    </>
    )
}
