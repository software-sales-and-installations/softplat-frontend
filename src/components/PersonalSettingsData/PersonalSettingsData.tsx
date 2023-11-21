import { FC, useState } from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInFields } from '../../UI/Popup/PopupTypes';
import { IShippingFields } from '../../UI/Popup/PopupTypes';
import styles from './PersonalSettingsData.module.scss';
import { Button } from '../../UI/Button/Button';

const PersonalSettingsData: FC = () => {
  const [authError, setAuthError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<ISignInFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IShippingFields> = data => {
    console.log(data);
    // reset();
  };

  return (
    <form
      className={styles.personalSettingsData}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input inputType={InputTypes.personName} labelText="Ваше имя" />
      <Input
        inputType={InputTypes.email}
        labelText="e-mail"
        validation={{
          ...register('email', EMAIL_VALIDATION_CONFIG),
        }}
        error={errors?.email?.message}
      />
      <Input labelText="Телефон" inputType={InputTypes.telephone} />
      {authError ? <p>Неверный логин или пароль.</p> : null}
      <div className={styles.personalSettingsData__btncontainer}>
        <Button isDisabled={!isValid} mode="primary">
          Сохранить
        </Button>
        <Button type="button" mode="secondary">
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default PersonalSettingsData;
