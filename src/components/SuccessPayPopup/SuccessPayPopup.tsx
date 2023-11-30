import {FC} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import styles from './SuccessPayPopup.module.scss';
import { Button } from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { isSuccessPay } from '../PayPopup/PayPopupSlice';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';

export const SuccessPayPopup: FC = ()=>{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function handleClick(){
        navigate('/personal/purchases', {replace: true})
        dispatch(isSuccessPay(false))
        dispatch(popupState(false))
    }
    return(
        <Popup>
            <h2 className={styles.title}>Спасибо за покупку!</h2>
            <p className={styles.subtitle}>Оплата прошла успешно, купленное программное обеспечение доступно в личном кабинете в разделе «Мои покупки». </p>
            <p className={styles.subtitle}>Лицензионные ключи были отправлены на Вашу почту</p>
            <Button type='button' mode='primary' onClick={handleClick}>Мои покупки</Button>
        </Popup>
    )
}
