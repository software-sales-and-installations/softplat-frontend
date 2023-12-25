import { FC } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { SELECT_OPTIONS } from '../../utils/constants';
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
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Categories } from '../../components/Categories/Categories';

// type Props = {};

const VendorPage: FC = () => {
  const { id } = useParams();
  const selectState = useAppSelector(state => state.dropdown.option.value);

  const { data: vendor, isSuccess: isVendorFulfilled } = useVendorQuery(id,{
    refetchOnMountOrArgChange: true
  });

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
      card.vendor?.id === vendor?.id &&
      card.productStatus === ProductStatus.PUBLISHED &&
      card.quantity > 0,
  );

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs pageName={vendor?.name} />
      </div>
      <section className={styles.vendorPage}>
        <VendorInfo
          title={vendor?.name || ''}
          description={vendor?.description || ''}
          image={vendor?.image || ''}
        />
        <Categories />
        <div className={styles.vendorPage__selectForm}>
          <DropDown
            isMultiOption={false}
            type={SelectorType.BASE}
            options={SELECT_OPTIONS}
          />
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
    </>
  );
};
export default VendorPage;
