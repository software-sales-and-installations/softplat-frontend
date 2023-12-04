<<<<<<< HEAD
import { IHeader } from './HeaderTypes';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from '../HeaderNavBar/HeaderNavBar';
import { HeaderSearchForm } from '../HeaderSearchForm/HeaderSearchForm';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { popupState } from '../../UI/Popup/PopupSlice';
import { useDispatch } from 'react-redux';
import { ResultPopup } from '../ResultPopup/ResultPopup';

export const Header: FC<IHeader> = ({ loggedIn }) => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        Logo
      </Link>
      <HeaderNavbar />
      <HeaderSearchForm />
      <div className={styles.btncontainer}>
        {loggedIn ? (
          <button type="button" className={styles.btncontainer__likebtn} />
        ) : null}
        <button type="button" className={styles.btncontainer__shopbtn} />
        {loggedIn ? (
          <button type="button" className={styles.btncontainer__profile}>
            <FaRegUser className={styles.btncontainer__profileicon} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(popupState(true))}
            className={styles.btncontainer__profileenter}
          >
            Войти
          </button>
        )}
      </div>
      <ResultPopup />
    </header>
  );
};
=======
// import { IHeader } from "./HeaderTypes";
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from "../HeaderNavBar/HeaderNavBar";
import { HeaderSearchForm } from "../HeaderSearchForm/HeaderSearchForm";
import {FaRegUser} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { popupState } from "../../UI/Popup/PopupSlice";
import { ResultPopup } from "../ResultPopup/ResultPopup";
import { useAppDispatch } from '../../services/redux/store';
import {useEffect, useState} from 'react';
import { useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';
import { RootState } from '../../services/redux/store';


export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const [token, setToken] = useState(localStorage.getItem('token'))
    const role = localStorage.getItem('role');
	const user = useAppSelector(selectUser);
    const signout = useAppSelector((state: RootState) => state.signout.signout);
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
    },[signout, user])
    useEffect(()=>{},[token])
    return (
        <header className={styles.header}>
            <Link to='/catalog' className={styles.header__logo}>Logo</Link>
            <HeaderNavbar/>
            <HeaderSearchForm/>
            <div className={styles.btncontainer}>
            {(role)==='BUYER'? (<><Link to='personal/favorites' className={styles.btncontainer__likebtn}/> 
                <Link to='/cart' className={styles.btncontainer__shopbtn}/> </>) : (!token? <Link to='/cart' className={styles.btncontainer__shopbtn}/> : null)}
                {(token)? (
                    <Link to={role==='BUYER'? '/personal' : (role==='ADMIN')? '/admin':'/seller'} className={styles.btncontainer__profile}><FaRegUser className={styles.btncontainer__profileicon}/></Link>
                ) : (
                    <button type='button' onClick={()=>{
                        dispatch(popupState(true))
                    }} className={styles.btncontainer__profileenter}>Войти</button>
                )}
            </div>
            <ResultPopup />
        </header>
    )
}
>>>>>>> 01f67af82a573c8976c87cc333fbf83bd9547cb9
