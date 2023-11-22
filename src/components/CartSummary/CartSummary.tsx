import { FC } from 'react';
import style from './CartSummary.module.scss';
import { Button } from '../../UI/Button/Button';

export const CartSummary: FC = () => {
  return (
    <div className={style.cartSummary}>
      <div className={style.cartSummary__result}>
        <div className={style.cartSummary__upshot}>
          <p className={style.cartSummary__header}>Итого</p>
          <p className={style.cartSummary__finishPrice}>46000 ₽</p>
        </div>
        <span className={style.cartSummary__quantity}>Товары (0)</span>
        <div className={style.cartSummary__ButtonBlock}>
            <Button  mode={'primary'}>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
};
