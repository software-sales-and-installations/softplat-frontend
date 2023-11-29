// import { IHeader } from "./HeaderTypes";
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from "../HeaderNavBar/HeaderNavBar";
import { HeaderSearchForm } from "../HeaderSearchForm/HeaderSearchForm";
import {FaRegUser} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { popupState } from "../../UI/Popup/PopupSlice";
import { ResultPopup } from "../ResultPopup/ResultPopup";
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';



export const Header: FC = () => {
    const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
    return (
        <header className={styles.header}>
            <Link to='/catalog' className={styles.header__logo}>Logo</Link>
            <HeaderNavbar/>
            <HeaderSearchForm/>
            <div className={styles.btncontainer}>
            {user.role==='BUYER'? (<><Link to='personal/favorites' className={styles.btncontainer__likebtn}/>
                <Link to='/cart' className={styles.btncontainer__shopbtn}/> </>) : null}
                {user.token? (
                    <Link to={user.role==='BUYER'? '/personal' : (user.role==='ADMIN'?'/admin':'/seller')} className={styles.btncontainer__profile}><FaRegUser className={styles.btncontainer__profileicon}/></Link>
                ) : (
                    <button type='button' onClick={()=>{
                        dispatch(popupState(true))
                        console.log(user)
                    }} className={styles.btncontainer__profileenter}>Войти</button>
                )}
            </div>
            <ResultPopup />
        </header>
    )
}
