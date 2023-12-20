import { Button } from '../../../UIStorybook/Button/Button.tsx';
import ReviewOneCard from '../ReviewOneCard/ReviewOneCard.tsx';
import { useProductCommentsQuery } from '../../../utils/api/publicCommentApi.tsx';
import Preloader from '../../Preloader/Preloader.tsx';
import Rating from '../../Rating/Rating.tsx';
import { useAppDispatch } from '../../../services/redux/store';

import styles from './Reviews.module.scss';
import { popupState } from '../../../UI/Popup/PopupSlice.tsx';

interface IReviewProps {
  id: string;
}

const Reviews = ({id}:IReviewProps) => {
  const dispatch = useAppDispatch();
  const {data: reviews , isLoading, error} = useProductCommentsQuery({productId: id, minId: '0', pageSize: '2'});

  const ratingArray = reviews?.comments?.map(item => item.rating) || [0];
  const totalRating = ratingArray?.length !== 0 ? (ratingArray.reduce((sum, number) => Number(sum) + Number(number)) || 0 / ratingArray?.length) : 0;

  const handleOpenCommentPopup = () => {
    dispatch(popupState(true));
  }

  return (
    <>
      <section className={styles.reviews}>
      <div>
        <div className={styles.reviews__headerContainer}>
          <p className={styles.reviews__header}>Отзывы</p>
          <Button buttonType='minorSecondary' width='200px' height='40px' onClick={handleOpenCommentPopup}>Написать отзыв</Button>
        </div>
        {reviews?.comments.length! >= 1 &&
        <Rating rate={Number(totalRating)} totalComments={reviews?.totalComments || 0}/>
      }
      </div>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p>Произошла ошибка</p>
      ) : (
        reviews?.comments.length! < 1 ?
          <p>Отзывов пока нет. Будьте первыми</p> :
          reviews?.comments?.map((review) => (
          <ReviewOneCard key={review.id} author={review.author.name} text={review.text} rating={review.rating}/>
        ))
      )}
      { reviews?.comments.length! >= 2 && <Button buttonType='link' extClassName={styles.reviews__more}>Все отзывы</Button>}
    </section>
</>
);
};

export default Reviews;
