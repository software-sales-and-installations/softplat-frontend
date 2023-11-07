import React from 'react';
import styles from './Catalogue.module.scss'

const catalogue = [
  'Офисные приложения',
  'Офисные приложения',
  'Офисные приложения',
  'Офисные приложения',
  'Офисные приложения',
  'Офисные приложения',
];

type Props = {};

const Catalogue = (props: Props) => {
  return (
    <section className={styles.catalogue}>
      <h2 className={styles.catalogue__title}>Каталог ПО</h2>
      <ul className={styles.catalogue__list}>
        {catalogue.map(i => (
          <li className={styles.catalogue__item}>
            <p className={styles.catalogue__itemText}>{i}</p>
            <img src="" alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalogue;
