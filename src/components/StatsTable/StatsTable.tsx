import {FC} from 'react';
import styles from './StatsTable.module.scss';
import classNames from 'classnames';

export const StatsTable: FC = () =>{
    return (
        <>
        <div className={styles.statsTable__header}>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_number)}>№</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_name)}>Название</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_art)}>Артикул</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_demo)}>Демо (шт)</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_qty)}>Купили (шт)</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_sum)}>Сумма (руб)</p>
            <p className={classNames(styles.statsTable__cell, styles.statsTable__cell_type_proceeds)}>Выручка (руб)</p>
        </div>
        </>
    )
}
