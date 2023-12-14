import {FC, ReactNode} from 'react';
import styles from './SellerEmptyStatus.module.scss';
import { Button } from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

interface IEmptyStatus{
    text: string;
}

export const SellerEmptyStatus: FC<IEmptyStatus> = ({text}) =>{
    return(
        <div className={styles.drafts__emptyContainer}>
        <h2 className={styles.drafts__title}>{text}</h2>
        <Button mode='primary' type='button'>
            <Link className={styles.drafts__link} to='/seller/add-card'>Добавить карточку</Link>
        </Button>
        </div>
    )
}
