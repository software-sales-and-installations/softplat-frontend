import { FC, useEffect } from 'react';
import style from './ProductListCart.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  // clearCart,
  // clearRemovalList,
  // removeSelectedItems,
  setCartItems,
} from '../../services/redux/slices/cart/cart';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';

export const ProductListCart: FC = () => {
  const dispatch = useAppDispatch();
  //@ts-ignore
  const { data: basketInfo } = useBuyerBasketInfoQuery();

  useEffect(() => {
    const fetchData = async () => {
      if (basketInfo) {
        dispatch(setCartItems(basketInfo.productsInBasket));
      }
    };

    fetchData();
  }, [basketInfo]);

  const cartItems = useAppSelector(store => store.cart.items) || [];

  const sortedCartItems = [...cartItems].sort((a, b) => b.productResponseDto.id - a.productResponseDto.id);

  // console.log('sortedCartItems', sortedCartItems);
  

  const handleClearCart = () => {
    // API логика очистки корзины
    // dispatch(clearCart())
  }

  return (
    <div className={style.productList}>
      {cartItems.length > 0 && (
        <button className={style.productList__cleanCart} onClick={handleClearCart}>
          Очистить корзину
        </button>
      )}

      <ul className={style.list}>
        {sortedCartItems?.map(product => (
          <CartItem
            item={product}
            key={product.id}
          />
        ))}
      </ul>
    </div>
  );
};
