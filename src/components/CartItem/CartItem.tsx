import { FC, useEffect, useState } from 'react';

import style from './CartItem.module.scss';
import { Tooltip } from '../Tooltip/Tooltip';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

import { FaTrash, FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { ICartItemProps } from './CartItemTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  removeItemById,
  updateCartItem,
} from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import { useNavigate } from 'react-router-dom';

export const CartItem: FC<ICartItemProps> = ({ item }) => {
  // console.log('item', item);
  const product = item?.productResponseDto;
  // console.log('product', product);
  const navigate = useNavigate()
  const [tooltipText, setTooltipText] = useState('');

  // const [isInstallationSelected, setIsInstallationSelected] = useState(
  //   item.installation,
  // );

  const [totalPrice, setTotalPrice] = useState(product?.price);

  const [quantity, setQuantity] = useState(item.quantity);

  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  const [buyerBasketDeleteItem] = useBuyerBasketDeleteItemMutation();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();

  const dispatch = useAppDispatch();
  console.log('error', addItemError.isError);
  
  // console.log(isInstallationSelected);

  useEffect(() => {
    updateTotalPrice(item.installation, quantity);
    dispatch(
      updateCartItem({
        ...item,
      }),
    );
  }, [quantity, dispatch]);


  
  const updateTotalPrice = (
    wasInstallationSelected: boolean,
    updatedQuantity: number,
  ) => {
    const installationPrice = wasInstallationSelected
      ? product?.installationPrice
      : 0;
    setTotalPrice((product?.price + installationPrice) * updatedQuantity);
  };

  const isChecked = useAppSelector(state =>
    state.cart.items.some(item => item.isChecked),
  );

  const handleBuyCheckboxChange = () => {
    dispatch(updateCartItem({
      ...item,
      isChecked: !item.isChecked,
    }));
  };


  const handleIncreaseQuantity = async () => {
    if (quantity < 10) {


      try {
        const response = await buyerBasketAddItem({
          productId: product.id,
          installation: item.installation,
        }).unwrap();
  
        // dispatch(setCartItems(response.productsInBasket));
  
        console.log('Response:', response);
        
        dispatch(
          updateCartItem({
            ...item,
            quantity: item.quantity + 1,
          }),
        );
        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);
        updateTotalPrice(item.installation, updatedQuantity);

        basketInfoQuery.refetch();
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }

    }

  };

  const handleDecreaseQuantity = async () => {
    if (quantity > 1) {

      try {
        const response = await buyerBasketDeleteItem({
          productId: product.id,
          installation: item.installation,
        }).unwrap();
        console.log('Response:', response);

        dispatch(
          updateCartItem({
            ...item,
            quantity: item.quantity - 1,
          }),
        );

        const updatedQuantity = quantity - 1;
        setQuantity(updatedQuantity);
        updateTotalPrice(item.installation, updatedQuantity);



        basketInfoQuery.refetch();

      } catch (error) {
        console.error('Ошибка добавления товара в корзину:', error);
      }









    }
  };

  const handleRemoveItem = async () => {
        if (quantity === 1) {
          dispatch(removeItemById(product.id));
          // API логика удалаления всех копий товара
        }

  };

  const linkToPage = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <li className={style.cartItem}>
      <Checkbox onCheck={handleBuyCheckboxChange} checked={isChecked}/>

      <img
        src={product?.image}
        alt="Фотография товара"
        className={style.cartItem__img}
        onClick={linkToPage}
      />
      <div className={style.cartItem__info}>
        <p className={style.cartItem__name} onClick={linkToPage}>{product?.name}</p>
        <div className={style.cartItem__parameters}>
          <span className={style.cartItem__type}>Лицензия</span>
          <Checkbox
            label={`c установкой ${product?.installationPrice}`}
            checked={item.installation}
            readOnly
          />
          <div
            className={style.cartItem__question}
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
        <div className={style.cartItem__buttons}>
          <FaRegHeart size={25} className={style.cartItem__like} />
          <FaTrash
            size={25}
            className={style.cartItem__trash}
            onClick={handleRemoveItem}
          />
        </div>
      </div>
      <span className={style.cartItem__price}>{totalPrice} ₽</span>
      <div className={style.cartItem__quantity}>
        <button
          onClick={handleDecreaseQuantity}
          className={style.cartItem__quantityButton}
        >
          <FaMinus size={15} />
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className={style.cartItem__quantityButton}
          disabled={addItemError.isError}
        >
          <FaPlus size={15} />
        </button>
      </div>

    </li>
  );
};
