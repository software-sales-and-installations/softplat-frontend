
import { FC, useEffect, useState, ChangeEvent } from 'react';
import { Popup } from '../Popup/Popup';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { TEXT_FOR_AUTH_CHECKBOX } from '../../utils/constants';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG, INN_VALIDATION_CONFIG, ORGNAME_VALIDATION_CONFIG, VALIDATION_SETTINGS, NAME_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import {  ISignUpFields} from '../AuthPopup/AuthPopupTypes';
import { IShippingFields } from '../AuthPopup/AuthPopupTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';

export const RegPopupSeller: FC = () => {
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
	useEffect(() => {
		reset();
		setAuthError(false);
	}, []);
	return (
		<Popup
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
			>

			
				
			<Input
						inputType={InputTypes.INN}
						labelText='ИНН'
						validation={{
							...register('INN', INN_VALIDATION_CONFIG),
						}}
						error={errors?.INN?.message}
					/>
			 
					<Input
						inputType={InputTypes.orgName}
						labelText='Название организации'
						validation={{
							...register('orgName', ORGNAME_VALIDATION_CONFIG),
						}}
						error={errors?.orgName?.message}
					/>
				
            <Input
						inputType={InputTypes.email}
						labelText='e-mail'
						validation={{
							...register('email', EMAIL_VALIDATION_CONFIG),
						}}
						error={errors?.email?.message}
					/>

					<Input
						inputType={InputTypes.password}
						labelText="Придумайте пароль"
						// showPasswordButton={true}
						validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
						error={errors?.password?.message}
					/>
					<Input
								inputType={InputTypes.repeatPassword}
								labelText={'Повторите пароль'}
								validation={{
									...register('repeatPassword', {
										validate: (value) =>
											value === watch('password') ||
											VALIDATION_SETTINGS.password.messages.noMatch,
									}),
								}}
								error={errors?.repeatPassword?.message}
							/>
							

					{authError ? (
								<p className="auth__form-error auth__form-error_type_login">
									Почта уже зарегистрирована.
								</p>
							) : null}
	

			<ButtonForAuth isValid={isValid} title='Зарегистрироваться'/>
			</form>
		</Popup>
	);
};
