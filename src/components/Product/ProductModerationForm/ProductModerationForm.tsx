import Form from '../../../UIStorybook/Form/Form.tsx';
import styles from './ProductModerationForm.module.scss';
import { InputWrapper } from '../../../UIStorybook/InputWrapper/InputWrapper.tsx';
import { Textarea } from '../../../UIStorybook/Textarea/Textarea.tsx';

const ProductModerationForm = () => {
  return (
<Form
  extClassName={styles.moderationForm}
  name='productModeration'
      formType='twoButtons'
      buttonType='minorPrimary'
      buttonText='Одобрить'
      secondButtonText='Отклонить'
      width='255px'
      height='55px'
      onSubmit={() => {}}
>
  <InputWrapper inputId='moderationText' labelText='Замечания к доработке'>
    <Textarea rows={11} cols={48}></Textarea>
  </InputWrapper>
</Form>
  );
};

export default ProductModerationForm;
