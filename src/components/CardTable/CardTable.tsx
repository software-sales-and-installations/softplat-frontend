import {FC} from 'react';
import styles from './CardTable.module.scss';
import classNames from 'classnames';
import { IProductCardPropsTable } from '../ProductCard/ProductCardTypes';

export const CardTable: FC<IProductCardPropsTable> =({products}) =>{
    return(
        <table>
            <thead>
                <tr className={classNames(styles.line, styles.line_type_head)}>
                    <th className={classNames(styles.cellLogo, styles.cell)}>Лого</th>
                    <th className={classNames(styles.cellName, styles.cell)}>Название</th>
                    <th className={classNames(styles.cellVendorCategory, styles.cell)}>Вендор</th>
                    <th className={classNames(styles.cellVendorCategory, styles.cell)}>Категория</th>
                    <th className={classNames(styles.cellArt, styles.cell)}>Артикул</th>
                    <th className={classNames(styles.cellDescription, styles.cell)}>Описание</th>
                    <th className={classNames(styles.cellData, styles.cell)}>Дата</th>
                    <th className={classNames(styles.cellRed, styles.cell)}>Ред</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item)=>{
                    return(
                        <tr className={classNames(styles.line, styles.line_type_body)} key={item.id}>
                            <td className={classNames(styles.cellLogo, styles.cell)}>
                                <img className={classNames(styles.cellLogo__img, styles.cell)} src={item.seller?.imageResponseDto.url} alt={item.name}/>
                            </td>
                            <td className={classNames(styles.cellName, styles.cell)}>
                                <p className={styles.cell__text}>{item.name}</p>
                            </td>
                            <td className={classNames(styles.cellVendorCategory, styles.cell)}>
                                <p className={styles.cell__text}>{item.vendor?.name? item.vendor.name: ''}</p>
                            </td>
                            <td className={classNames(styles.cellVendorCategory, styles.cell)}>
                                <p className={styles.cell__text}>{item.category?.name? item.category.name : ''}</p>
                            </td>
                            <td className={classNames(styles.cellArt, styles.cell)}>
                                <p className={styles.cell__text}>{item.id}</p>
                            </td>
                            <td className={classNames(styles.cellDescription, styles.cell)}>
                                <p className={styles.cell__text}>{item.description}</p>
                            </td>
                            <td className={classNames(styles.cellData, styles.cell)}>
                                <p className={styles.cell__text}>{item.date}</p>
                            </td>
                            <td className={classNames(styles.cellRed, styles.cell)}>
                                <button className={styles.redBtn} type='button'/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
