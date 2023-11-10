
import { FC, useState } from 'react';
import { Popup } from '../Popup/Popup';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInFields } from './AuthPopupTypes';
import { IShippingFields } from './AuthPopupTypes';

export const PopupForAuth: FC = () => {
	const [authError, setAuthError] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ISignInFields>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<IShippingFields> = (data) => {
		console.log(data);
		reset();
	};
	return (
		<Popup>
			<form onSubmit={handleSubmit(onSubmit)}>
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
						labelText="Пароль"
						showPasswordButton={true}
						validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
						error={errors?.password?.message}
					/>
					{authError ? (
						<p>
							Неверный логин или пароль.
						</p>
					) : null}
				<ButtonForAuth isValid={isValid} itsLoginPopup={true} title='Войти'/>
			</form>
		</Popup>
	);
};
