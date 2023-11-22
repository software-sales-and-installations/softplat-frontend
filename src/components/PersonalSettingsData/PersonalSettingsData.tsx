import { FC, useState } from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import {
  EMAIL_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
  NAME_VALIDATION_CONFIG,
} from '../../utils/constants';
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
      <div className={styles.personalSettingsData__inputs}>
        <Input
          inputType={InputTypes.name}
          labelText="Ваше имя"
          validation={{
            ...register('name', NAME_VALIDATION_CONFIG),
          }}
          error={errors?.name?.message}
        />
        <Input
          inputType={InputTypes.email}
          labelText="e-mail"
          validation={{
            ...register('email', EMAIL_VALIDATION_CONFIG),
          }}
          error={errors?.email?.message}
        />
        <Input
          inputType={InputTypes.phone}
          labelText="Телефон"
          validation={{ ...register('phone', PHONE_VALIDATION_CONFIG) }}
          defaultValue={'+7'}
          error={errors?.phone?.message}
        />
        {authError ? <p>Неверный логин или пароль.</p> : null}
      </div>
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
