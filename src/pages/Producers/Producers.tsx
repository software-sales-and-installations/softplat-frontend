import { FC, useEffect } from 'react';
import styles from './Producers.module.scss';
import DropDown from '../../UI/DropDown/DropDown';
import { SELECT_COUNTRIES_OPTIONS } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchAllVendors } from '../../services/redux/slices/vendors/vendors';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
// import { changeCountryOption } from '../../UI/DropDown/DropDownSlice';

export const Producers: FC = () => {
  const dispatch = useAppDispatch();
  const countryOption = useAppSelector(state => state.dropdown.countryOption);

  useEffect(() => {
    dispatch(fetchAllVendors());
  }, []);

  const vendors = useAppSelector(state => state.vendors.vendors.vendors);

  const filteredVendors = vendors.filter(
    vendor => vendor.country === countryOption.value,
  );
  return (
    <>
      <Breadcrumbs />
      <h1 className={styles.title}>Производители</h1>
      <div className={styles.ddcontainer}>
        <DropDown
          type={SelectorType.COUNTRY}
          options={SELECT_COUNTRIES_OPTIONS}
        />
      </div>
      <div className={styles.container}>
        {filteredVendors.map(vendor => {
          return (
            <Link
              key={vendor.id}
              to={`/producers/${vendor.id}`}
              className={styles.container__link}
            >
              <img
                className={styles.container__img}
                src={vendor.image?.url}
                alt={vendor.name}
              />
              <h2 className={styles.container__title}>{vendor.name}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
};
