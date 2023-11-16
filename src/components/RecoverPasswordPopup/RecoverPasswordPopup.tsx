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
import { checkBoxState } from '../../UI/ToggleButton/ToggleButtonSlice';
import { Button } from '../../UI/Button/Button';
import classNames from 'classnames';

export const RecoverPasswordPopup : FC =()=>{
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
	const dispatch = useDispatch();
	function handleExitClick(){
		dispatch(checkBoxState(false))
	}
    return(
    <Popup>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				inputType={InputTypes.email}
				labelText="Электронная почта"
				validation={{
					...register('email', EMAIL_VALIDATION_CONFIG),
				}}
				error={errors?.email?.message?.toString()}
			/>
			<p className={styles.helpText}>Укажите ваш e-mail и мы отправим вам ссылку на сброс пароля</p>
			<div className={classNames(styles.btncontainer, styles.btncontainer_type_recoverpassword)}>
			   <Button type='submit' mode='primary' isDisabled={!isValid}>Отправить</Button>
			   <Button onClick={handleExitClick} mode='secondary' type='button'>Отмена</Button>
			</div>
		</form>
    </Popup>
    )
}
