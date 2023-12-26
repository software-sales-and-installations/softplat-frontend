import {FC, useEffect, useState} from 'react';
import styles from './AdminVendorsCatalog.module.scss';
import { useVendorListQuery } from '../../utils/api/vendorApi';
import { Link } from 'react-router-dom';

export const AdminVendorsCatalog: FC = () =>{
     //@ts-ignore
    const { data: vendorAll} = useVendorListQuery({},{
            refetchOnMountOrArgChange:true
          });
    const [vendorData, setVendorData] = useState(vendorAll)
          useEffect(()=>{
            setVendorData(vendorAll)
          },[vendorData, vendorAll])

    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
                <p className={styles.table__id}>ID</p>
                <p className={styles.table__vendor}>Вендор</p>
                <p className={styles.table__country}>Страна</p>
            </div>
            {vendorData?.vendors.map((i)=>{
                return(
                    <div key={i.id} className={styles.table__line}>
                    <Link to={`/producers/${i.id}`} className={styles.table__info}>
                        <p className={styles.table__id}>{i.id}</p>
                        <p className={styles.table__vendor}>{i.name}</p>
                        <p className={styles.table__country}>{i.country}</p>
                    </Link>
                    <Link to={`/admin/add-vendor/${i.id}`} className={styles.table__redBtn}/>
                    </div>
                )
            })}
        </div>
    )
}
