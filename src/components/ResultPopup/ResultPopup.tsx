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
import { isNotSuccessPay, isSuccessPay } from '../CartSummary/CartSummarySlice';
import { isSuccessCardData } from '../PayPopup/PayPopupSlice';
import ReviewPopup from '../Product/ReviewPopup/ReviewPopup.tsx';
import { setIsReview } from '../../services/redux/slices/reviews/reviews.ts';
import { setIsDelete } from '../../services/redux/slices/complaints/complaints.ts';
import DeletePopup from '../Product/DeletePopup/DeletePopup.tsx';

export const ResultPopup : FC = () =>{
    const location = useLocation();
    const token = localStorage.getItem('token')
    const toggleState = useSelector((state: RootState) => state.toggleBtn.value);
  const isReview = useSelector((state: RootState) => state.reviews.isReview);
  const isDelete = useSelector((state: RootState) => state.complaints.isDelete);


  const MyRole = useSelector((state: RootState) => state.chooseRole.title);
    const dispatch = useDispatch();
	const isOpened =  useSelector((state: RootState) => state.popupOpen.setIsOpened)
    const isSuccess = useSelector((state: RootState) => state.isSuccessPay.isSuccessPay);
	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
            dispatch(isSuccessPay(0))
            dispatch(isNotSuccessPay(''))
            dispatch(isSuccessCardData(false))
			dispatch(popupState(false));
			dispatch(chooseRoleState('Я покупатель'))
      dispatch(setIsReview(false));
      dispatch(setIsDelete(false));
    }
	};

    return (
        <div onMouseDown={handleOverlayClick} className={classNames(styles.popup, isOpened ? styles.popup_opened : '')}>
            <div className={styles.popup__container}>
              {(token && location.pathname !=='/cart' && !location.pathname.includes('/product/') && !location.pathname.includes('/seller/appeal/') ? <SignOutPopup/> : (
                    (token && location.pathname ==='/cart'&& (isSuccess>0) ) ? <PayPopup/>:
                    (token && location.pathname ==='/cart' && (isSuccess===0)) ? <SuccessPayPopup/> :
                      (location.pathname.includes('/product/') && isReview ? <ReviewPopup /> :
                        (location.pathname.includes('/seller/appeal/') && isDelete ? <DeletePopup /> :

                          <>
                    <h2 className={styles.popup__role}>{MyRole==='Я покупатель'? 'Покупатель': (MyRole==='Я продавец'? 'Продавец': (MyRole==='Забыли пароль?'? 'Восстановление пароля' : 'Администратор'))}</h2>
                    {MyRole==='Я админ'? null : (MyRole==='Забыли пароль?'? null : <ToggleButton/>)}
                {!toggleState ?
                    (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: <PopupForAuth/>) :
                    (MyRole==='Забыли пароль?' ? <RecoverPasswordPopup/>: (MyRole==='Я админ'? <PopupForAuth/> : <PopupForReg/>))}
                    </>))))}
            </div>
        </div>
    )
}
