import {FC} from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import {
  VALIDATION_SETTINGS,
  PASSWORD_VALIDATION_CONFIG,
} from '../../utils/constants';
import { useForm } from 'react-hook-form';
import styles from './PasswordSettings.module.scss';
import { Button } from '../../UI/Button/Button';
import { ISettingPassword } from './PasswordSettingsTypes';
import { useAuthChangePasswordMutation } from '../../utils/api/authApi';

const PasswordSettings: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors,  isValid },
  } = useForm<ISettingPassword>({ mode: 'onChange' });

  const {password, confirmPassword}= getValues();
  const [authChangePass, {
    // isFetching, isLoading, isError
  }] = useAuthChangePasswordMutation();
  const handleSubmitChangePass = () => {
    authChangePass({password, confirmPassword, email:localStorage.getItem('email')}).unwrap()
      .then((userData) => {
        console.log(userData)
    })
      .catch((error) => {
      console.log(error);
    })
  .finally()
  };
  function handleResetClick(){
    reset();
  }
  return (
    <form
      className={styles.personalSettingsPassword}
      onSubmit={handleSubmit(handleSubmitChangePass)}
    >
        <Input
          inputType={InputTypes.oldpassword}
          labelText="Текущий пароль"
          showPasswordButton={true}
          validation={{ ...register('oldpassword', PASSWORD_VALIDATION_CONFIG) }}
          error={errors?.oldpassword?.message}
        />
        <Input
          inputType={InputTypes.password}
          labelText={'Новый пароль'}
          showPasswordButton={true}
          validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
          error={errors?.password?.message}
        />
        <Input
					inputType={InputTypes.confirmPassword}
					labelText={'Повторите пароль'}
					showPasswordButton={true}
					validation={{
						...register('confirmPassword', {
							validate: (value) =>
							value === watch('password') ||
							VALIDATION_SETTINGS.password.messages.noMatch,
						}),
					}}
					error={errors?.confirmPassword?.message}
				/>
      <div className={styles.personalSettingsPassword__btncontainer}>
        <Button isDisabled={!isValid} type='submit' mode="primary">
          Сохранить
        </Button>
        <Button onClick={handleResetClick} type="button" mode="secondary">
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default PasswordSettings;
