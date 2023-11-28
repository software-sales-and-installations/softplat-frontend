import { FC, useEffect } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { CATEGORIZED_TEXT_VENDOR, SELECT_OPTIONS } from '../../utils/constants';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchSortedCards } from '../../services/redux/slices/cards/cards';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';

// type Props = {};

const VendorPage: FC = () => {
  const dispatch = useAppDispatch();
  const {vendor} = useParams();
  console.log(vendor)
  const { state } = useLocation();
  const selectState = useAppSelector(state => state.dropdown.option.value);
  const cards = useAppSelector(store => store.cards.cards) || [];

  useEffect(() => {

  })

  useEffect(() => {
    dispatch(fetchSortedCards(selectState));
  }, [selectState]);

  const vendorCards = cards?.products?.filter(
    card => card.vendor?.id === state.id,
  );

  return (
    <section className={styles.vendorPage}>
      <VendorInfo
        title={state.name}
        description={state.description || ''}
        img={state.image?.url}
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
        <CardsGrid cards={{ products: vendorCards }} />
      </div>
    </section>
  );
};

export default VendorPage;
