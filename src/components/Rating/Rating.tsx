import styles from './Rating.module.scss';
import { IconEmptyStar } from '../../UI/IconEmptyStar/IconEmptyStar.tsx';

interface IRatingProps {
  rate: number;
  totalComments: number;
}

const Rating = ({ rate, totalComments }: IRatingProps) => {
  const fill = rate * 100 / 5 + '%';
  return (
    <div className={styles.rating}>
      <IconEmptyStar fill={fill} />
      <p className={styles.rating__number}>{rate.toFixed(1)}</p>
      <p className={styles.rating__text}>({totalComments} {totalComments === 1
        ? 'оценка'
        : totalComments < 5 && totalComments !== 0
          ? 'оценки'
          : 'оценок'})</p>
    </div>
  );
};

export default Rating;

