import {FC, useEffect} from 'react';
import styles from './StatsTable.module.scss';
import classNames from 'classnames';
import { Button } from '../../UI/Button/Button';
import { useSellerStatsDataQuery } from '../../utils/api/sellerApi';
// import EmptyState from '../EmptyState/EmptyState';

export const StatsTable: FC = () =>{
    const {data} = useSellerStatsDataQuery({body: {
        end: "2023-12-26",
        start: "2023-12-26"
      }});
      useEffect(()=>{
        console.log(data)
      }, [data])
    return (
        <section className={styles.statsTable}>
        {/* <EmptyState button={false}>Продаж пока нет</EmptyState> */}
        <div className={styles.statsTable__header}>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_number)}>№</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_name)}>Название</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_art)}>Артикул</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_demo)}>Демо 
                <span className={styles.statsTable__cell_type_span}> (шт)</span>
            </p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_qty)}>Купили 
                <span className={styles.statsTable__cell_type_span}> (шт)</span>
            </p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_sum)}>Сумма 
                <span className={styles.statsTable__cell_type_span}> (руб)</span>
            </p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_proceeds)}>Выручка 
                <span className={styles.statsTable__cell_type_span}> (руб)</span>
            </p>
        </div>
        <div className={styles.statsTable__sum}>
            <h3 className={styles.statsTable__sumResult}>Итого</h3>
            <div className={styles.statsTable__sumContainer}>
                <p className={styles.statsTable__sumResult}>0</p>
                <p className={styles.statsTable__sumResult}>0</p>
            </div>
        </div>
        <div className={styles.statsTable__containerforBtn}>
            <Button type='submit' mode='primary'>Выгрузить</Button>
        </div>
        </section>
    )
}
