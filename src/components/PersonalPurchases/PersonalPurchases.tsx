import styles from './PersonalPurchases.module.scss';
import CardPurchases from '../CardPurchases/CardPurchases';
import { PURCHASES_ITEMS_CABINET } from '../../utils/constants';

const PersonalPurchases: React.FC = () => {
  return (
    <section className={styles.personalPurchases}>
      <h2 className={styles.personalPurchases__title}>Мои покупки</h2>
      <ul className={styles.personalPurchases__list}>
        {PURCHASES_ITEMS_CABINET.map(i => (
          <li key={i.id} className={styles.personalPurchases__item}>
            <CardPurchases
              img={i.img}
              name={i.name}
              brand={i.brand}
              describe={i.describe}
              data={i.data}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalPurchases;
