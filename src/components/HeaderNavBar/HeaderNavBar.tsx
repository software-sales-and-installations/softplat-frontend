import { FC } from 'react';
import styles from './HeaderNavBar.module.scss';
import { HEADER_BTNS } from '../../utils/constants';

export const HeaderNavbar: FC = () => {
    return (
        <nav>
            <ul className={styles.list}>
                {HEADER_BTNS.map((btn)=>{
                    return (<li key={btn.id} className={styles.item}>
                        <button type='button' className={styles.button}>{btn.title}</button>
                    </li>)
                })}
            </ul>
        </nav>
    )
}
