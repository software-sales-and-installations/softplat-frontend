import { FC, useEffect } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { CATEGORIZED_TEXT_VENDOR, PRODUCT_ITEMS } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchSortedCards } from '../../services/redux/slices/cards/cards';

// type Props = {};

const VendorPage: FC = () => {
  const dispatch = useAppDispatch()
  const { state } = useLocation();
  const selectState = useAppSelector(state => state.dropdown.option.value);
  const cards = useAppSelector(store => store.cards.cards) || [];
  useEffect(() => {
    dispatch(fetchSortedCards(selectState))
  }, [selectState])

  const vendorCards = cards?.products?.filter(card => card.vendor?.id === state.id);
  // const {vendor} = useParams();
  // const selectVendor = PRODUCERS_LIST.find(i=>i.title.toLowerCase()===vendor)
  // const constVendor = selectVendor || {title:'', description:'', label: ''}
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
        <SelectForm />
      </div>
      <div className={styles.vendorPage__products}>
        <CardsGrid cards={{products:vendorCards}} />
      </div>
    </section>
  );
};

export default VendorPage;
