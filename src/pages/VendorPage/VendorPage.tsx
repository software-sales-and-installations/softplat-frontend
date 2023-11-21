import { FC } from 'react';
import styles from './VendorPage.module.scss';
import VendorInfo from '../../components/VendorInfo/VendorInfo';
import { CATEGORIZED_TEXT_VENDOR, PRODUCT_ITEMS } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { PRODUCERS_LIST } from '../../utils/constants';
import { useParams } from 'react-router-dom';

// type Props = {};

const VendorPage: FC = () => {
  const {vendor} = useParams();
  const selectVendor = PRODUCERS_LIST.find(i=>i.title.toLowerCase()===vendor)
  const constVendor = selectVendor || {title:'', description:'', label: ''}
  return (
    <section className={styles.vendorPage}>
      <VendorInfo
        title={constVendor.title}
        description={constVendor.description ||''}
        img={constVendor.label}
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
        <CardsGrid cards={PRODUCT_ITEMS} />
      </div>
    </section>
  );
};

export default VendorPage;
