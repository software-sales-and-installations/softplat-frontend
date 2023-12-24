import { FC } from 'react';
import styles from './AdminCardTable.module.scss';
import classNames from 'classnames';
import { IProductCardPropsTable } from './AdminCardTableTypes'
import { Link } from 'react-router-dom';

export const AdminCardTable: FC<IProductCardPropsTable> = ({ products , productStatus}) => {
  return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={classNames(styles.line)}>
            <th className={classNames(styles.cellName, styles.cell)}>
              Название
            </th>
            <th className={classNames(styles.cellVendor, styles.cell)}>
              Вендор
            </th>
            <th className={classNames(styles.cellSeller, styles.cell)}>
              Продавец
            </th>
            <th className={classNames(styles.cellArt, styles.cell)}>Артикул</th>
             <th className={classNames(styles.cellData, styles.cell)}>Дата</th>
          </tr>
        </thead>
        <tbody>
       {products.map((i)=>{
        return (
        <tr className={classNames(styles.line, styles.line_type_body)} key={i.id}>
          {i.productStatus===productStatus?
          <>
            <td className={classNames(styles.cellName, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{i.name}</p>
              </Link>
            </td>
            <td className={classNames(styles.cellVendor, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={classNames(styles.cell__text) }>{i.vendor?.name ? i.vendor.name : ''}</p>
              </Link>
            </td> 
            <td className={classNames(styles.cellSeller, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{i.vendor?.name ? i.vendor.name : ''}</p>
              </Link>
            </td>
            <td className={classNames(styles.cellArt, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{i.id}</p>
              </Link>
            </td>
            <td className={classNames(styles.cellData, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{`${i.productionTime? i.productionTime: ''}`}</p>
              </Link>
            </td>
            </>
          :null}
        </tr>)
       })}
        </tbody>
      </table>
    );
    };
            

