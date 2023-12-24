import { Button } from '../../../UIStorybook/Button/Button.tsx';
import ReviewOneCard from '../ReviewOneCard/ReviewOneCard.tsx';
import { useProductCommentsQuery } from '../../../utils/api/publicCommentApi.tsx';
import Preloader from '../../Preloader/Preloader.tsx';
import Rating from '../../Rating/Rating.tsx';
import { RootState, useAppDispatch, useAppSelector } from '../../../services/redux/store';

import styles from './Reviews.module.scss';
import { popupState } from '../../../UI/Popup/PopupSlice.tsx';
import { selectUser } from '../../../services/redux/slices/user/user.ts';

import { useEffect, useState } from 'react';
import { useOrderAllQuery } from '../../../utils/api/buyerOrderApi.tsx';
import { cardPurchasesProps } from '../../CardPurchases/CardPurchases.tsx';
import { productName, productId } from '../../../services/redux/slices/product/product.ts';
import { setIsReview } from '../../../services/redux/slices/reviews/reviews.ts';

interface IReviewProps {
  id: string | undefined;
  name: string | undefined;
}

type Product = Omit<cardPurchasesProps, 'data'>;

  const Reviews = ({id, name}:IReviewProps) => {
  const dispatch = useAppDispatch();
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  const user = useAppSelector(selectUser);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [count, setCount] = useState(2)
  const {data: reviews , isLoading, error} = useProductCommentsQuery({productId: id, minId: '0', pageSize: count.toString()});
  const ratingArray = reviews?.comments?.map(item => item.rating) || [0];
  const totalRating = ratingArray?.length !== 0 ? (ratingArray.reduce((sum, number) => Number(sum) + Number(number)) || 0 / ratingArray?.length) : 0;

  const { data: purchaseItems} = useOrderAllQuery(
    localStorage.getItem('userId'),
  );

  const purchased = purchaseItems?.orders.map(
    (item: {
      id: number;
      productsOrdered: {
        id: number;
        productResponseDto: Product;
      }[];
    }) => (
      item.productsOrdered.map(
        (product: { id: number; productResponseDto: Product }) => ( product.productResponseDto.id),
      )
    ),
  ).flat().includes(Number(id))

  const reviewed = reviews?.comments?.map(item => item.author.id).includes(Number(userId)) || false

    useEffect(() => {
    setUserId(localStorage.getItem('userId'));
  }, [signout, user]);


  const handleOpenCommentPopup = () => {
    dispatch(popupState(true));
    dispatch(productName(name || ''))
    dispatch(productId(id || ''))
    dispatch(setIsReview(true));
  }

  const handleMoreClick = () => {
    setCount( count + (reviews?.totalComments || 0))
  }

  return (
    <>
      <section className={styles.reviews}>
      <div>
        <div className={styles.reviews__headerContainer}>
          <p className={styles.reviews__header}>Отзывы</p>
          {userId && !reviewed && purchased && <Button buttonType='minorSecondary' width='200px' height='40px' onClick={handleOpenCommentPopup}>Написать отзыв</Button>}
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
          <ReviewOneCard key={'review' + review.id} author={review.author.name} text={review.text} rating={review.rating}/>
        ))
      )}
      { reviews?.comments.length! >= 2 && count <= reviews?.totalComments! && <Button onClick={handleMoreClick} buttonType='link' extClassName={styles.reviews__more}>Все отзывы</Button>}
    </section>
</>
);
};

export default Reviews;
