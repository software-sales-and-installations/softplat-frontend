import {FC} from 'react';
import styles from './StatsTable.module.scss';
import classNames from 'classnames';
import { Button } from '../../UI/Button/Button';

export const StatsTable: FC = () =>{
    return (
        <section>
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
                <p className={styles.statsTable__sumResult}>22222</p>
                <p className={styles.statsTable__sumResult}>22222</p>
            </div>
        </div>
        <div className={styles.statsTable__containerforBtn}>
            <Button type='submit' mode='primary'>Выгрузить</Button>
        </div>
        </section>
    )
}
