import { FC } from 'react';
import styles from './HeaderSearchForm.module.scss';
import {GrSearch} from 'react-icons/gr'

export const HeaderSearchForm: FC = () => {
    return(
        <form className={styles.form}>
            <input type='text' className={styles.input}></input>
            <button type='submit' className={styles.button}><GrSearch/></button>
        </form>
    )
}
