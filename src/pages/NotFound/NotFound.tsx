import React from 'react';
import styles from './NotFound.module.scss';
import notFoundImg from '../../images/404.svg';

const NotFound: React.FC = () => {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.notFound__title}>Ошибка 404</h1>
      <p className={styles.notFound__subtitle}>Такой страницы не существует.</p>
      <img
        src={notFoundImg}
        alt="Не найдено"
        className={styles.notFound__img}
      />
    </section>
  );
};

export default NotFound;
