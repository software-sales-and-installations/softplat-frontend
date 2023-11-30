import {FC} from 'react';
import { ToggleButton } from '../../UI/ToggleButton/ToggleButton';
import styles from '../../UI/Popup/Popup.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';
import { PopupForAuth } from '../AuthPopup/AuthPopup';
import { RecoverPasswordPopup } from '../RecoverPasswordPopup/RecoverPasswordPopup';
import { PopupForReg } from '../RegPopup/RegPopup';
import { SignOutPopup } from '../SignOutPopup/SignOutPopup';
import { PayPopup } from '../PayPopup/PayPopup';
import { useLocation } from 'react-router';
import { SuccessPayPopup } from '../SuccessPayPopup/SuccessPayPopup';

export const ResultPopup : FC = () =>{
    const location = useLocation();;
    const token = localStorage.getItem('token')
    const toggleState = useSelector((state: RootState) => state.toggleBtn.value);
    const MyRole = useSelector((state: RootState) => state.chooseRole.title);
    const isSuccessPay = useSelector((state: RootState) => state.isSuccessPay.isSuccessPay);

    const dispatch = useDispatch();
	const isOpened =  useSelector((state: RootState) => state.popupOpen.setIsOpened)
	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
			dispatch(popupState(false));
			dispatch(chooseRoleState('Я покупатель'))
		}
	};
    
    return (
        <div onMouseDown={handleOverlayClick} className={classNames(styles.popup, isOpened ? styles.popup_opened : '')}>
            <div className={styles.popup__container}>
            {(token && location.pathname !=='/cart' )? <SignOutPopup/> : (
                    (token && location.pathname ==='/cart' && !isSuccessPay ) ? <PayPopup/>:
                        (token && location.pathname ==='/cart' && isSuccessPay) ? <SuccessPayPopup/> :
                <>
                    <h2 className={styles.popup__role}>{MyRole==='Я покупатель'? 'Покупатель': (MyRole==='Я продавец'? 'Продавец': (MyRole==='Забыли пароль?'? 'Восстановление пароля' : 'Администратор'))}</h2>
                    {MyRole==='Я админ'? (
                    <p className={styles.adminBtn}>Вход</p>
                ) : (MyRole==='Забыли пароль?'? null : <ToggleButton/>)}
                {!toggleState ? 
                    (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: <PopupForAuth/>) : 
                    (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: (MyRole==='Я админ'? <PopupForAuth/> : <PopupForReg/>))}
                    </>)}
            </div>
        </div>
    )
}
