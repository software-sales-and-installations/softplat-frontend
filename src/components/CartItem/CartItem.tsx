import { FC, useEffect, useState } from 'react';

import style from './CartItem.module.scss';
import { Tooltip } from '../Tooltip/Tooltip';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

import { FaTrash, FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { ICartItemProps } from './CartItemTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  addToRemovalList,
  removeFromRemovalList,
  removeItem,
  updateCartItem,
} from '../../services/redux/slices/cart/cart';

export const CartItem: FC<ICartItemProps> = ({ product }) => {
  const [tooltipText, setTooltipText] = useState('');
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateTotalPrice(isInstallationSelected, quantity);
    dispatch(
      updateCartItem({
        ...product,
        installation: isInstallationSelected,
        cartQuantity: quantity,
      }),
    );
  }, [isInstallationSelected, quantity, dispatch]);

  const updateTotalPrice = (
    wasInstallationSelected: boolean,
    updatedQuantity: number,
  ) => {
    const installationPrice = wasInstallationSelected
      ? product.installationPrice
      : 0;
    setTotalPrice((product.price + installationPrice) * updatedQuantity);
  };

  const isChecked = useAppSelector(state =>
    state.cart.itemsToRemove.some(item => item.id === product.id),
  );

  const handleRemoveCheckboxChange = () => {
    if (!isChecked) {
      dispatch(addToRemovalList(product));
    } else {
      dispatch(removeFromRemovalList(product));
    }
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsInstallationSelected(isChecked);
    updateTotalPrice(isChecked, quantity);
  };

  const handleIncreaseQuantity = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    updateTotalPrice(isInstallationSelected, updatedQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      updateTotalPrice(isInstallationSelected, updatedQuantity);
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(product));
    dispatch(removeFromRemovalList(product));
  };

  return (
    <li className={style.cartItem}>
      <Checkbox label={''} onCheck={handleRemoveCheckboxChange} />

      <img
        src={product?.image}
        alt="Фотография товара"
        className={style.cartItem__img}
      />
      <div className={style.cartItem__info}>
        <p className={style.cartItem__name}>{product.name}</p>
        <div className={style.cartItem__parameters}>
          <span className={style.cartItem__type}>Лицензия</span>
          <Checkbox
            label={`c установкой ${product.installationPrice}`}
            onCheck={handleCheckboxChange}
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
        >
          <FaPlus size={15} />
        </button>
      </div>
    </li>
  );
};
