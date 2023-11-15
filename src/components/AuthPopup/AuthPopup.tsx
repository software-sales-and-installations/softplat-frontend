import { FC, useState } from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { ButtonForAuth } from '../../UI/ButtonForAuth/ButtonForAuth';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInFields } from '../../UI/Popup/PopupTypes';
import { IShippingFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { Button } from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';

export const PopupForAuth: FC = () => {
	const dispatch = useDispatch();
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
		// reset();
	};
	function handlePasswordPopup(){
		console.log('kjh')
		dispatch(chooseRoleState('Забыли пароль?'))
		
	}

	return (
		<Popup>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
				<div className={styles.checkboxRemember}>
					<input className={styles.checkboxRemember__input} id='agreement' {...register("remember")} type="checkbox" value="remember"/>
					<label htmlFor='agreement'>Запомнить меня</label>
				</div>
				{authError ? (
					<p>
						Неверный логин или пароль.
					</p>
				) : null}
				<div className={styles.button__container}>
					<ButtonForAuth isValid={isValid} title='Войти'/>
					<Button type='button' mode='secondary' onClick={handlePasswordPopup}>Забыли пароль?</Button>
				</div>
			</form>
		</Popup>
	);
};
