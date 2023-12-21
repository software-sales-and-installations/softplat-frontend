import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Form from '../../../UIStorybook/Form/Form.tsx';
import { Textarea } from '../../../UIStorybook/Textarea/Textarea.tsx';
import { InputWrapper } from '../../../UIStorybook/InputWrapper/InputWrapper.tsx';
import { Checkbox } from '../../../UIStorybook/Checkbox/Checkbox.tsx';
import Stars from '../Stars/Stars.tsx';

import { useUserComplaintMutation } from '../../../utils/api/complaintApi.tsx';
import { useUserCommentMutation } from '../../../utils/api/userCommentApi.tsx';

import { popupState } from '../../../UI/Popup/PopupSlice.tsx';
import { RootState, useAppDispatch, useAppSelector } from '../../../services/redux/store.ts';

import styles from './ReviewPopup.module.scss'

const ReviewPopup = () => {
  const [errorText, setErrorText] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const name = useAppSelector((state: RootState) => state.product.setName);
  const id = useAppSelector((state: RootState) => state.product.setId);

  console.log(id)

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid },
    getValues,
  } = useForm(
    { mode: 'onChange' }
  );

    const [userComplaint ] = useUserComplaintMutation();
    const [userComment] = useUserCommentMutation();

  const handleChecked = () => {
    setIsChecked(prev => !prev);
  }
  const handleSubmitReview = () => {
    if (isChecked) {
          userComplaint({productId: id, reason: 'PIRATED_SOFTWARE'}).unwrap()
            .then(() => {
              dispatch(popupState(false));
              reset()
      })
      .catch((error) => {
        setErrorText(error.data.message);
        setTimeout(() => {setErrorText('')}, 3000)
      })
    } else {
      userComment({productId: id, body: {
              "rating": getValues('star'),
              "text": getValues('review'),
            }}).unwrap()
      .then(() => {
        dispatch(popupState(false));
        reset()
      })
      .catch((error) => {
        setErrorText(error.data.message);
        setTimeout(() => {setErrorText('')}, 3000)
      })
  }
  }

  return (
    <div className={styles.reviewPopup}>
<h1 className={styles.reviewPopup__header}>Оставьте отзыв о покупке</h1>
   <h2 className={styles.reviewPopup__subtitle}>{name}</h2>
      <Form
        name='reviewForm'
        errorText={errorText}
        formType='register'
        buttonType='primary'
        width= '255px'
        height='55px'
        buttonText='Отправить отзыв'
        onSubmit={handleSubmit(handleSubmitReview)}
        disabled={!isValid}
      >
        <Stars register={register}/>
        <InputWrapper inputId='review' labelText='Комментарий к оценке' errorText={errors?.review?.message}>
          <Textarea
            extClassName={styles.reviewPopup__textarea}
            minLength={2}
            maxLength={600}
            rows={3}
            cols={35}
            placeholder='От 2 до 600 символов'
            register={register} />
        </InputWrapper>
        <Checkbox
          extClassName={styles.reviewPopup__checkbox}
          onCheck={handleChecked}
          label='Пожаловаться на товар'
        />
      </Form>
    </div>
  );
};

export default ReviewPopup;
