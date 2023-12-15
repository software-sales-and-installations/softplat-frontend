import styles from './Reviews.module.scss';
import { Button } from '../../../UIStorybook/Button/Button.tsx';
// import { Icons } from '../../../UIStorybook/Icons/Icons.tsx';
import ReviewOneCard from '../ReviewOneCard/ReviewOneCard.tsx';
import { useProductCommentsQuery } from '../../../utils/api/publicCommentApi.tsx';
import Preloader from '../../Preloader/Preloader.tsx';

interface IReviewProps {
  id: string;
}

const Reviews = ({id}:IReviewProps) => {

  const {data: reviews, isLoading, error} = useProductCommentsQuery({productId: id, minId: '0', pageSize: '2'});


  return (
    <section className={styles.reviews}>
      <div>
        <div className={styles.reviews__headerContainer}>
          <p className={styles.reviews__header}>Отзывы</p>
          <Button buttonType='minorSecondary' width='200px' height='40px'>Написать отзыв</Button>
        </div>
        { reviews?.comments.length! >= 1 &&
          <div className={styles.reviews__ratingContainer}>
          {/*<Icons type='filledLike' size={35}></Icons>*/}
          {/*<p className={styles.reviews__rate}>5</p>*/}
          {/*<p className={styles.reviews__rateText}>(3 оценки)</p>*/}
        </div> }
      </div>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p>Произошла ошибка</p>
      ) : (
        reviews?.comments.length! < 1 ?
          <p>Отзывов пока нет. Будьте первыми</p> :
          reviews?.comments?.map((review) => (
          <ReviewOneCard key={review.id} />
        ))
      )}
      { reviews?.comments.length! >= 1 && <Button buttonType='link' extClassName={styles.reviews__more}>Все отзывы</Button>}
    </section>
  );
};

export default Reviews;
