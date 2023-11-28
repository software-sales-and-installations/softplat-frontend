
import {FC} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { IPayFields } from '../../UI/Popup/PopupTypes';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { CARDNUMBER_VALIDATION_CONFIG } from '../../utils/constants';
import styles from '../../UI/Popup/Popup.module.scss';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import InputMask from "react-input-mask";
import { useRef } from 'react';

export const PayPopup: FC = ()=>{
    const popupState = useSelector((state: RootState) => state.popupOpen.setIsOpened);
    const inputRef = useRef(null)
    const [textSubmit, setTextSubmit] = useState('')
    const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
		getValues,
	} = useForm<IPayFields>({ mode: 'onChange' });

    const onSubmitResData: SubmitHandler<IPayFields> = () => {
        const formValue = getValues();
        console.log(formValue)
        setTextSubmit('Простите, мы еще не научились это делать. А пока Вы можете перечислить эти деньги в фонд помощи дикой природы')
    }
    useEffect(()=>{
        setTextSubmit('')
        reset();
    },[popupState])
    return (
        <Popup>
            <h2 className={styles.popup__title}>Введите данные карты</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmitResData)}>
            <InputMask
  // mask options
  mask={"99.999.999/9999-99"}
  
  {...register("cardNumber", { required: true })}
/>
            {/* <Input
					inputType={InputTypes.cardNumber}
					labelText='Номер карты'
					validation={{
						...register('cardNumber', { setValueAs: v=>(v.split(/(\d{4})/).filter((item: any) => item !== '').join(' '))}),
					}}
					error={errors?.cardNumber?.message}

				/> */}
                <div className={styles.errorContainer}>
					<p className={styles.errorContainer__error}>{textSubmit}</p>
				</div>	
                <Button isDisabled={!isValid} type='submit' mode='primary'>Оплатить заказ</Button>
            </form>
        </Popup>
    )
}
