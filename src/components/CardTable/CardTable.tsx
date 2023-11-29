import {FC} from 'react';
import styles from './CardTable.module.scss';
import classNames from 'classnames';
import { IProductCardPropsTable } from '../ProductCard/ProductCardTypes';
import {  useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';
import { useForm } from "react-hook-form";

export const CardTable: FC<IProductCardPropsTable> =({products}) =>{
	const user = useAppSelector(selectUser);
    const { register, handleSubmit } = useForm({});
    return(
        <form onSubmit={handleSubmit(data => console.log(data))}>
        <table>
            <thead>
                <tr className={classNames(styles.line, styles.line_type_head)}>
                    {user.role==='ADMIN'? <th className={classNames(styles.cellLogo, styles.cell)}>Выбрать</th>: null}
                    {user.role==='SELLER'? <th className={classNames(styles.cellLogo, styles.cell)}>Лого</th> : null}
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
                        <tr key={item.id} className={classNames(styles.line, styles.line_type_body)} >
                            {user.role==='ADMIN'?
                            <td className={classNames(styles.cellLogo, styles.cell, styles.cell_type_checkbox)}>
                                <input type='checkbox' {...register("id")}  value={item.id}></input>
                            </td> : null}
                            {user.role==='SELLER'?<td className={classNames(styles.cellLogo, styles.cell)}>
                                <img className={classNames(styles.cellLogo__img, styles.cell)} src={item.seller?.imageResponseDto.url} alt={item.name}/>
                            </td> : null}
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
                    )})}
            </tbody>
        </table>
        {user.role==='ADMIN'?
        <div className={styles.cardtable__btncontainer}>
            <button className={styles.cardtable__btn} type='submit'>Удалить</button>
            <button className={styles.cardtable__btn} type='submit'>Отправить на доработку</button>
        </div>: null}
        </form>
    )
}
