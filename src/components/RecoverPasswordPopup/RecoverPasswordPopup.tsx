import { FC} from 'react';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import {  ISignUpFields } from '../UI/Popup/PopupTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IShippingFields } from '../UI/Popup/PopupTypes';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { EMAIL_VALIDATION_CONFIG } from '../../utils/constants';
import { Popup } from '../UI/Popup/Popup';
import styles from '../UI/Popup/Popup.module.scss';

export const RecoverPasswordPopup : FC =()=>{
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ISignUpFields>({ mode: 'onChange'});
    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
		console.log(data);
		reset;
	};
    return(
    <Popup>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				inputType={InputTypes.email}
				labelText="Электронная почта"
				validation={{
					...register('email', EMAIL_VALIDATION_CONFIG),
				}}
				error={errors?.email?.message?.toString()}
			/>
			<ButtonForAuth
				title={'Восстановить'}
				isValid={isValid}
			/>
		</form>
    </Popup>
    )
}
