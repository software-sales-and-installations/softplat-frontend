import { FC } from 'react';
import style from './ProductListCart.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  clearRemovalList,
  removeSelectedItems,
} from '../../services/redux/slices/cart/cart';

export const ProductListCart: FC = () => {
  const cartItems = useAppSelector(store => store.cart.items);
  const dispatch = useAppDispatch();

  const handleRemoveSelectedItems = () => {
    dispatch(removeSelectedItems());
    dispatch(clearRemovalList());
  };

  return (
    <div className={style.productList}>
      {cartItems.length > 0 && (
        <button
          className={style.productList__cleanCart}
          onClick={handleRemoveSelectedItems}
        >
          Очистить корзину
        </button>
      )}

      <ul className={style.list}>
        {cartItems?.map(product => (
          <CartItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
