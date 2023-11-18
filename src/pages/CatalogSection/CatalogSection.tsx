import { FC } from 'react';
import styles from './CatalogSection.module.scss';
import { useParams } from 'react-router-dom';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { PRODUCT_ITEMS } from '../../utils/constants';
import SelectForm from '../../components/SelectForm/SelectForm';
import { Categories } from '../../components/Categories/Categories';

type Props = {};

const CatalogSection: FC = (props: Props) => {
  const { section } = useParams();
  return (
    <section className={styles.catalogSection}>
      <h2 className={styles.catalogSection__title}>{section}</h2>
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
