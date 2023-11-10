import {FC} from 'react';
import { ToggleButton } from '../UI/ToggleButton/ToggleButton';
import styles from './Popup.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { popupState } from './PopupSlice';
import { chooseRoleState } from '../UI/ChooseRole/ChooseRoleSlice';
import { PopupForAuth } from '../AuthPopup/AuthPopup';
import { RecoverPasswordPopup } from '../RecoverPasswordPopup/RecoverPasswordPopup';
import { PopupForReg } from '../RegPopup/RegPopup';

export const ResultPopup : FC = () =>{
    const toggleState = useSelector((state: RootState) => state.toggleBtn.value);
    const MyRole = useSelector((state: RootState) => state.chooseRole.title);
    const dispatch = useDispatch();
	const isOpened =  useSelector((state: RootState) => state.popupOpen.setIsOpened)
	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
			dispatch(popupState(false));
			dispatch(chooseRoleState('Я покупатель'))
		}
	};
    
    return (
        <div onClick={handleOverlayClick} className={classNames(styles.popup, isOpened ? styles.popup_opened : '')}>
            <div className={styles.popup__container}>
                <ToggleButton/>
                {!toggleState ? (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: <PopupForAuth/>) : (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: <PopupForReg/>)}
            </div>
        </div>
    )
}
