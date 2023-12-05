import { FC } from 'react';
import styles from './CardTable.module.scss';
import classNames from 'classnames';
import { IProductCardPropsTable } from '../ProductCard/ProductCardTypes';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const CardTable: FC<IProductCardPropsTable> = ({ products }) => {
  const role = localStorage.getItem('role');
  const { register, handleSubmit } = useForm({});
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <table>
        <thead>
          <tr className={classNames(styles.line, styles.line_type_head)}>
            {role === 'ADMIN' ? (
              <th className={classNames(styles.cellLogo, styles.cell)}>
                Выбрать
              </th>
            ) : null}
            {role === 'SELLER' ? (
              <th className={classNames(styles.cellLogo, styles.cell)}>Лого</th>
            ) : null}
            <th className={classNames(styles.cellName, styles.cell)}>
              Название
            </th>
            <th className={classNames(styles.cellVendorCategory, styles.cell)}>
              Вендор
            </th>
            <th className={classNames(styles.cellVendorCategory, styles.cell)}>
              Категория
            </th>
            <th className={classNames(styles.cellArt, styles.cell)}>Артикул</th>
            <th className={classNames(styles.cellDescription, styles.cell)}>
              Описание
            </th>
            <th className={classNames(styles.cellData, styles.cell)}>Дата</th>
            <th className={classNames(styles.cellRed, styles.cell)}>Ред</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => {
            return (
              <tr
                key={item.id}
                className={classNames(styles.line, styles.line_type_body)}
              >
                {role === 'ADMIN' ? (
                  <td
                    className={classNames(
                      styles.cellLogo,
                      styles.cell,
                      styles.cell_type_checkbox,
                    )}
                  >
                    <input
                      type="checkbox"
                      {...register('id')}
                      value={item.id}
                    ></input>
                  </td>
                ) : null}
                {role === 'SELLER' ? (
                  <td className={classNames(styles.cellLogo, styles.cell)}>
                    <Link to={`/product/${item.id}`} className={styles.link}>
                      <img
                        className={classNames(
                          styles.cellLogo__img,
                          styles.cell,
                        )}
                        src={item.seller?.imageResponseDto?.url}
                        alt={item.name}
                      />
                    </Link>
                  </td>
                ) : null}
                <td className={classNames(styles.cellName, styles.cell)}>
                  <Link to={`/product/${item.id}`} className={styles.link}>
                    <p className={styles.cell__text}>{item.name}</p>
                  </Link>
                </td>
                <td
                  className={classNames(styles.cellVendorCategory, styles.cell)}
                >
                  <Link to={`/product/${item.id}`} className={styles.link}>
                    <p className={styles.cell__text}>
                      {item.vendor?.name ? item.vendor.name : ''}
                    </p>
                  </Link>
                </td>
                <td
                  className={classNames(styles.cellVendorCategory, styles.cell)}
                >
                  <Link to={`/product/${item.id}`} className={styles.link}>
                    <p className={styles.cell__text}>
                      {item.category?.name ? item.category.name : ''}
                    </p>
                  </Link>
                </td>
                <td className={classNames(styles.cellArt, styles.cell)}>
                  <Link to={`/product/${item.id}`} className={styles.link}>
                    <p className={styles.cell__text}>{item.id}</p>
                  </Link>
                </td>
                <td className={classNames(styles.cellDescription, styles.cell)}>
                  <Link to={`/product/${item.id}`} className={styles.link}>
                    <p className={styles.cell__text}>{item.description}</p>
                  </Link>
                </td>
                <td className={classNames(styles.cellData, styles.cell)}>
                  <Link to={`/product/${item.id}`} className={styles.link}>
                    <p className={styles.cell__text}>{item.date}</p>
                  </Link>
                </td>
                <td className={classNames(styles.cellRed, styles.cell)}>
                  <button className={styles.redBtn} type="button" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {role === 'ADMIN' ? (
        <div className={styles.cardtable__btncontainer}>
          <button className={styles.cardtable__btn} type="submit">
            Удалить
          </button>
          <button className={styles.cardtable__btn} type="submit">
            Отправить на доработку
          </button>
        </div>
      ) : null}
    </form>
  );
};
