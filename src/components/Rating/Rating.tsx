import styles from './Rating.module.scss';
import { IconEmptyStar } from '../../UIStorybook/IconEmptyStar/IconEmptyStar.tsx';

interface IRatingProps {
  rate: number;
  totalComments: number;
}

const Rating = ({ rate, totalComments }: IRatingProps) => {
  const fill = rate * 100 / 5 + '%';
  return (
    <div className={styles.rating}>
      <IconEmptyStar fill={fill} />
      <p className={styles.rating__number}>{rate}</p>
      <p className={styles.rating__text}>({totalComments} {totalComments === 1
        ? 'оценка'
        : totalComments < 5 && totalComments !== 0
          ? 'оценки'
          : 'оценок'})</p>
    </div>
  );
};

export default Rating;

