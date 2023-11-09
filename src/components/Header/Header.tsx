import { IHeader } from "./HeaderTypes";
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from "../HeaderNavBar/HeaderNavBar";
import { HeaderSearchForm } from "../HeaderSearchForm/HeaderSearchForm";
import {FaRegUser} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';



export const Header: FC<IHeader> = ({ loggedIn }) => {
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
                    <button type='button' className={styles.btncontainer__profileenter}>Войти</button>
                )}
            </div>
            
        </header>
    )
}
