import { FC } from 'react';
import styles from './CatalogSection.module.scss';
import { useParams } from 'react-router-dom';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { CATALOGUE_NAMES, PRODUCT_ITEMS } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import { Categories } from '../../components/Categories/Categories';

// type Props = {};

const CatalogSection: FC = () => {
  const { section } = useParams();

  const catalogName = CATALOGUE_NAMES.find(item => item.pathName === section);
  return (
    <section className={styles.catalogSection}>
      <h2 className={styles.catalogSection__title}>{catalogName?.name}</h2>
      <div className={styles.catalogSection__categories}>
        <Categories />
      </div>
      <div className={styles.catalogSection__selectForm}>
        <SelectForm />
      </div>
      <div className={styles.catalogSection__items}>
        <CardsGrid cards={PRODUCT_ITEMS} />
      </div>
    </section>
  );
};

export default CatalogSection;
