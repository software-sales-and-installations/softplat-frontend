import {FC} from 'react';
import styles from './Producers.module.scss';
import DropDown from '../../UI/DropDown/DropDown';
import { SELECT_OPTIONS } from '../../utils/constants';
import {PRODUCERS_LIST} from '../../utils/constants';
import { Link } from 'react-router-dom';

export const Producers: FC =() =>{
    const onChoose = () => {};
    return (
        <>
        <h1 className={styles.title}>Производители</h1>
        <div className={styles.ddcontainer}>
            <DropDown options={SELECT_OPTIONS} onChoose={onChoose}/>
        </div>
        <div className={styles.container}>
        {PRODUCERS_LIST.map((vendor)=>{
            return (
            <Link key={vendor.id} to={`/producers/${vendor.title.toLowerCase()}`} className={styles.container__link}>
                <img className={styles.container__img} src={vendor.label} alt={vendor.title}/>
                <h2 className={styles.container__title}>{vendor.title}</h2>
            </Link>
        )})}
        </div>
        </>
    )
}
