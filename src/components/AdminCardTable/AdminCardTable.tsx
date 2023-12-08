import { FC } from 'react';
import styles from './AdminCardTable.module.scss';
import classNames from 'classnames';
import { IProductCardPropsTable } from './AdminCardTableTypes'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const AdminCardTable: FC<IProductCardPropsTable> = ({ products , productStatus}) => {
  const location = useLocation();
  return (
      <table>
        <thead>
          <tr className={classNames(styles.line, styles.line_type_head)}>
            <th className={classNames(styles.cellName, styles.cell, styles.cell_type_head)}>
              Название
            </th>
            {location.pathname !=='/admin/appeal' ? <th className={classNames(styles.cellVendor, styles.cell, styles.cell_type_head)}>
              Вендор
            </th> : null}
            <th className={classNames(styles.cellSeller, styles.cell, styles.cell_type_head)}>
              Продавец
            </th>
            <th className={classNames(styles.cellArt, styles.cell, styles.cell_type_head)}>Артикул</th>
            {location.pathname ==='/admin/appeal' ?<><th className={classNames(styles.cellDescription, styles.cell, styles.cell_type_head)}>
              Жалобы
            </th>
            <th className={classNames(styles.cellDescription, styles.cell, styles.cell_type_head)}>
              Новые
            </th></> : null}
            {location.pathname !=='/admin/appeal' ? <th className={classNames(styles.cellData, styles.cell, styles.cell_type_head)}>Дата</th> : null}
          </tr>
        </thead>
        <tbody>
       {products.map((i)=>{
        return (
        <tr className={styles.line} key={i.id}>
          {i.productStatus===productStatus?
          <>
            <td className={classNames(styles.cellName, styles.cell)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{i.name}</p>
              </Link>
            </td>
            {location.pathname !=='/admin/appeal' ? 
            <td className={classNames(styles.cellVendor, styles.cell)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={classNames(styles.cell__text) }>{i.vendor?.name ? i.vendor.name : ''}</p>
              </Link>
            </td> : null}
            <td className={classNames(styles.cellSeller, styles.cell)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{i.vendor?.name ? i.vendor.name : ''}</p>
              </Link>
            </td>
            <td className={classNames(styles.cellArt, styles.cell)}>
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
            {location.pathname !=='/admin/appeal' ?<td className={classNames(styles.cellArt, styles.cell)}>
              <Link to={`/product/${i.id}`} className={styles.link}>
                <p className={styles.cell__text}>{`${i.productionTime? i.productionTime: ''}`}</p>
              </Link>
            </td>: null}
            <td className={classNames(styles.cellBtn, styles.cell)}>
              <button className={styles.cell__btn}></button>
            </td>
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

