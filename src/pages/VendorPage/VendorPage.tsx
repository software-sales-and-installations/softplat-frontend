import { FC } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { CATEGORIZED_TEXT_VENDOR, SELECT_OPTIONS } from '../../utils/constants';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../services/redux/store';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import {
  IProductCard,
  ProductStatus,
} from '../../components/ProductCard/ProductCardTypes';
import Preloader from '../../components/Preloader/Preloader';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import { useVendorQuery } from '../../utils/api/vendorApi';

// type Props = {};

const VendorPage: FC = () => {
  const { id } = useParams();
  const selectState = useAppSelector(state => state.dropdown.option.value);

  const { data: vendor, isSuccess: isVendorFulfilled } = useVendorQuery(id);

  const { data, error, isLoading } = usePublicProductListQuery(
    {
      minId: 0,
      pageSize: '',
      sort: selectState,
    },
    { skip: !isVendorFulfilled },
  );

  const vendorCards = data?.products?.filter(
    (card: IProductCard) =>
      card.vendor?.id === vendor.id &&
      card.productStatus === ProductStatus.PUBLISHED,
  );

  return (
    <section className={styles.vendorPage}>
      <VendorInfo
        title={vendor?.name}
        description={vendor?.description || ''}
        img={vendor?.image?.url || ''}
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
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <p>Произошла ошибка</p>
        ) : (
          <CardsGrid cards={{ products: vendorCards }} />
        )}
      </div>
    </section>
  );
};

export default VendorPage;
