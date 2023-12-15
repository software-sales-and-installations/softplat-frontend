import {FC, useEffect, useState} from 'react';
import styles from './AdminVendorsCatalog.module.scss';
import { useVendorListQuery } from '../../utils/api/vendorApi';
import { Link } from 'react-router-dom';

export const AdminVendorsCatalog: FC = () =>{
    const { data: vendorAll,
        //     // isFetching,isLoading, error
          } = useVendorListQuery();
    const [vendorData, setVendorData] = useState(vendorAll)
          useEffect(()=>{
            setVendorData(vendorAll)
          },[vendorData, vendorAll])
    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
                <p className={styles.table__logo}>ID</p>
                <p className={styles.table__vendor}>Вендор</p>
                <p className={styles.table__country}>Страна</p>
            </div>
            {vendorData?.vendors.map((i)=>{
                return(
                    <Link to={`/producers/${i.id}`} className={styles.table__line}>
                        <p className={styles.table__logo}>{i.id}</p>
                        <p className={styles.table__vendor}>{i.name}</p>
                        <p className={styles.table__country}>{i.country}</p>
                    </Link>
                )
            })}
        </div>
    )
}
