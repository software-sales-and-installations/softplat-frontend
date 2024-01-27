import { FC } from 'react';
import styles from './Producers.module.scss';
import DropDown from '../../UI/DropDown/DropDown';
import { API_BASE_URL, SELECT_COUNTRIES_OPTIONS } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../services/redux/store';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import { useVendorListQuery } from '../../utils/api/vendorApi';
import Preloader from '../../components/Preloader/Preloader';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CONST__IMG from '../../images/underfined-image.jpg';

export const Producers: FC = () => {
  const countryOption = useAppSelector(state => state.dropdown.countryOption);
  const countriesArr = countryOption.map((i: any) => i.value);

  const { data: vendorAll, isLoading, error } = useVendorListQuery();

  const filteredVendors = vendorAll?.vendors.filter((vendor: IVendor) => {
    if (countriesArr.length) {
      return countriesArr.includes(vendor.country);
    }
    return vendorAll;
  });

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <h1 className={styles.title}>Производители</h1>
      <div className={styles.ddcontainer}>
        <DropDown
          isMultiOption
          type={SelectorType.COUNTRY}
          options={SELECT_COUNTRIES_OPTIONS}
        />
      </div>
      <div className={styles.container}>
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <p>Произошла ошибка</p>
        ) : (
          filteredVendors?.map((vendor: IVendor) => {
            return (
              <Link
                key={vendor.id}
                to={`/producers/${vendor.id}`}
                className={styles.container__link}
              >
                <img
                  className={styles.container__img}
                  src={vendor?.image?.id? `${API_BASE_URL}/image/${vendor?.image?.id}`: CONST__IMG}
                  alt={vendor.name}
                />
                <h2 className={styles.container__title}>{vendor.name}</h2>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
