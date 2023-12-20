import styles from './Review.module.scss'
import { Icons } from '../../../UIStorybook/Icons/Icons.tsx';

interface IReviewOneCardProps {
  author: string;
  text: string;
  rating: string | number | null;
}

const ReviewOneCard = ({author, text, rating}:IReviewOneCardProps) => {
  return (
    <div className={styles.review}>
<div className={styles.review__header}>
  <p className={styles.review__name}>{author}</p>
  <div className={styles.review__stars}>{[...Array(Number(rating))].map((n) => <Icons type='smallStar' size={15} key={n}/>)}</div>
</div>
      <p className={styles.review__text}>{text}</p>
    </div>
  );
};

export default ReviewOneCard;
