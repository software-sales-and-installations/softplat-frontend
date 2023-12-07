import { useState } from 'react';
import classNames from 'classnames';
import styles from './CabinetAnalize.module.scss';
import Preloader from '../Preloader/Preloader';

const CabinetAnalize: React.FC = () => {
  return (
    <section className={styles.cabinetAnalize}>
      <h2 className={styles.cabinetAnalize__title}>Аналитика</h2>
      <p className={styles.cabinetAnalize__subtitle}>
        Здесь отображаются отчеты динамики продаж. Вы можете ознакомиться с
        детализацией отчета за выбранный период времени, а также выгрузить отчет
        по продажам
      </p>
    </section>
  );
};

export default CabinetAnalize;
