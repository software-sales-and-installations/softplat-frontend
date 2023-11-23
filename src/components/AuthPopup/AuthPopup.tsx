import { FC} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { EMAIL_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG } from '../../utils/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignInFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';
import { useAppDispatch } from '../../services/redux/store';
import { signInUser } from '../../services/redux/slices/user/user';
import { popupState } from '../../UI/Popup/PopupSlice';
import { Button } from '../../UI/Button/Button';
import { setUser } from '../../services/redux/slices/user/user';
import { ISignInData } from '../../UI/Popup/PopupTypes';

export const PopupForAuth: FC = () => {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
		getValues,
	} = useForm<ISignInFields>({ mode: 'onChange' });

	const onSubmitResData: SubmitHandler<ISignInFields> = () => {
		const formValue = getValues();
		dispatch(signInUser(formValue as ISignInData))

			.unwrap()
			.then((res)=>{
				console.log(res)
				dispatch(setUser({ email: res.email, token: res.token }));
				dispatch(popupState(false))
				reset
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function handlePasswordPopup(){
		dispatch(chooseRoleState('Забыли пароль?'))
		
	}

	return (
		<Popup>
			<form className={styles.form} onSubmit={handleSubmit(onSubmitResData)}>
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
				<div className={styles.checkboxcontainer}>
					<input className={styles.checkboxcontainer__input} id='agreement' {...register("remember")} type="checkbox" value="remember"/>
					<label className={styles.checkboxcontainer__label} htmlFor='agreement'>Запомнить меня</label>
				</div>
				<div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Войти</Button>
					<Button type='button' mode='secondary' onClick={handlePasswordPopup}>Забыли пароль?</Button>
				</div>
			</form>
		</Popup>
	);
};
