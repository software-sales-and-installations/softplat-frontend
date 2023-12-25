// import { useRef, useState } from 'react';
import Form from '../../../UIStorybook/Form/Form.tsx';
import styles from './ProductModerationForm.module.scss';
import { InputWrapper } from '../../../UIStorybook/InputWrapper/InputWrapper.tsx';
import { Textarea } from '../../../UIStorybook/Textarea/Textarea.tsx';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useProductModerateMutation } from '../../../utils/api/userProductApi.tsx';
import { useParams } from 'react-router-dom';

const ProductModerationForm = () => {
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

  const handleSubmitModeration = () => {
    productModerate({productId: id, status: status, body: {
      "moderationText": getValues('moderationText')
      } }).unwrap()
      .then(() => {
        setSuccessText("Запрос успешно отправлен");
        reset();
      })
      .catch((error) => {
         setErrorText(error.data.message);
      })
      .finally(() => {
         setTimeout(() => {setErrorText('')}, 3000)
          setTimeout(() => {setSuccessText('')}, 3000)
        }
      )
  };

  return (
<Form
  extClassName={styles.moderationForm}
      name='productModeration'
      formType='twoButtons'
      buttonType='minorPrimary'
      buttonText='Одобрить'
      secondButtonText='Отклонить'
      onClick={() => {setStatus('PUBLISHED')}}
      onSecondaryClick={() => {setStatus('REJECTED')}}
      width='255px'
      height='55px'
      onSubmit={handleSubmit(handleSubmitModeration)}
      disabled={!isValid}
      errorText={errorText}
      successText={successText}
>
  <InputWrapper
    inputId='moderationText'
    labelText='Замечания к доработке'
    errorText={errors?.moderation?.message?.toString()}>
    <Textarea
      id='moderationText'
      register={register}
      rows={11}
      cols={48}
      options='false'
      name='moderation'
    />
  </InputWrapper>
</Form>
  );
};

export default ProductModerationForm;
