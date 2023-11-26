import { FC } from 'react';
import { SELLER_CATEGORIZED_TEXT } from '../../utils/constants';
import styles from './SellerCategories.module.scss';

export const SellerCategories: FC = () => {
    return (
      <ul className={styles.categories}>
        {SELLER_CATEGORIZED_TEXT.map(btn => {
          return (
            <li className={styles.item} key={btn.id}>
              <button className={styles.btn}>{btn.text}</button>
            </li>
          );
        })}
      </ul>
    );
}
