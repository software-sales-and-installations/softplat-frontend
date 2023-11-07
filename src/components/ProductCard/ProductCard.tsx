import React from 'react';
import styles from './ProductCard.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

type ProductCardProps = {
    name: string;
    price: number;
    img: string;
    isLiked: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, img, isLiked }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={img} alt="Изображение продукта" />
        <button className={styles.card__likeBtn} type="button">
          <img
            src={isLiked ? AiFillHeart : AiOutlineHeart}
            alt="Иконка лайка"
          />
        </button>
      </div>
      <p className={styles.card__name}>{name}</p>
      <div className={styles.card__priceContainer}>
        <p className={styles.card__price}>{price} ₽</p>
        <p className={styles.card__installPrice}>
          <span>с установкой </span>
          {(price * (1 + 15.59 / 100)).toFixed()}
        </p>
      </div>
      <button className={styles.card__addBtn} type='button'>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;
