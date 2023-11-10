
import { FC, useEffect, useState} from 'react';
import { Popup } from '../Popup/Popup';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG, INN_VALIDATION_CONFIG, ORGNAME_VALIDATION_CONFIG, VALIDATION_SETTINGS, NAME_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import {  ISignUpFields } from '../AuthPopup/AuthPopupTypes';
import { IShippingFields } from '../AuthPopup/AuthPopupTypes';
import styles from '../Popup/Popup.module.scss';

export const RegPopupBuyer: FC = () => {
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
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Input
						inputType={InputTypes.personName}
						labelText='Ваше имя'
						validation={{
							...register('personName', NAME_VALIDATION_CONFIG),
						}}
						error={errors?.personName?.message}
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
