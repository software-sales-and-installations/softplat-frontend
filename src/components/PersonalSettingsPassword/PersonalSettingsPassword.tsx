import { FC, useState } from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInFields } from '../../UI/Popup/PopupTypes';
import { IShippingFields } from '../../UI/Popup/PopupTypes';
import styles from './personalSettingsPassword.module.scss';
import { Button } from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';

const PersonalSettingsPassword: FC = () => {
  const dispatch = useDispatch();
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
  function handlePasswordPopup() {
    console.log('kjh');
    dispatch(chooseRoleState('Забыли пароль?'));
  }

  return (
    <form
      className={styles.personalSettingsPassword}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        inputType={InputTypes.password}
        labelText="Старый пароль"

        error={errors?.password?.message}
      />
      <Input
        inputType={InputTypes.password}
        labelText="Новый пароль"
        validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
        error={errors?.password?.message}
      />
      <Input
        inputType={InputTypes.password}
        labelText="Повторите пароль"
        validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
        error={errors?.password?.message}
      />
      {authError ? <p>Неверный логин или пароль.</p> : null}
      <div className={styles.personalSettingsPassword__btncontainer}>
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

export default PersonalSettingsPassword;
