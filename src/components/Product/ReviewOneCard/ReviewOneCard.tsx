import styles from './Review.module.scss'

const ReviewOneCard = () => {
  return (
    <div className={styles.review}>
<div className={styles.review__header}>
  <p className={styles.review__name}>Name</p>
  <div className={styles.review__stars}>*****</div>
</div>
      <p className={styles.review__text}>Review Text</p>
    </div>
  );
};

export default ReviewOneCard;
