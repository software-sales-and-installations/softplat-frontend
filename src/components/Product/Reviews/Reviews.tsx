import styles from './Reviews.module.scss';
import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { Icons } from '../../../UIStorybook/Icons/Icons.tsx';
import ReviewOneCard from '../ReviewOneCard/ReviewOneCard.tsx';


const demoReviews = [0, 0]
const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div>
        <div className={styles.reviews__headerContainer}>
          <p className={styles.reviews__header}>Отзывы</p>
          <Button buttonType='minorSecondary' width='200px' height='40px'>Написать отзыв</Button>
        </div>
        <div className={styles.reviews__ratingContainer}>
          <Icons type='filledLike' size={35}></Icons>
          <p className={styles.reviews__rate}>5</p>
          <p className={styles.reviews__rateText}>(3 оценки)</p>
        </div>
      </div>
      {demoReviews?.slice(0, 2)?.map((index: number) => (
        <ReviewOneCard key={index} />
      ))}
      <Button buttonType='link' extClassName={styles.reviews__more}>Все отзывы</Button>
    </section>
  );
};

export default Reviews;
