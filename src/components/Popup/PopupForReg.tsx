
import { FC, useEffect, useState } from 'react';
import { Popup } from './Popup';
import { ButtonForAuth } from '../UI/ButtonForAuth/ButtonForAuth';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { TEXT_FOR_AUTH_CHECKBOX } from '../../utils/constants';
import { Input } from '../UI/Input/Input';
import { InputTypes } from '../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG, INN_VALIDATION_CONFIG, ORGNAME_VALIDATION_CONFIG, VALIDATION_SETTINGS } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInData, ISignInFields, ISignUpFields } from './PopupForAuthTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { IShippingFields } from './PopupForAuthTypes';
import { openRegisterPopup } from './RegSlise';
import { ToggleButton } from '../UI/ToggleButton/ToggleButton';


// interface IPopupForAuth {
// 	isOpened: boolean;
// 	// setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const PopupForReg: FC = ({
	// isOpened,
	// setIsOpened,
}) => {
	const [authError, setAuthError] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ISignUpFields>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<IShippingFields> = (data) => {
		console.log(data);
		reset();
	};

	const dispatch = useDispatch();
	const openedRegPopup = useSelector(
		(state: RootState) => state.registerPopup.value
	);

	// useEffect(() => {
	// 	reset();
	// 	setAuthError(false);
	// }, []);
	return (
		<Popup
		setIsOpened={openedRegPopup}
		closePopup={(param: boolean) => dispatch(openRegisterPopup(param))}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
			>
            <ToggleButton/>
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
						showPasswordButton={true}
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
					{/* {TEXT_FOR_AUTH_CHECKBOX.map((i)=>{
				return (
				<Checkbox label={i.text} key={i.id} selected={false}/>
				)
			})} */}
			<ButtonForAuth isValid={isValid} title='Зарегистрироваться'/>
			</form>
		</Popup>
	);
};
