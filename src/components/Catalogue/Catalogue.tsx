import React from 'react';
import styles from './Catalogue.module.scss'
import { CATALOGUE_NAMES } from '../../utils/constants';


type Props = {};

const Catalogue: React.FC = (props: Props) => {
  return (
    <section className={styles.catalogue}>
      <h2 className={styles.catalogue__title}>Каталог ПО</h2>
      <ul className={styles.catalogue__list}>
        {CATALOGUE_NAMES.map(i => (
          <li className={styles.catalogue__item}>
            <p className={styles.catalogue__itemText}>{i}</p>
            <img src="" alt="Изображение раздела каталога" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalogue;
