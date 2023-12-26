import React from 'react';
import styles from './SellerCard.module.scss';
import trashIcon from '../../images/trash.svg';
import CONST_IMG from '../../images/underfined-image.jpg'
import { ISellerCardProps } from './SellerCardTypes';

const SellerCard: React.FC<ISellerCardProps> = ({
  mode,
  image,
  name,
  vendor,
  productionTime,
  trash,
  count,
  id
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className={`${styles.card} ${trash ? styles.card_wide : ''}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={`${styles.card__container} ${
          mode === 'inOrder' ? styles.card__container_mode_inOrder : ''
        }`}
      >
        {mode === 'inOrder' ? (
          count
        ) : (
         (<img
            src={image?.id? `https://api.softplat.ru/image/${image?.id}`: CONST_IMG}
            alt="Логотип продукта"
            className={styles.card__img}
          />)
        )}
      </div>
      <h2 className={styles.card__name}>{name ? name : '—'}</h2>
      <p className={styles.card__vendor}>{vendor.name ? vendor.name : '—'}</p>
      <p className={styles.card__number}>{id}</p>
      <p className={styles.card__date}>
        {productionTime
          ? productionTime.split(' ')[0].split('-').join('.')
          : '—'}
      </p>
      {trash && (
        <img
          src={trashIcon}
          alt="Корзина"
          className={`${styles.card__trash} ${
            isHovered ? styles.card__trash_shown : ''
          } ${mode === 'inOrder' ? styles.card__trash_mode_inOrder : ''}`}
        />
      )}
    </li>
  );
};

export default SellerCard;
