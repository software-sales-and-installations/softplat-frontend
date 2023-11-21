import { FC } from 'react';
import style from './ProductListCart.module.scss';
import { CartItem } from '../CartItem/CartItem';

const productItems: { name: string; price: number; img: string }[] = [
  {
    name: 'Название программного обеспечения',
    price: 12000,
    img: 'https://pixy.org/src2/575/5753334.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 12000,
    img: 'https://pixy.org/src2/575/5753334.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 12000,
    img: 'https://pixy.org/src2/575/5753334.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 10000,
    img: 'https://pixy.org/src2/575/5753334.jpg',
  },
  {
    name: 'Название программного обеспечения',
    price: 10000,
    img: 'https://pixy.org/src2/575/5753334.jpg',
  },
];

export const ProductListCart: FC = () => {
  return (
    <div className={style.productList}>
    <button className={style.productList__cleanCart}>Очистить корзину</button>
    <ul className={style.list}>
      {productItems.map((product, index) => (
        <CartItem product={product} key={index}/>
      ))}
    </ul>
    </div>
  );
};
