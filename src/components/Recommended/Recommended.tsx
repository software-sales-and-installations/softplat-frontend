import { FC } from 'react';
import CardsGrid from '../CardsGrid/CardsGrid';
import styles from './Recommended.module.scss';
import { useAppSelector } from '../../services/redux/store';

// type Props = {};

const Recommended: FC = () => {
  const cards = useAppSelector(state => state.cards.cards);

  return (
    <section className={styles.recommended}>
      <h2 className={styles.recommended__title}>Рекомендуем к покупке</h2>
      <ul className={styles.recommended__list}>
        <CardsGrid cards={cards} />
      </ul>
    </section>
  );
};

export default Recommended;
