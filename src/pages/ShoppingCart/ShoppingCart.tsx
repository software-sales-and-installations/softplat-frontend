import {FC} from 'react';
import { ProductListCart } from '../../components/ProductListCart/ProductListCart';
import style from './ShoppingCart.module.scss'
import { CartSummary } from '../../components/CartSummary/CartSummary';

export const ShoppingCart: FC = () => {
  return (
    <section className={style.cart}>
<h1 className={style.cart__header}>Корзина</h1>
      <div className={style.cart__content}>
      <ProductListCart />
      <CartSummary />
      </div>

    </section>
  )
}
