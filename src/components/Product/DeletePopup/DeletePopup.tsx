import { useState } from 'react';

import { popupState } from '../../../UI/Popup/PopupSlice.tsx';
import { RootState, useAppDispatch, useAppSelector } from '../../../services/redux/store.ts';

import { Button } from '../../../UIStorybook/Button/Button.tsx';
import {
  useProductDeleteOwnCardImageMutation,
  useProductDeleteOwnCardMutation,
} from '../../../utils/api/userProductApi.tsx';
import { useNavigate } from 'react-router-dom';

import styles from './DeletePopup.module.scss'


const ReviewPopup = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('')
  const dispatch = useAppDispatch();
  const id = useAppSelector((state: RootState) => state.product.setId);

  const [productDeleteOwnCard] = useProductDeleteOwnCardMutation();
  const [productDeleteOwnCardImage] = useProductDeleteOwnCardImageMutation();

  const handleYes = () => {
    productDeleteOwnCard(id).unwrap()
    productDeleteOwnCardImage(id).unwrap()
      .then(() => {
        dispatch(popupState(false));
        navigate(`/seller/add-card/${id}` )

      })
      .catch((error) => {
        setErrorText(error.data.message);
        setTimeout(() => {setErrorText('')}, 3000)
      })
  }

  const handleNo = () => {
    dispatch(popupState(false));
  }

  return (
    <div className={styles.delete}>
      <h1 className={styles.delete__header}>Удаление</h1>
      <p className={styles.delete__subtitle}>Вы действительно хотите удалить карточку?</p>
      <div className={styles.delete__buttonsContainer}
      >
        <div className={styles.delete__errorWrapper}>
          { errorText && (<span className={styles.delete__error}>{errorText}</span>)}
        </div>
      <div className={styles.delete__buttonsWrapper}>
        <Button
          width='200px'
          height='45px'
          buttonType='minorPrimary'
          type='button'
          onClick={handleYes}
        >Да</Button>
        <Button
          width='200px'
          height='45px'
          buttonType='minorSecondary'
          type='button'
          onClick={handleNo}
        >Нет</Button>
      </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
