import { FC, useEffect, useState} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { ISignInFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { Button } from '../../UI/Button/Button';
import { setUser } from '../../services/redux/slices/user/user';
import { useAuthLoginMutation } from '../../utils/api/authApi';
import { signout } from '../SignOutPopup/SignOutPopupSlice';

export const PopupForAuth: FC = () => {
	const [authError, setAuthError] = useState(0)
	const [errorText, setErrorText] = useState('')
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
		getValues,
	} = useForm<ISignInFields>({ mode: 'onChange' });

	  const loginData = getValues();
	  const [authLogin, {
		// isFetching, isLoading, isError
	  }] = useAuthLoginMutation();

	  const handleSubmitLogin = () => {
		authLogin(loginData).unwrap()
		.then((userData) => {
		  localStorage.setItem('token', userData.token);
		  localStorage.setItem('role', userData.role);
		  localStorage.setItem('email', userData.email)
		  console.log(userData)
		  dispatch(popupState(false))
		  dispatch(setUser(userData));
		  dispatch(signout(false))
		  reset;
		})
		  .catch((error) => {
			setAuthError(error.originalStatus)
		  	console.log(error);
		})
		  .finally()
		};
	
	function handlePasswordPopup(){
		dispatch(chooseRoleState('Забыли пароль?'))
		
	}
	useEffect(()=>{
		if (authError===401){
			setErrorText('Неправильный email или пароль')
		}
		if(authError===400){
			setErrorText('Некорректно заполнены поля email или password')
		}
	}, [authError])
	useEffect(()=>{
		if (authError===401){
			setErrorText('Неправильный email или пароль')
		}
		if(authError===400){
			setErrorText('Некорректно заполнены поля email или password')
		}
	}, [authError])
	return (
		<Popup>
			<form className={styles.form} onSubmit={handleSubmit(handleSubmitLogin)}>
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
					helpText='Пароль может содержать буквы, цифры и знаки препинания'
				/>
				<div className={styles.checkboxcontainer}>
					<input className={styles.checkboxcontainer__input} id='agreement' {...register("remember")} type="checkbox" value="remember"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Запомнить меня</label>
				</div>
				<div className={styles.errorContainer}>
					<p className={styles.errorContainer__error}>{errorText}</p>
				</div>
				<div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Войти</Button>
					<Button type='button' mode='secondary' onClick={handlePasswordPopup}>Забыли пароль?</Button>
				</div>
			</form>
		</Popup>
	);
};
