import { FC, useState } from 'react';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import {  ISignUpFields, ISignUpData } from '../AuthPopup/PopupForAuthTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IShippingFields } from '../AuthPopup/PopupForAuthTypes';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { EMAIL_VALIDATION_CONFIG } from '../../utils/constants';
import { Popup } from '../Popup/Popup';

export const RecoverPasswordPopup : FC =()=>{
    const [authError, setAuthError] = useState(false);
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
