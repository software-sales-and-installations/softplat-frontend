//Объединить с жалобами в кабинете админа

import {FC, useEffect, useState} from 'react';
import styles from './SellerComplaintsTable.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useComplaintSellerListQuery } from '../../utils/api/complaintApi';
import { INewComplaints } from './SellerComplaintsTableTypes';
import { IComplaint } from './SellerComplaintsTableTypes';
import { qtySellerComplaints } from './SellerComplaintsTableSlice';
import { useAppDispatch } from '../../services/redux/store';


export const SellerComplaintsTable: FC = () => {
    const dispatch = useAppDispatch();
    const {data: complaintList=[]} = useComplaintSellerListQuery({},{
        refetchOnMountOrArgChange: true
      });
    let countProducts: Array<number>=[]
    let newComplaintsList: Array<INewComplaints> =[]
    const [newItems, setNewItems] = useState<IComplaint[]>([])
    function newList(){
        dispatch(qtySellerComplaints(complaintList?.totalComplaints))
        complaintList?.complaints?.forEach((i: any)=>{
          let count =0;
          if(countProducts.indexOf(i.product.id)===-1){
            console.log(newComplaintsList)
            newComplaintsList.push({...i, qty:1})
  
          }
          if(countProducts.indexOf(i.product.id)!==-1){
            countProducts.forEach((el)=>{
              i.product.id===el;
              count+=1;
            })
            console.log(count)
            newComplaintsList.forEach((el)=>{
              console.log(count)
              el.product.id===i.product.id
              ? el.qty=count
              : el
  
            })
  
          }
          countProducts.push(i.product.id)
          console.log(newComplaintsList)
          setNewItems(newComplaintsList)
          return newComplaintsList
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
        <tr className={classNames(styles.line, styles.line_type_body)} key={i.id}>
          <>
            <td className={classNames(styles.cellName, styles.cell, styles.cell_type_body)}>
                <p className={styles.cell__text}>{i.product.name}</p>
            </td>
            <td className={classNames(styles.cellVendor, styles.cell, styles.cell_type_body)}>
                <p className={classNames(styles.cell__text) }>{i.product.vendor?.name}</p>
            </td> 
            <td className={classNames(styles.cellArt, styles.cell, styles.cell_type_body)}>
                <p className={styles.cell__text}>{i.product.id}</p>
            </td>
            <td className={classNames(styles.cellQty, styles.cell, styles.cell_type_body)}>
                <p className={styles.cell__text}>{i.qty}</p>
            </td>
            </>
        </tr>)
       })}
        </tbody>
      </table>
    )
}
