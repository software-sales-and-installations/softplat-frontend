import { FC } from 'react';
import style from './ProductListCart.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { clearCart } from '../../services/redux/slices/cart/cart';
import { useBuyerBasketClearMutation } from '../../utils/api/buyerBasketApi';

export const ProductListCart: FC = () => {
  const dispatch = useAppDispatch();

  const [buyerBasketСlearCart] = useBuyerBasketClearMutation();
  const cartItems = useAppSelector(store => store.cart.items) || [];
  const sortedCartItems = [...cartItems].sort((a, b) => b.id - a.id);

  const handleClearCart = async () => {
    try {
      const response = await buyerBasketСlearCart(undefined).unwrap();
      console.log('response', response);
      dispatch(clearCart());
    } catch (error) {
      console.error('Ошибка очистки корзины: ', error);
    }
  };

  return (
    <div className={style.productList}>
      {cartItems.length > 0 && (
        <button
          className={style.productList__cleanCart}
          onClick={handleClearCart}
        >
          Очистить корзину
        </button>
      )}

      <ul className={style.list}>
        {sortedCartItems?.map(product => (
          <CartItem item={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
