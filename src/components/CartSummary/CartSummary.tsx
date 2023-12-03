import { FC, useEffect } from 'react';
import style from './CartSummary.module.scss';
import { Button } from '../../UI/Button/Button';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { useOrderMakeMutation } from '../../utils/api/buyerOrderApi';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';
import { RootState } from '../../services/redux/store';
import { isNotSuccessPay, isSuccessPay } from './CartSummarySlice';

export const CartSummary: FC = () => {
  const isSuccessCardData = useAppSelector((state: RootState) => state.isSuccessCardData.isSuccessCardData);
  const dispatch = useAppDispatch();
  const cartState = useAppSelector(store => store.cart);
  const checkedCartItems = cartState.items.filter(
    item => !cartState.uncheckedItemIds.includes(item.id)
  );
  
  const totalAmount = checkedCartItems.reduce((total, item) => {
    const installationPrice = item.installation ? item.productResponseDto.installationPrice : 0;
    const cartQuantity = item.quantity || 1;
    return total + (item.productResponseDto.price + installationPrice) * cartQuantity;
  }, 0);

  const totalItems = checkedCartItems.reduce((total: number, item) => {
    const cartQuantity = item.quantity || 1;
    return total + cartQuantity;
  }, 0);
useEffect(()=>{
  if (isSuccessCardData){
    handleOrderSubmit()
  }
},[isSuccessCardData])
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();

  const [makeOrder] = useOrderMakeMutation();

  const handleOrderSubmit = async () => {
    try {
      const basketPositionIds = checkedCartItems.map((item) => item.id);
      await makeOrder({ basketPositionIds });
      basketInfoQuery.refetch();
      dispatch(isSuccessPay(true))
    } catch (err) {
      dispatch(isSuccessPay(false))
      dispatch(isNotSuccessPay('Что-то пошло не так'))
      console.error('Error creating order:', err);
    }
  };


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
          <Button onClick={handleClick} mode={'primary'} isDisabled={checkedCartItems.length < 1 && true}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};
