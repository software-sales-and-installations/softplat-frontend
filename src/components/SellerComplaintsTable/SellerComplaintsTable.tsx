//Объединить с жалобами в кабинете админа

import {FC, useEffect, useState} from 'react';
import styles from './SellerComplaintsTable.module.scss';
import classNames from 'classnames';
import { useComplaintSellerListQuery } from '../../utils/api/complaintApi';
import { INewComplaints } from './SellerComplaintsTableTypes';
import { IComplaint } from './SellerComplaintsTableTypes';
import { Link } from 'react-router-dom';

export const SellerComplaintsTable: FC = () => {
    const {data: complaintList=[]} = useComplaintSellerListQuery({},{
        refetchOnMountOrArgChange: true
      });

      const [newItems, setNewItems] = useState<IComplaint[]>([])
      function productIdList(){
        let countProducts: Array<number>=[]
        complaintList?.complaints?.forEach((i: any)=>{
          countProducts.push(i.product.id)
        })
        return countProducts
      }

      function newList(){
        let countProducts: Array<number>=[]
        let newComplaintsList: Array<INewComplaints> =[]
          complaintList?.complaints?.forEach((i: any)=>{
            let count =0;
            const newIdList = productIdList();
            newIdList.forEach((id)=>{
            if (i.product.id===id){
              count+=1
            }
          })
            if(countProducts.indexOf(i.product.id)===-1){
              console.log(newComplaintsList)
              newComplaintsList.push({...i, qty:count})
            }
            countProducts.push(i.product.id)
            console.log(newComplaintsList)
            setNewItems(newComplaintsList)
          })
      }

      useEffect(()=>{
        newList()
      },[complaintList])
    return (
        <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={classNames(styles.line)}>
            <th className={classNames(styles.cellName, styles.cell)}>Название</th>
            <th className={classNames(styles.cellVendor, styles.cell)}>Вендор</th>
            <th className={classNames(styles.cellArt, styles.cell)}>Артикул</th>
            <th className={classNames(styles.cellComplaints, styles.cell)}>Жалобы</th>
          </tr>
        </thead>
        <tbody>
        {newItems.map((i: any)=>{
        return (
        <tr className={styles.line} key={i.id}>
          <Link className={classNames(styles.line, styles.line_type_body)} to={`/product/${i.product.id}`}>
            <td className={classNames(styles.cellName, styles.cell, styles.cell_type_body)}>
                <p className={styles.cell__text}>{i.product.name}</p>
            </td>
            <td className={classNames(styles.cellVendor, styles.cell, styles.cell_type_body)}>
                <p className={classNames(styles.cell__text) }>{i.product.vendor?.name}</p>
            </td>
            <td className={classNames(styles.cellArt, styles.cell, styles.cell_type_body)}>
                <p className={styles.cell__text}>{i.product.id}</p>
            </td>
            <td className={classNames(styles.cell, styles.cell_type_body, styles.cellComplaints)}>
                <p className={classNames(styles.cellQty, styles.cell__text)}>{i.qty}</p>
            </td>
            </Link>
        </tr>)
       })}
        </tbody>
      </table>
    )
}
