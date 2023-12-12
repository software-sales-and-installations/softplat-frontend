import styles from './PersonalSettings.module.scss';
import { InputTypes } from '../../UI/Input/InputTypes';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { ISettingPersonalData } from './PersonalSettingTypes';
import { PERSONALNAME_VALIDATION_CONFIG,
        PERSONALEMAIL_VALIDATION_CONFIG,
        PERSONALPHONE_VALIDATION_CONFIG
} from '../../utils/constants';
import { Button } from '../../UI/Button/Button';
import { useEffect, useState } from 'react';
import { useBuyerInfoQuery } from '../../utils/api/buyerApi';

const PersonalSettings: React.FC = () => {
	const userId = localStorage.getItem('userId')
	
  const {
    register,
    handleSubmit,
    watch,
    getValues,
	setValue,
    formState: { errors,  isValid },
  } = useForm<ISettingPersonalData>({ mode: 'onChange' });
  function handleSubmitUpdateData(){
    console.log(getValues())
  }

const {data} = useBuyerInfoQuery(userId)

	setValue('name', data.name)



  return (
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitUpdateData)}>
				<Input
					inputType={InputTypes.name}
					labelText='Ваше имя'
					validation={{
						...register('name', PERSONALNAME_VALIDATION_CONFIG),
					}}
					error={errors?.name?.message}
				/>
        <Input
					inputType={InputTypes.email}
					labelText='e-mail'
					validation={{
						...register('email', PERSONALEMAIL_VALIDATION_CONFIG),
					}}
					error={errors?.email?.message}
				/>
        <div className={styles.containerForInput}>
					<Input
						inputType={InputTypes.phone}
						labelText="Телефон"
						validation={{ ...register('phone', PERSONALPHONE_VALIDATION_CONFIG) }}
						error={errors?.phone?.message}
					/>
				</div>
        <div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Сохранить</Button>
				</div>
        </form>

  );
};

export default PersonalSettings;
