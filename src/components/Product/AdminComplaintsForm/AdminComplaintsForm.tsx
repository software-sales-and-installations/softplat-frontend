// import { useRef, useState } from 'react';
import Form from '../../../UIStorybook/Form/Form.tsx';
import { InputWrapper } from '../../../UIStorybook/InputWrapper/InputWrapper.tsx';
import { Textarea } from '../../../UIStorybook/Textarea/Textarea.tsx';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useProductModerateMutation } from '../../../utils/api/userProductApi.tsx';
import { useParams } from 'react-router-dom';
import { Input } from '../../../UIStorybook/Input/Input.tsx';

import styles from './AdminComplaintsForm.module.scss';
import { useComplaintModerationMutation } from '../../../utils/api/complaintApi.tsx';


const AdminComplaintsForm = () => {
  const { id } = useParams();
  const [errorText, setErrorText] = useState('')
  const [successText, setSuccessText] = useState('')
  const [status, setStatus] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid },
    getValues,
  } = useForm(
    { mode: 'onChange' }
  );

  const [productModerate] = useProductModerateMutation();
  const [complaintModerate] = useComplaintModerationMutation();


  const handleSubmitModeration = () => {
    if (status === 'REJECTED') {
      productModerate({
        productId: id, status: status, body: {
          "adminComplaintText": getValues('adminComplaintText')
        }
      }).unwrap()
        .then(() => {
          setSuccessText("Запрос успешно отправлен");
          reset();
        })
        .catch((error) => {
          setErrorText(error.data.message);
        })
        .finally(() => {
            setTimeout(() => {
              setErrorText('')
            }, 3000)
            setTimeout(() => {
              setSuccessText('')
            }, 3000)
          }
        )
    } else if (status === '') {
      complaintModerate({
        complaintId: getValues('complaintId'), body: {
            "comment": getValues('adminComplaintText'),
          "status": "CLOSED"
          }
      }).unwrap()
        .then(() => {
          setSuccessText("Запрос успешно отправлен");
          reset();
        })
        .catch((error) => {
          setErrorText(error.data.message);
        })
        .finally(() => {
            setTimeout(() => {
              setErrorText('')
            }, 3000)
            setTimeout(() => {
              setSuccessText('')
            }, 3000)
          }
        )
    }
  };


  return (
<Form
  extClassName={styles.adminComplaintsForm}
      name='productModeration'
      formType='twoButtons'
      buttonType='minorPrimary'
      buttonText='Отправить на доработку'
      secondButtonText='Отклонить'
      onClick={() => {setStatus('')}}
      onSecondaryClick={() => {setStatus('REJECTED')}}
      width='255px'
      height='55px'
      onSubmit={handleSubmit(handleSubmitModeration)}
      disabled={!isValid}
      errorText={errorText}
      successText={successText}
>
  <InputWrapper
    inputId='complaintId'
    labelText='Id жалобы'
    errorText={errors?.complaintId?.message?.toString()}>
    <Input
      inputId='adminComplaintId'
      register={register}
      type='text'
      width='200px'
      height='40px'
      options={"Заполните это поле"}
      name='complaintId'
    />
  </InputWrapper>
  <InputWrapper
    inputId='moderationText'
    labelText='Замечания к доработке'
    errorText={errors?.adminComplaintText?.message?.toString()}>
    <Textarea
      id='adminComplaintText'
      register={register}
      rows={11}
      cols={48}
      options={"Заполните это поле"}
      name='adminComplaintText'
    />
  </InputWrapper>
</Form>
  );
};

export default AdminComplaintsForm;
