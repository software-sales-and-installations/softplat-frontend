import { FC } from 'react';
import {CATEGORIZED_TEXT }from '../../utils/constants';
import styles from './Categories.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

export const Categories: FC = () => {
    const location = useLocation();
    return(
        <ul className={classNames(styles.categories, (location.pathname==='/catalog' ? styles.categories_type_header : ''))}>
            {CATEGORIZED_TEXT.map((btn)=>{
                return(
                    <li className={styles.item} key={btn.id}>
                        <button className={styles.btn}>{btn.text}</button>
                    </li>
                )
            })}
        </ul>
    )
}
