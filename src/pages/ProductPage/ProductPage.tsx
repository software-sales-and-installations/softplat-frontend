import { FC, useState } from 'react';
import style from './ProductPage.module.scss';
// import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Button } from '../../UI/Button/Button';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Tooltip } from '../../components/Tooltip/Tooltip';

export const ProductPage: FC = ({}) => {
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(19000);
  const [tooltipText, setTooltipText] = useState('');


  const handleAddToCart = () => {};

  const handleCheckboxChange = () => {
    setIsInstallationSelected(prev => !prev);
    updateTotalPrice(isInstallationSelected);
  };

  const updateTotalPrice = (wasInstallationSelected: boolean) => {
    setTotalPrice(prev =>
      wasInstallationSelected ? prev - 2000 : prev + 2000,
    );
  };

  return (
    <section className={style.product}>
      <div className={style.product__imageContainer}>
        <img
          src="https://isradar.com/upload/no-image.jpg"
          alt="Фотография товара"
          className={style.product__image}
        />
        {/* <button className={style.product__likeButton} onClick={handleLike}>
          {liked ? (
            <BsHeartFill size={40} color="#9FA4AF" />
          ) : (
            <BsHeart size={40} color="#9FA4AF" />
          )}
        </button> */}
      </div>

      <div className={style.product__info}>
        <span className={style.product__category}>Мультимедиа</span>

        <h2 className={style.product__name}>Adobe Photoshop</h2>
        <span className={style.product__vendor}>Adobe</span>
        <span className={style.product__number}>1234567</span>
        <div className={style.product__details}>
          <p className={style.product__price}>{totalPrice} ₽</p>
          <p className={style.product__seller}>Продавец</p>
          <Button mode="secondary">Скачать демо</Button>
        </div>
        <p className={style.product__description}>
          От публикаций в соцсетях до ретуши фотографий, от баннеров до красивых
          веб-сайтов, от повседневных изображений до полного преображения — все,
          о чем вы мечтаете, доступно с помощью Photoshop. Photoshop постоянно
          пополняется новыми возможностями, становясь ещё более быстрым,
          продуманным и интересным для всех пользователей.
        </p>
        <div className={style.product__checkboxContainer}>
          <Checkbox
            label={'Добавить установку 2 000 ₽'}
            onCheck={handleCheckboxChange}
          />
          <div
            className={style.product__question}
            onMouseEnter={() =>
              setTooltipText(
                'Наш специалист установит ПО на ваше устройство в удобное время',
              )
            }
            onMouseLeave={() => setTooltipText('')}
          >
            ?
          </div>
          {tooltipText && <Tooltip text={tooltipText} />}
        </div>
        <Button mode="primary" onClick={handleAddToCart}>
          Добавить в корзину
        </Button>
      </div>
    </section>
  );
};
