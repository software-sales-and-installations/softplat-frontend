import { FC, useEffect } from 'react';
import styles from './Producers.module.scss';
import DropDown from '../../UI/DropDown/DropDown';
import { SELECT_OPTIONS } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchAllVendors } from '../../services/redux/slices/vendors/vendors';

export const Producers: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllVendors());
  }, []);

  const vendors = useAppSelector(state => state.vendors.vendors.vendors);
  return (
    <>
      <h1 className={styles.title}>Производители</h1>
      <div className={styles.ddcontainer}>
        <DropDown options={SELECT_OPTIONS} />
      </div>
      <div className={styles.container}>
        {vendors.map(vendor => {
          return (
            <Link
              key={vendor.id}
              to={`/producers/${vendor.name.toLowerCase()}`}
              className={styles.container__link}
              state={vendor}
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
