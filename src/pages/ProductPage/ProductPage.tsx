import React, { FC, useState } from 'react';
import style from './ProductPage.module.scss';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

export const ProductPage: FC = ({}) => {
  const [liked, setLiked] = useState(false);
  const setChecked = () => {};

  const handleAddToCart = () => {};

  const handleLike = () => {};

  return (
    <section className={style.product}>
      <div className={style.product__imageContainer}>
        <img
          src="https://isradar.com/upload/no-image.jpg"
          alt=""
          className={style.product__image}
        />
        <button className={style.product__likeButton} onClick={handleLike}>
          {liked ? (
            <BsHeartFill size={40} color="#9FA4AF" />
          ) : (
            <BsHeart size={40} color="#9FA4AF" />
          )}
        </button>
      </div>

      <div className={style.product__info}>
        <h1 className={style.product__name}>Полное название ПО</h1>
        <p className={style.product__vendor}>Вендор</p>
        <div className={style.product__details}>
          <p className={style.product__price}>19999 ₽</p>
          <p className={style.product__seller}>Продавец</p>
          <button className={style.product__downloadDemoButton}>
            Скачать демо
          </button>
        </div>
        <p className={style.product__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <label className={style.product__checkboxContainer}>
          <input
            type="checkbox"
            className={style.product__checkbox}
            onChange={setChecked}
          />
          <p>Добавить установку 2 000 ₽</p>
        </label>
        <button
          className={style.product__addToCartButton}
          onClick={handleAddToCart}
        >
          Добавить в корзину
        </button>
      </div>
    </section>
  );
};
