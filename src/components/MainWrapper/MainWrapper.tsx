import { FC } from 'react';
import { IMainWrapperProps } from './MainWrapperTypes';
import styles from './MainWrapper.module.scss';
import { useLoadFavorites } from '../../services/favoritesService/favoritesService';
import { useLoadCart } from '../../services/cartService/cartService';

export const MainWrapper: FC<IMainWrapperProps> = ({ children }) => {
  useLoadFavorites();
  useLoadCart();

  return <main className={styles.background}>{children}</main>;
};
