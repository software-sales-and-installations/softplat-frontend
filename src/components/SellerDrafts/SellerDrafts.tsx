import {FC} from 'react';
import styles from './SellerDrafts.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { SellerEmptyStatus } from '../SellerEmptyStatus/SellerEmptyStatus';

export const SellerDrafts: FC = () =>{
    return (
        <SellerEmptyStatus text='Черновиков пока нет'/>
    )
}
