import {FC, useEffect} from 'react';
import styles from './SellerDrafts.module.scss';
import { SellerEmptyStatus } from '../SellerEmptyStatus/SellerEmptyStatus';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import { IProductCard } from '../ProductCard/ProductCardTypes';

import { useState } from 'react';

export const SellerDrafts: FC = () =>{
    let count = 0 ;
    const { data: cards, error, isLoading } = usePublicProductListQuery({
        minId: 0,
        pageSize: '',
        sort: 'NEWEST',
      });
    const [draftCards, setDraftCards] = useState(cards)
    useEffect(()=>{
        console.log(cards)
        setDraftCards(cards)
    },[cards, draftCards])
    return (
        <>
        {!cards? <SellerEmptyStatus text='Черновиков пока нет'/> :
        <div className={styles.container}>
        
            <div className={styles.container__header}>
                <p className={styles.container__headerNum}>№</p>
                <p className={styles.container__headerName}>Наименование</p>
                <p className={styles.container__headerVendor}>Вендор</p>
                <p className={styles.container__headerArt}>Артикул</p>
                <p className={styles.container__headerData}>Дата</p>
            </div>
            {cards?.products.map((i: IProductCard)=>{
                count = count+1;
                return (
                    <div className={styles.container__line} key={i.id}>
                        <p className={styles.container__headerNum}>{count}</p>
                        <p className={styles.container__headerName}>{i.name}</p>
                        <p className={styles.container__headerVendor}>{i.vendor?.name || '-'}</p>
                        <p className={styles.container__headerArt}>{i.id}</p>
                        <p className={styles.container__headerData}>{''}</p>
                        <button className={styles.container__trash} type='button'></button>
                    </div>
                )
            })}
        </div>}
        </>
    )
}
