import { FC} from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import {  ISignUpFields } from '../../UI/Popup/PopupTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IShippingFields } from '../../UI/Popup/PopupTypes';
import { EMAIL_VALIDATION_CONFIG } from '../../utils/constants';
import { Popup } from '../../UI/Popup/Popup';
import styles from '../../UI/Popup/Popup.module.scss';
import { useDispatch } from 'react-redux';
import { Button } from '../../UI/Button/Button';
import classNames from 'classnames';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';

export const RecoverPasswordPopup : FC =()=>{
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ISignUpFields>({ mode: 'onChange'});
    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
		console.log(data);
		reset;
	};
	const dispatch = useDispatch();
	function handleExitClick(){
		dispatch(chooseRoleState('Я покупатель'))
	}
    return(
    <Popup>
        <form className={classNames(styles.form, styles.form_type_recoverPassword)} onSubmit={handleSubmit(onSubmit)}>
			<Input
				inputType={InputTypes.email}
				labelText="E-mail"
				validation={{
					...register('email', EMAIL_VALIDATION_CONFIG),
				}}
				error={errors?.email?.message?.toString()}
				helpText='Мы отправим вам ссылку на сброс пароля'
			/>
			<div className={classNames(styles.btncontainer, styles.btncontainer_type_recoverpassword)}>
			   <Button type='submit' mode='primary' isDisabled={!isValid}>Отправить</Button>
			   <Button onClick={handleExitClick} mode='secondary' type='button'>Отмена</Button>
			</div>
		</form>
    </Popup>
    )
}
