import { FC, useEffect, useState} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG, VALIDATION_SETTINGS, NAME_VALIDATION_CONFIG, TELEPHONE_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import {  ISignUpFields } from '../../UI/Popup/PopupTypes';
import { IShippingFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { Button } from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { checkBoxState } from '../../UI/ToggleButton/ToggleButtonSlice';

export const PopupForReg: FC = () => {
	const dispatch = useDispatch();
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
	function handleExitClick(){
		dispatch(checkBoxState(false))
	}
	return (
		<Popup>
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
					inputType={InputTypes.telephone}
					labelText="Телефон"
					validation={{ ...register('telephone', TELEPHONE_VALIDATION_CONFIG) }}
					error={errors?.telephone?.message}
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
					showPasswordButton={true}
					validation={{
						...register('repeatPassword', {
							validate: (value) =>
							value === watch('password') ||
							VALIDATION_SETTINGS.password.messages.noMatch,
						}),
					}}
					error={errors?.repeatPassword?.message}
				/>
				<div className={styles.checkboxcontainer}>
					<input className={styles.checkboxcontainer__input}  id='agreement' {...register("remember")} type="checkbox" value="remember"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Запомнить меня</label>
				</div>
				<div className={styles.checkboxcontainer}>
					<input id='agreement' className={styles.checkboxcontainer__input} {...register("agree", { required: true })} type="checkbox" value="agree"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Я соглашаюсь с политикой обработки персональных данных</label>
				</div>				
				{authError ? (
					<p className="auth__form-error auth__form-error_type_login">
						Почта уже зарегистрирована.
					</p>
				) : null}
				<div className={styles.btncontainer}>
					<Button isDisabled={!isValid} mode='primary'>Зарегистрироваться</Button>
					<Button onClick={handleExitClick} mode='secondary' type='button'>Отмена</Button>
				</div>
			</form>
		</Popup>
	);
};
