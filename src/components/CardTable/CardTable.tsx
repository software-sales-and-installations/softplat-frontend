import {FC} from 'react';
import styles from './CardTable.module.scss';
import { SellerExistingCard } from '../../utils/constants';
import classNames from 'classnames';
import { CardsGridProps } from '../CardsGrid/CardsGridTypes';

export const CardTable: FC<CardsGridProps> =(SellerExistingCard) =>{
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
                {SellerExistingCard.map((card)=>{
                    return(
                        <tr className={classNames(styles.line, styles.line_type_body)} key={card.id}>
                            <td className={classNames(styles.cellLogo, styles.cell)}>
                                <img className={classNames(styles.cellLogo__img, styles.cell)} src={card.logo} alt={card.name}/>
                            </td>
                            <td className={classNames(styles.cellName, styles.cell)}>
                                <p className={styles.cell__text}>{card.name}</p>
                            </td>
                            <td className={classNames(styles.cellVendorCategory, styles.cell)}>
                                <p className={styles.cell__text}>{card.vendor}</p>
                            </td>
                            <td className={classNames(styles.cellVendorCategory, styles.cell)}>
                                <p className={styles.cell__text}>{card.category}</p>
                            </td>
                            <td className={classNames(styles.cellArt, styles.cell)}>
                                <p className={styles.cell__text}>{card.art}</p>
                            </td>
                            <td className={classNames(styles.cellDescription, styles.cell)}>
                                <p className={styles.cell__text}>{card.description}</p>
                            </td>
                            <td className={classNames(styles.cellData, styles.cell)}>
                                <p className={styles.cell__text}>{card.data}</p>
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
