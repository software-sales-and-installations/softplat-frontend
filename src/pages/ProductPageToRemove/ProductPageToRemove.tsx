import { FC, useEffect, useState } from 'react';
import style from './ProductPageToRemove.module.scss';
import { Button } from '../../UI/Button/Button';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchSingleCard } from '../../services/redux/slices/cards/cards';
import { setCartItems } from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export const ProductPageToRemove: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cardData = useAppSelector(state => state.cards.card);
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(cardData.price);
  const [tooltipText, setTooltipText] = useState('');

  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();
  // const isItemInCart = cart.items.some(item => item.id === cardData.id);
  console.log(cardData.id);

  useEffect(() => {
    dispatch(fetchSingleCard(Number(id)));
  }, [id]);

  useEffect(() => {
    setTotalPrice(cardData.price);
  }, [cardData.price]);

  const handleAddToCart = async () => {
    try {
      const response = await buyerBasketAddItem({
        productId: cardData.id,
        installation: isInstallationSelected,
      }).unwrap();

      dispatch(setCartItems(response.productsInBasket));

      basketInfoQuery.refetch();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
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
    <>
      <div className={style.breadcrumbs}>
        <Breadcrumbs vendor={cardData.vendor!} />
      </div>
      <section className={style.product}>
        <div className={style.product__imageContainer}>
          <img
            src={cardData.image?.url}
            alt="Фотография товара"
            className={style.product__image}
          />
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

            <button className={style.product__btn}>Скачать демо</button>
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
          <div className={style.product__buyButtonBlock}>
            <Button
              mode="primary"
              onClick={handleAddToCart}
              isDisabled={addItemError.isError}
            >
              Добавить в корзину
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
