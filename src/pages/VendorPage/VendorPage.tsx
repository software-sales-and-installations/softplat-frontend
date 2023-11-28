import { FC, useEffect, useState } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { CATEGORIZED_TEXT_VENDOR, SELECT_OPTIONS } from '../../utils/constants';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchSortedCards } from '../../services/redux/slices/cards/cards';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import { ProductStatus } from '../../components/ProductCard/ProductCardTypes';
import { fetchSingleVendor } from '../../services/redux/slices/vendors/vendors';
import Preloader from '../../components/Preloader/Preloader';

// type Props = {};

const VendorPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const selectState = useAppSelector(state => state.dropdown.option.value);
  const cards = useAppSelector(store => store.cards.cards) || [];
  const currentVendor = useAppSelector(store => store.vendors.vendor);
  const status = useAppSelector(state => state.cards.status);

  useEffect(() => {
    dispatch(fetchSingleVendor(Number(id)));
  }, [id]);

  useEffect(() => {
    dispatch(fetchSortedCards(selectState));
  }, [selectState]);

  const vendorCards = cards?.products?.filter(
    card =>
      card.vendor?.id === currentVendor.id &&
      card.productStatus === ProductStatus.PUBLISHED,
  );

  return (
    <section className={styles.vendorPage}>
      <VendorInfo
        title={currentVendor.name}
        description={currentVendor.description || ''}
        img={currentVendor.image?.url || ''}
      />
      <ul className={styles.vendorPage__categories}>
        {CATEGORIZED_TEXT_VENDOR.map(btn => {
          return (
            <li className={styles.item} key={btn.id}>
              <button className={styles.vendorPage__categoriesBtn}>
                {btn.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.vendorPage__selectForm}>
        <DropDown type={SelectorType.BASE} options={SELECT_OPTIONS} />
      </div>
      <div className={styles.vendorPage__products}>
        {status === 'loading' ? (
          <Preloader />
        ) : (
          <CardsGrid cards={{ products: vendorCards }} />
        )}
      </div>
    </section>
  );
};

export default VendorPage;
