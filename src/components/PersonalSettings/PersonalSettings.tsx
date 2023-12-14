import styles from './PersonalSettings.module.scss';
import { InputTypes } from '../../UI/Input/InputTypes';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { ISettingPersonalData } from './PersonalSettingTypes';
import { PERSONALNAME_VALIDATION_CONFIG,
        PERSONALPHONE_VALIDATION_CONFIG,
		VALIDATION_SETTINGS
} from '../../utils/constants';
import { Button } from '../../UI/Button/Button';
import { useEffect, useState } from 'react';
import { useBuyerInfoQuery } from '../../utils/api/buyerApi';
import { useBuyerChangeInfoMutation } from '../../utils/api/buyerApi';

const PersonalSettings: React.FC = () => {
	const userId = localStorage.getItem('userId')
	const {data: buyerInfo = []} = useBuyerInfoQuery(userId)
	const [isNameNew, setIsNameNew] = useState(false)
	const [isPhoneNew, setIsPhoneNew] = useState(false)
	const [userData, setUserData] = useState(buyerInfo)

  const {
    register,
    handleSubmit,
    getValues,
	setValue,
    formState: { errors,  isValid },
  } = useForm<ISettingPersonalData>({ mode: 'onChange' });

  function setNewData(){
	const buyerNewInfo = {
		name: (getValues().name!=='' && getValues().name!==buyerInfo.name)? getValues().name: null,
		phone: (getValues().phone!==buyerInfo.phone)?getValues().phone: null}
		return buyerNewInfo
}

  const [buyerChangeInfo, {
	    // isFetching, isLoading, isError
	  }] = useBuyerChangeInfoMutation();
	  const handleBuyerChangeInfo = () => {
	  buyerChangeInfo(setNewData()).unwrap()
	    .then((userData) => {
	      console.log(userData)
		  setUserData(userData)
	    })
	    .catch((error) => {
	      console.log(error);
	    })
	    .finally()
	};
  useEffect(() => {
    setValue('name', userData?.name || buyerInfo?.name)
	setValue('email', buyerInfo?.email)
	setValue('phone', userData?.phone || buyerInfo?.phone)
	setIsNameNew(false)
	setIsPhoneNew(false)
  }, [userData, buyerInfo])

  return (
        <form className={styles.form} onSubmit={handleSubmit(handleBuyerChangeInfo)}>
				<Input
					inputType={InputTypes.name}
					labelText='Ваше имя'
					validation={{
						...register('name', {
							...PERSONALNAME_VALIDATION_CONFIG,
							validate: 
							value => {
								if (value !== buyerInfo.name  && value!=='') {
									setIsNameNew(true)
                  					return 
								}
								else {
									setIsNameNew(false)
									if(!isPhoneNew){
										return VALIDATION_SETTINGS.name.messages.sameAsNow
									}
				 			}  
            			}
					})}}
					error={errors?.name?.message}
					typeError='dataError'
				/>
        		<Input
					inputType={InputTypes.email}
					labelText='E-mail'
					validation={{
						...register('email',{disabled: true}),
					}}
					error={errors?.email?.message}
					typeError='dataError'
				/>
				<Input
					inputType={InputTypes.phone}
					labelText="Телефон"
					validation={{ ...register('phone', {
						...PERSONALPHONE_VALIDATION_CONFIG,
						validate: 
						value => {
							if (value !== buyerInfo.phone ) {
								setIsPhoneNew(true)
                  				return 
							}
							else {
								setIsPhoneNew(false)
								if( !isNameNew){
									return VALIDATION_SETTINGS.phone.messages.sameAsNow
								}
				 			}  
            			}
					})}}
					error={errors?.phone?.message}
					/>
        		<div className={styles.btncontainer}>
					<Button isDisabled={!((isNameNew ||isPhoneNew)&&isValid)} type='submit' mode='primary'>Сохранить</Button>
				</div>
        </form>

  );
};

export default PersonalSettings;
