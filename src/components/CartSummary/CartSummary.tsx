import { FC } from 'react';
import style from './CartSummary.module.scss';
import { Button } from '../../UI/Button/Button';
import { useAppSelector } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { useDispatch } from 'react-redux';

export const CartSummary: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector(store => store.cart.items);

  const totalAmount = cartItems.reduce((total, item) => {
    const installationPrice = item.installation ? item.installationPrice : 0;
    const cartQuantity = item.cartQuantity || 1;
    return total + (item.price + installationPrice) * cartQuantity;
  }, 0);

  const totalItems = cartItems.reduce((total, item) => {
    const cartQuantity = item.cartQuantity || 1;
    return total + cartQuantity;
  }, 0);

  function handleClick(){
    dispatch(popupState(true));
  }

  return (
    <div className={style.cartSummary}>
      <div className={style.cartSummary__result}>
        <div className={style.cartSummary__upshot}>
          <p className={style.cartSummary__header}>Итого</p>
          <p className={style.cartSummary__finishPrice}>{totalAmount} ₽</p>
        </div>
        <span className={style.cartSummary__quantity}>
          Товары {`(${totalItems})`}
        </span>
        <div className={style.cartSummary__ButtonBlock}>
          <Button onClick={handleClick} mode={'primary'} isDisabled={cartItems.length < 1 && true}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};
