import { IHeader } from "./HeaderTypes";
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from "../HeaderNavBar/HeaderNavBar";
import { HeaderSearchForm } from "../HeaderSearchForm/HeaderSearchForm";
import {FaRegUser} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { PopupForReg } from "../RegPopup/PopupForReg";
import { PopupForAuth } from "../AuthPopup/PopupForAuth";
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { popupState } from "../Popup/PopupSlice";
import { useDispatch } from 'react-redux';
import { RecoverPasswordPopup } from "../RecoverPasswordPopup/RecoverPasswordPopup";



export const Header: FC<IHeader> = ({ loggedIn }) => {
    const toggleState = useSelector((state: RootState) => state.toggleBtn.value);
    const MyRole = useSelector((state: RootState) => state.chooseRole.title);
    const dispatch = useDispatch();
    return (
        <header className={styles.header}>
            <img src="#" alt="Логотип"/>
            <HeaderNavbar/>
            <HeaderSearchForm/>
            <div className={styles.btncontainer}>
                <button type='button' className={styles.btncontainer__likebtn}><FaRegHeart className={styles.btncontainer__likeicon}/></button>
                <button type='button' className={styles.btncontainer__shopbtn}><AiOutlineShoppingCart className={styles.btncontainer__shopicon} /></button>
                {loggedIn? (
                    <button type='button' className={styles.btncontainer__profile}><FaRegUser className={styles.btncontainer__profileicon}/></button>
                ) : (
                    <button onClick={()=>dispatch(popupState(true))} type='button' className={styles.btncontainer__profileenter}>Войти</button>
                )}
            </div>
            {!toggleState ? <PopupForAuth/> : (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: <PopupForReg/>)}
        </header>
    )
}
