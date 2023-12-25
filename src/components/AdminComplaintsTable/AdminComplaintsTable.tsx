import {FC, useEffect, useState} from 'react';
import styles from './AdminComplaintsTable.module.scss';
import classNames from 'classnames';
import { useComplaintListQuery } from '../../utils/api/complaintApi';
import { IComplaint } from './AdminComplaintsType';
import { INewComplaints} from './AdminComplaintsType';
import { Link } from 'react-router-dom';

export const AdminComplaintsTable: FC = () =>{
    const {data: complaintList=[]} = useComplaintListQuery({},{
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
            <th className={classNames(styles.cellSeller, styles.cell)}>Продавец</th>
            <th className={classNames(styles.cellArt, styles.cell)}>Артикул</th>
            <th className={classNames(styles.cellComplaints, styles.cell)}>Жалобы</th>
          </tr>
        </thead>
        <tbody>
       {newItems.map((i: any)=>{
        return (
        <tr className={classNames(styles.line, styles.line_type_body)} key={i.id}>
          
            <td className={classNames(styles.cellName, styles.cell, styles.cell_type_body)}>
            <Link className={classNames(styles.link, styles.line, styles.line_type_body)} to={`/admin/appeal/${i.product.id}`}>
                <p className={styles.cell__text}>{i.product.name}</p>
              </Link>
            </td>
            <td className={classNames(styles.cellVendor, styles.cell, styles.cell_type_body)}>
            <Link className={classNames(styles.link, styles.line, styles.line_type_body)} to={`/admin/appeal/${i.product.id}`}>
                <p className={classNames(styles.cell__text) }>{i.product.vendor?.name}</p>
                </Link>
            </td>
            <td className={classNames(styles.cellSeller, styles.cell, styles.cell_type_body)}>
            <Link className={classNames(styles.link, styles.line, styles.line_type_body)} to={`/admin/appeal/${i.product.id}`}>
                <p className={styles.cell__text}>{i.product.seller?.name}</p>
                </Link>
            </td>
            <td className={classNames(styles.cellArt, styles.cell, styles.cell_type_body)}>
            <Link className={classNames(styles.link, styles.line, styles.line_type_body)} to={`/admin/appeal/${i.product.id}`}>
                <p className={styles.cell__text}>{i.product.id}</p>
                </Link>
            </td>
            <td className={classNames(styles.cellQty, styles.cell, styles.cell_type_body)}>
            <Link className={classNames(styles.link, styles.line, styles.line_type_body)} to={`/admin/appeal/${i.product.id}`}>
                <p className={styles.cell__text}>{i.qty}</p>
                </Link>
            </td>
            
        </tr>)
       })}
        </tbody>
      </table>
    )
}
