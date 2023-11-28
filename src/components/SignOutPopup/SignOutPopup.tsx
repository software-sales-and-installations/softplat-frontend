import {FC} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import styles from '../../UI/Popup/Popup.module.scss'
import { Button } from '../../UI/Button/Button';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { signOut } from '../../services/redux/slices/user/user';
import { useNavigate } from 'react-router-dom';

export const SignOutPopup: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    function handlePopupClose(){
		dispatch(popupState(false));
    }
    function logOut (){
        dispatch(signOut())
        navigate('/', {replace: true})
        dispatch(popupState(false));
    }
    return (
        <Popup>
            <h2 className={styles.popup__role}>Выход</h2>
            <p className={styles.popup__exittext}>Вы действительно хотите выйти из аккаунта?</p>
            <div className={styles.popup__exitcontainerbtn}>
                <Button mode='primary' onClick={logOut} >Да</Button>
                <Button onClick={handlePopupClose} mode='secondary' type='button'>Нет</Button>
            </div>
        </Popup>
    )
}
