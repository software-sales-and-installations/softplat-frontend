import { FC, useEffect } from 'react';
import style from './ProductListCart.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { clearCart, setCartItems } from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketClearMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';

export const ProductListCart: FC = () => {
  const dispatch = useAppDispatch();
  const { data: basketInfo } = useBuyerBasketInfoQuery(undefined);

  const [buyerBasketСlearCart] = useBuyerBasketClearMutation();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      if (basketInfo && userId) {
        dispatch(setCartItems(basketInfo.productsInBasket));
        console.log(basketInfo);

        console.log('Сработала загрузка корзины из мутациии');
      }
    };

    fetchData();
  }, [basketInfo]);

  const cartItems = useAppSelector(store => store.cart.items) || [];

  const sortedCartItems = [...cartItems].sort((a, b) => b.id - a.id);

  console.log('basketInfo', basketInfo);

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
