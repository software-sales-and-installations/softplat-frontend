import { FC } from 'react';
import {CATEGORIZED_TEXT }from '../../utils/constants';
import styles from './Categories.module.scss';

export const Categories: FC = () => {
    return(
        <ul className={styles.categories}>
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
