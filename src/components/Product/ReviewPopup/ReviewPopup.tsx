import styles from './ReviewPopup.module.scss'
import Form from '../../../UIStorybook/Form/Form.tsx';
import { Textarea } from '../../../UIStorybook/Textarea/Textarea.tsx';
import { InputWrapper } from '../../../UIStorybook/InputWrapper/InputWrapper.tsx';
import { Checkbox } from '../../../UIStorybook/Checkbox/Checkbox.tsx';
import { Popup } from '../../../UI/Popup/Popup.tsx';

const ReviewPopup = () => {
  return (
    <Popup>
    <div className={styles.reviewPopup}>
<h1 className={styles.reviewPopup__header}>Оставьте отзыв о покупке</h1>
   <h2 className={styles.reviewPopup__subtitle}>Название ПО</h2>
      <Form name='reviewForm' formType='register' buttonType='primary' width= '255px' height='55px' buttonText='Отправить отзыв' onSubmit={() => console.log('test review')}>
      <p className={styles.reviewPopup__stars}>*****</p>
        <InputWrapper inputId='review' labelText='Комментарий к оценке'>
          <Textarea rows={3} cols={35}></Textarea>
        </InputWrapper>
        <Checkbox extClassName={styles.reviewPopup__checkbox} onCheck={() => console.log('test checkbox')} label='Пожаловаться на товар'></Checkbox>
      </Form>
    </div>
    </Popup>
  );
};

export default ReviewPopup;
