
import { FC, useEffect, useState } from 'react';
import { Popup } from '../Popup/Popup';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { TEXT_FOR_AUTH_CHECKBOX } from '../../utils/constants';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInData, ISignInFields } from './PopupForAuthTypes';
import { IShippingFields } from './PopupForAuthTypes';
import { ToggleButton } from '../UI/ToggleButton/ToggleButton';


// interface IPopupForAuth {
// 	isOpened: boolean;
// 	// setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const PopupForAuth: FC = ({
	// isOpened,
	// setIsOpened,
}) => {
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



	// useEffect(() => {
	// 	reset();
	// 	setAuthError(false);
	// }, []);
	return (
		<Popup
		// setIsOpened={openedLoginPopup}
		// closePopup={(param: boolean) => dispatch(openLoginPopup(param))}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
			>
			<ToggleButton itsLoginPopup={true}/>
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
					{/* {TEXT_FOR_AUTH_CHECKBOX.map((i)=>{
				return (
				<Checkbox label={i.text} key={i.id} selected={false}/>
				)
			})} */}
			<ButtonForAuth isValid={isValid} itsLoginPopup={true} title='Войти'/>
			</form>
		</Popup>
	);
};
