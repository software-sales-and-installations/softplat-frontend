// import Form from '../../../UIStorybook/Form/Form.tsx';
// import { InputWrapper } from '../../../UIStorybook/InputWrapper/InputWrapper.tsx';
// import { Textarea } from '../../../UIStorybook/Textarea/Textarea.tsx';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { useProductModerateMutation } from '../../../utils/api/userProductApi.tsx';
import { useNavigate, useParams } from 'react-router-dom';
// import { Input } from '../../../UIStorybook/Input/Input.tsx';

import styles from './SellerComplaintsForm.module.scss';
// import { useComplaintModerationMutation } from '../../../utils/api/complaintApi.tsx';
import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { popupState } from '../../../UI/Popup/PopupSlice.tsx';
import { useAppDispatch } from '../../../services/redux/store.ts';
import { setIsDelete } from '../../../services/redux/slices/complaints/complaints.ts';
import { productId } from '../../../services/redux/slices/product/product.ts';


const SellerComplaintsForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  // const [errorText, setErrorText] = useState('')
  // const [successText, setSuccessText] = useState('')

  //
  // const [productModerate] = useProductModerateMutation();
  // const [complaintModerate] = useComplaintModerationMutation();
  //
  //
  // const handleSubmitModeration = () => {
  //   if (status === 'REJECTED') {
  //     productModerate({
  //       productId: id, status: status, body: {
  //         "adminComplaintText": getValues('adminComplaintText')
  //       }
  //     }).unwrap()
  //       .then(() => {
  //         setSuccessText("Запрос успешно отправлен");
  //       })
  //       .catch((error) => {
  //         setErrorText(error.data.message);
  //       })
  //       .finally(() => {
  //           setTimeout(() => {
  //             setErrorText('')
  //           }, 3000)
  //           setTimeout(() => {
  //             setSuccessText('')
  //           }, 3000)
  //         }
  //       )
  //   } else if (status === '') {
  //     complaintModerate({
  //       complaintId: getValues('complaintId'), body: {
  //           "comment": getValues('adminComplaintText'),
  //         "status": "CLOSED"
  //         }
  //     }).unwrap()
  //       .then(() => {
  //         setSuccessText("Запрос успешно отправлен");
  //       })
  //       .catch((error) => {
  //         setErrorText(error.data.message);
  //       })
  //       .finally(() => {
  //           setTimeout(() => {
  //             setErrorText('')
  //           }, 3000)
  //           setTimeout(() => {
  //             setSuccessText('')
  //           }, 3000)
  //         }
  //       )
  //   }
  // };


const handleGoToCorrect = () => {
  navigate(`/seller/add-card/${id}` )
}

  const handleGoToDelete = () => {
    dispatch(popupState(true));
    dispatch(setIsDelete(true));
    dispatch(productId(id || ''))
  }

  return (
    <section className={styles.sellerComplaints}>
      <h2 className={styles.sellerComplaints__header}>Замечания к карточке</h2>
      <div className={styles.sellerComplaints__textWrapper}>
        <p className={styles.sellerComplaints__text}></p>
      </div>
      <div className={styles.sellerComplaints__buttonsContainer}
      >
        {/*<div className={styles.sellerComplaints__errorWrapper}>*/}
        {/*  { errorText ? (<span className={styles.sellerComplaints__error}>{errorText}</span>) : (*/}
        {/*    <span className={styles.sellerComplaints__success}>{successText}</span>)}*/}
        {/*</div>*/}
        <div className={styles.sellerComplaints__buttonsWrapper}>
          <Button
            width='255px'
            height='55px'
            buttonType='minorPrimary'
            type='button'
            onClick={handleGoToCorrect}
            >Редактировать</Button>
            <Button
              width='255px'
              height='55px'
              buttonType='minorSecondary'
              type='button'
              onClick={handleGoToDelete}
            >Удалить</Button>
        </div>
      </div>
    </section>
  );
};

export default SellerComplaintsForm;
