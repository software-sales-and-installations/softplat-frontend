import { FC, useState } from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import {
  VALIDATION_SETTINGS,
  PASSWORD_VALIDATION_CONFIG,
} from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpFields } from '../../UI/Popup/PopupTypes';
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
    watch,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<ISignUpFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IShippingFields> = data => {
    console.log(data);
    // reset();
  };

  return (
    <form
      className={styles.personalSettingsPassword}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.personalSettingsPassword__inputs}>
        <Input
          inputType={InputTypes.password}
          labelText="Старый пароль"
          showPasswordButton={true}
          validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
          error={errors?.password?.message}
        />
        <Input
          inputType={InputTypes.confirmPassword}
          labelText={'Новый пароль'}
          showPasswordButton={true}
          validation={{
            ...register('confirmPassword', {
              validate: value =>
                value === watch('password') ||
                VALIDATION_SETTINGS.password.messages.noMatch,
            }),
          }}
          error={errors?.confirmPassword?.message}
        />
        <Input
          inputType={InputTypes.confirmPassword}
          labelText={'Повторите пароль'}
          showPasswordButton={true}
          validation={{
            ...register('confirmPassword', {
              validate: value =>
                value === watch('password') ||
                VALIDATION_SETTINGS.password.messages.noMatch,
            }),
          }}
          error={errors?.confirmPassword?.message}
        />
      </div>
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
