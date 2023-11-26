import { FC } from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import {
  EMAIL_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
  NAME_VALIDATION_CONFIG,
} from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './PersonalSettingsData.module.scss';
import { Button } from '../../UI/Button/Button';
import { IEditProfileFields } from './PersonalSettingsTypes';

const PersonalSettingsData: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IEditProfileFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IEditProfileFields> = data => {
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
