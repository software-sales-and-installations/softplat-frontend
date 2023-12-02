import { FC, useEffect, useState } from 'react';
import style from './ProductPage.module.scss';
import { Button } from '../../UI/Button/Button';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { setCartItems } from '../../services/redux/slices/cart/cart';
import { usePublicProductQuery } from '../../utils/api/publicProductApi';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const { data: product } = usePublicProductQuery(id);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price);
    }
  }, [product]);

  const [tooltipText, setTooltipText] = useState('');

  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();
  // const isItemInCart = cart.items.some(item => item.id === product?.id);
  console.log(cardData.id);

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
    if (product) {
      setTotalPrice(prev =>
        wasInstallationSelected
          ? prev - product.installationPrice
          : prev + product.installationPrice,
      );
    }
  };

  return (
    <>
      <div className={style.breadcrumbs}>
        <Breadcrumbs vendor={product?.vendor!} />
      </div>
      <section className={style.product}>
        <div className={style.product__imageContainer}>
          <img
            src={product?.image?.url}
            alt="Фотография товара"
            className={style.product__image}
          />
        </div>

      <div className={style.product__info}>
        <span className={style.product__category}>
          {product?.category?.name}
        </span>

        <h2 className={style.product__name}>{product?.name}</h2>
        <span className={style.product__vendor}>{product?.vendor?.name}</span>
        <span className={style.product__number}>{product?.id}</span>
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
