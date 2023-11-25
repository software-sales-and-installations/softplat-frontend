import { FC, useEffect, useState } from 'react';
import style from './ProductPage.module.scss';
// import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Button } from '../../UI/Button/Button';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchSingleCard } from '../../services/redux/slices/cards/cards';
import { addItem } from '../../services/redux/slices/cart/cart';

export const ProductPage: FC = ({}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cardData = useAppSelector(state => state.cards.card);
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(cardData.price);
  const [tooltipText, setTooltipText] = useState('');

  useEffect(() => {
    dispatch(fetchSingleCard(Number(id)));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addItem(cardData));
  };

  const handleCheckboxChange = () => {
    setIsInstallationSelected(prev => !prev);
    updateTotalPrice(isInstallationSelected);
  };

  const updateTotalPrice = (wasInstallationSelected: boolean) => {
    setTotalPrice(prev =>
      wasInstallationSelected
        ? prev - cardData.installationPrice
        : prev + cardData.installationPrice,
    );
  };

  return (
    <section className={style.product}>
      <div className={style.product__imageContainer}>
        <img
          src={cardData.image?.url}
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
        <span className={style.product__category}>
          {cardData.category?.name}
        </span>

        <h2 className={style.product__name}>{cardData.name}</h2>
        <span className={style.product__vendor}>{cardData.vendor?.name}</span>
        <span className={style.product__number}>{cardData.id}</span>
        <div className={style.product__details}>
          <p className={style.product__price}>{totalPrice} ₽</p>
          <p className={style.product__seller}>Продавец</p>
          <Button mode="secondary">Скачать демо</Button>
        </div>
        <p className={style.product__description}>{cardData.description}</p>
        <div className={style.product__checkboxContainer}>
          <Checkbox
            label={`Добавить установку ${cardData.installationPrice} ₽`}
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
