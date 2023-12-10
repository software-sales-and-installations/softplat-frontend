import { FC } from 'react';
import styles from './AdminCardTable.module.scss';
import classNames from 'classnames';
import { IProductCardPropsTable } from './AdminCardTableTypes'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const AdminCardTable: FC<IProductCardPropsTable> = ({ products , productStatus}) => {
  const location = useLocation();
  return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={classNames(styles.line)}>
            <th className={classNames(styles.cellName, styles.cell)}>
              Название
            </th>
            {location.pathname !=='/admin/appeal' ? <th className={classNames(styles.cellVendor, styles.cell)}>
              Вендор
            </th> : null}
            <th className={classNames(styles.cellSeller, styles.cell)}>
              Продавец
            </th>
            <th className={classNames(styles.cellArt, styles.cell)}>Артикул</th>
            {location.pathname ==='/admin/appeal' ?<><th className={classNames(styles.cellDescription, styles.cell)}>
              Жалобы
            </th>
            <th className={classNames(styles.cellDescription, styles.cell)}>
              Новые
            </th></> : null}
            {location.pathname !=='/admin/appeal' ? <th className={classNames(styles.cellData, styles.cell)}>Дата</th> : null}
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
            {location.pathname !=='/admin/appeal' ? 
            <td className={classNames(styles.cellVendor, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={classNames(styles.cell__text) }>{i.vendor?.name ? i.vendor.name : ''}</p>
              </Link>
            </td> : null}
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
            {location.pathname ==='/admin/appeal' ?
            <>
            <td>
              <p>кол-во жалоб</p>
            </td>
            <td>
              <p>новые жалобы</p>
            </td>
            </>: null}
            {location.pathname !=='/admin/appeal' ?<td className={classNames(styles.cellArt, styles.cell, styles.cell_type_body)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{`${i.productionTime? i.productionTime: ''}`}</p>
              </Link>
            </td>: null}
            </>
          :null}

        </tr>)
       })}



        </tbody>
      </table>
    );
    };
            
            // (item.productStatus===productStatus ?
            //   <tr
            //   key={item.id}
            //     className={classNames(styles.line, styles.line_type_body)}
            //   >
            //       <td className={classNames(styles.cellLogo, styles.cell)}>
            //         <Link to={`/product/${item.id}`} className={styles.link}>
            //           <img
            //             className={classNames(
            //               styles.cellLogo__img,
            //               styles.cell,
            //             )}
            //             src={item.seller?.imageResponseDto?.url}
            //             alt={item.name}
            //           />
            //         </Link>
            //       </td>
            //     <td className={classNames(styles.cellName, styles.cell)}>
            //       <Link to={`/product/${item.id}`} className={styles.link}>
            //         <p className={styles.cell__text}>{item.name}</p>
            //       </Link>
            //     </td>
            //     <td
            //       className={classNames(styles.cellVendorCategory, styles.cell)}
            //     >
            //       <Link to={`/product/${item.id}`} className={styles.link}>
            //         <p className={styles.cell__text}>
            //           {item.vendor?.name ? item.vendor.name : ''}
            //         </p>
            //       </Link>
            //     </td>
            //     <td
            //       className={classNames(styles.cellVendorCategory, styles.cell)}
            //     >
            //       <Link to={`/product/${item.id}`} className={styles.link}>
            //         <p className={styles.cell__text}>
            //           {item.category?.name ? item.category.name : ''}
            //         </p>
            //       </Link>
            //     </td>
                // <td className={classNames(styles.cellArt, styles.cell)}>
                //   <Link to={`/product/${item.id}`} className={styles.link}>
                //     <p className={styles.cell__text}>{item.id}</p>
                //   </Link>
                // </td>
            //     <td className={classNames(styles.cellDescription, styles.cell)}>
            //       <Link to={`/product/${item.id}`} className={styles.link}>
            //         <p className={styles.cell__text}>{item.description}</p>
            //       </Link>
            //     </td>
            //   </tr>)
            //  : null}))}

