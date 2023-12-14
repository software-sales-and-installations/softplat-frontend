import {FC} from 'react';
import styles from './SellerDrafts.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';

export const SellerDrafts: FC = () =>{
    return (
    <div className={styles.drafts__emptyContainer}>
    <h2 className={styles.drafts__title}>Черновиков пока нет</h2>
    <Button mode='primary' type='button'>
        <Link className={styles.drafts__link} to='/seller/add-card'>Добавить карточку</Link>
    </Button>
    </div>
    )
}
