import { FC, useEffect, useState} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG, VALIDATION_SETTINGS, NAME_VALIDATION_CONFIG, PHONE_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import {  ISignUpFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { Button } from '../../UI/Button/Button';
import { checkBoxState } from '../../UI/ToggleButton/ToggleButtonSlice';
import { signUpUser } from '../../services/redux/slices/user/user';
import { ISignUpData } from '../../UI/Popup/PopupTypes';
import { useAppDispatch } from '../../services/redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';


export const PopupForReg: FC = () => {
	
	const dispatch = useAppDispatch();
	const MyRole = useSelector((state: RootState) => state.chooseRole.title);
	const roleForReg = MyRole==='Я покупатель'? 'BUYER' : (MyRole==='Я продавец'? 'SELLER': null)
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isDirty, isValid },
		getValues,
	} = useForm<ISignUpFields>({ mode: 'onChange'});

	useEffect(() => {
		reset();
	}, []);
	function handleExitClick(){
		dispatch(checkBoxState(false))
	}
	const onSubmitResData: SubmitHandler<ISignUpFields> = () => {
		const {email, name, password, confirmPassword, phone} = getValues();
		dispatch(signUpUser({email, name, password, confirmPassword, role: roleForReg, phone: phone? phone.slice(1): ''} as ISignUpData))
			.unwrap()
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Popup>
			<form className={styles.form} onSubmit={handleSubmit(onSubmitResData)}>
				<Input
					inputType={InputTypes.name}
					labelText='Ваше имя'
					validation={{
						...register('name', NAME_VALIDATION_CONFIG),
					}}
					error={errors?.name?.message}
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
					inputType={InputTypes.phone}
					labelText="Телефон"
					validation={{ ...register('phone', PHONE_VALIDATION_CONFIG) }}
					error={errors?.phone?.message}
				/>
				<Input
					inputType={InputTypes.password}
					labelText="Придумайте пароль"
					showPasswordButton={true}
					validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
					error={errors?.password?.message}
				/>
				<Input
					inputType={InputTypes.confirmPassword}
					labelText={'Повторите пароль'}
					showPasswordButton={true}
					validation={{
						...register('confirmPassword', {
							validate: (value) =>
							value === watch('password') ||
							VALIDATION_SETTINGS.password.messages.noMatch,
						}),
					}}
					error={errors?.confirmPassword?.message}
				/>
				<div className={styles.checkboxcontainer}>
					<input className={styles.checkboxcontainer__input}  id='agreement' {...register("remember")} type="checkbox" value="remember"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Запомнить меня</label>
				</div>
				<div className={styles.checkboxcontainer}>
					<input id='agreement' className={styles.checkboxcontainer__input} {...register("agree", { required: true })} type="checkbox" value="agree"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Я соглашаюсь с политикой обработки персональных данных</label>
				</div>				
				<div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Зарегистрироваться</Button>
					<Button onClick={handleExitClick} mode='secondary' type='button'>Отмена</Button>
				</div>
			</form>
		</Popup>
	);
};
