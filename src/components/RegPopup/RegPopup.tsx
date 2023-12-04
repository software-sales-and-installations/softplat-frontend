import { FC, useEffect, useState} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG, VALIDATION_SETTINGS, NAME_VALIDATION_CONFIG, PHONE_VALIDATION_CONFIG } from '../../utils/constants';
import {useForm } from 'react-hook-form';
import {  ISignUpFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { Button } from '../../UI/Button/Button';
import { checkBoxState } from '../../UI/ToggleButton/ToggleButtonSlice';
import { useAppDispatch } from '../../services/redux/store';
import { useAuthLoginMutation, useAuthRegisterMutation } from '../../utils/api/authApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { setUser } from '../../services/redux/slices/user/user';
import { signout } from '../SignOutPopup/SignOutPopupSlice';


export const PopupForReg: FC = () => {
	const [errorStatus, setErrorStatus] = useState(0);
	const [textError, setTextError] = useState('')
	const dispatch = useAppDispatch();
	const MyRole = useSelector((state: RootState) => state.chooseRole.title);
	const roleForReg = MyRole==='Я покупатель'? 'BUYER' : (MyRole==='Я продавец'? 'SELLER': null)
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isValid },
		getValues,
	} = useForm<ISignUpFields>({ mode: 'onChange'});

	useEffect(() => {
		reset();
	}, []);
	function handleExitClick(){
		dispatch(checkBoxState(false))
	}

	const {email, name, password, confirmPassword, phone} = getValues();
	  const [authLogin, {
		// isFetching, isLoading, isError
	  }] = useAuthLoginMutation();
	  const [authRegister, {
		// isFetching, isLoading, isError
	  }] = useAuthRegisterMutation();
	  const handleSubmitRegister = () => {
	   authRegister({email, name, password, confirmPassword, role: roleForReg, phone: phone? phone.slice(2): ''}).unwrap()
		 .then((res) => {
		  authLogin({
			confirmPassword: confirmPassword,
			email: res.email,
			password:password,
		  }).unwrap()
			.then((userData) => {
		  localStorage.setItem('token', userData.token);
		  localStorage.setItem('role', userData.role);
		  localStorage.setItem('email', userData.email);
		  localStorage.setItem('userId', userData.id)
		  console.log(userData)
		  dispatch(popupState(false))
		  dispatch(setUser(userData));
		  dispatch(signout(false))
		  reset;
		})
			.catch((error) => {
			  console.log(error);
			})
		 })
		 .catch((error) => {
			setErrorStatus(error.status)
		  	console.log(error);
		})
	.finally()
	  };
	  useEffect(()=>{
		if(errorStatus===400){
			setTextError('Некорректно заполнены поля')
		}
		if(errorStatus===409){
			setTextError('Такой пользователь уже существует')
		}
	}, [errorStatus])
	return (
		<Popup>
			<form className={styles.form} onSubmit={handleSubmit(handleSubmitRegister)}>
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
					defaultValue={'+7'}
					error={errors?.phone?.message}
				/>
				<Input
					inputType={InputTypes.password}
					labelText="Придумайте пароль"
					showPasswordButton={true}
					validation={{ ...register('password', PASSWORD_VALIDATION_CONFIG) }}
					error={errors?.password?.message}
					helpText='Пароль может содержать буквы, цифры и знаки препинания'
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
					<input className={styles.checkboxcontainer__input}  id='remember' {...register("remember")} type="checkbox" value="remember"/>
					<label className={styles.checkboxcontainer__label} htmlFor='remember'>Запомнить меня</label>
				</div>
				<div className={styles.checkboxcontainer}>
					<input id='agreement' className={styles.checkboxcontainer__input} {...register("agree", { required: true })} type="checkbox" value="agree"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Я соглашаюсь с политикой обработки персональных данных</label>
				</div>
				<div className={styles.errorContainer}>
					<p className={styles.errorContainer__error}>{textError}</p>
				</div>		
				<div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Зарегистрироваться</Button>
					<Button onClick={handleExitClick} mode='secondary' type='button'>Отмена</Button>
				</div>
			</form>
		</Popup>
	);
};
