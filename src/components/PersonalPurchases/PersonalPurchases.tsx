import styles from './PersonalPurchases.module.scss';
import CardPurchases from '../CardPurchases/CardPurchases';
import { PURCHASES_ITEMS_CABINET } from '../../utils/constants';

const PersonalPurchases: React.FC = () => {
  return (
    <section className={styles.personalPurchases}>
      <ul className={styles.personalPurchases__list}>
        {PURCHASES_ITEMS_CABINET.map(i => (
          <CardPurchases key={i.id} {...i} />
        ))}
      </ul>
    </section>
  );
};

export default PersonalPurchases;
