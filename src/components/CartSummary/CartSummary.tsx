import { FC } from 'react';
import style from './CartSummary.module.scss';
import { Button } from '../../UI/Button/Button';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';

export const CartSummary: FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(store => store.cart.items);
  // console.log('cartItemsSumm', cartItems);
  const checkedCartItems = cartItems.filter(item => item.isChecked);
  console.log(checkedCartItems);
  
  const totalAmount = checkedCartItems.reduce((total, item) => {
    const installationPrice = item.installation ? item.productResponseDto.installationPrice : 0;
    const cartQuantity = item.quantity || 1;
    return total + (item.productResponseDto.price + installationPrice) * cartQuantity;
  }, 0);

  const totalItems = checkedCartItems.reduce((total, item) => {
    const cartQuantity = item.quantity || 1;
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
