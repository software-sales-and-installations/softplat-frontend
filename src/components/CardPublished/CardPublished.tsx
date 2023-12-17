import React from 'react';
import styles from './CardPublished.module.scss';
import trash from '../../images/trash.svg';

type CardPublishedProps = {
  img: string;
  name: string;
  brand: string;
  number: number;
  data: string;
};

const CardPublished: React.FC<CardPublishedProps> = ({
  img,
  name,
  brand,
  number,
  data,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      className={styles.card}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className={styles.card__imgContainer}>
        <img src={img} alt="Логотип продукта" className={styles.card__img} />
      </div>
      <h2 className={styles.card__name}>{name}</h2>
      <p className={styles.card__vendor}>{brand}</p>
      <p className={styles.card__number}>{number}</p>
      <p className={styles.card__date}>{data}</p>
      <img
        src={trash}
        alt="Корзина"
        className={`${styles.card__trash} ${
          isHovered ? styles.card__trash_shown : ''
        }`}
      />
    </li>
  );
};

export default CardPublished;
