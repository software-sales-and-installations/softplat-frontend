import React from 'react';
import styles from './SellerCard.module.scss';
import trashIcon from '../../images/trash.svg';

type SellerCardProps = {
  image: string;
  name: string;
  vendor: {
    name: string;
  };
  productionTime: string;
  trash: boolean;
};

const SellerCard: React.FC<SellerCardProps> = ({
  image,
  name,
  vendor,
  productionTime,
  trash,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className={`${styles.card} ${trash ? styles.card_wide : ''}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className={styles.card__imgContainer}>
        <img src={image} alt="Логотип продукта" className={styles.card__img} />
      </div>
      <h2 className={styles.card__name}>{name}</h2>
      <p className={styles.card__vendor}>{vendor.name}</p>
      <p className={styles.card__number}>123456789</p>
      <p className={styles.card__date}>
        {productionTime.split(' ')[0].split('-').join('.')}
      </p>
      {trash && (
        <img
          src={trashIcon}
          alt="Корзина"
          className={`${styles.card__trash} ${
            isHovered ? styles.card__trash_shown : ''
          }`}
        />
      )}
    </li>
  );
};

export default SellerCard;
