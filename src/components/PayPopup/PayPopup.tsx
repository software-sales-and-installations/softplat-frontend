
import {FC} from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { useForm} from 'react-hook-form';
import { IPayFields } from '../../UI/Popup/PopupTypes';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { CARDNUMBER_VALIDATION_CONFIG, VALIDDATE_VALIDATION_CONFIG, CVV_VALIDATION_CONFIG, CARDNAME_VALIDATION_CONFIG } from '../../utils/constants';
import styles from '../../UI/Popup/Popup.module.scss';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import InputMask from "react-input-mask";
import classNames from 'classnames';
import { useAppSelector } from '../../services/redux/store';
import { useOrderMakeMutation } from '../../utils/api/buyerOrderApi';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';
import { isNotSuccessPay, isSuccessPay } from '../CartSummary/CartSummarySlice';

export const PayPopup: FC = ()=>{
    const dispatch = useDispatch();
    const popupState = useSelector((state: RootState) => state.popupOpen.setIsOpened);
    const NotSuccessPay = useSelector((state: RootState) => state.isNotSuccessPay.isNotSuccessPay);
    const isSuccess = useSelector((state: RootState) => state.isSuccessPay.isSuccessPay);
    const cartState = useAppSelector(store => store.cart);
    const checkedCartItems = cartState.items.filter(
        item => !cartState.uncheckedItemIds.includes(item.id)
      );
    const {
		register,
		reset,
		formState: { errors, isValid },
        setValue,
	} = useForm<IPayFields>({ mode: 'onChange' });
     //@ts-ignore
    const basketInfoQuery = useBuyerBasketInfoQuery();
    const [makeOrder] = useOrderMakeMutation();
    const handleClick = async () => {
        try {
          const basketPositionIds = checkedCartItems.map((item) => item.id);
          await makeOrder({ basketPositionIds });
          basketInfoQuery.refetch();
          dispatch(isSuccessPay(0))
        } catch (err) {
            dispatch(isNotSuccessPay('Что-то пошло не так'))
            console.error('Error creating order:', err);
        }
      };

    useEffect(()=>{
        reset();
        setValue('cardNumber', '', { shouldValidate: true })
        setValue('cvv', '', { shouldValidate: true })
        setValue('validDate', '', { shouldValidate: true })
    },[popupState])
    return (
        <Popup>
            <h2 className={styles.popup__title}>Введите данные карты</h2>
            <form className={styles.form}>
                <div className={styles.containerPayPopup}>
                    <label className={styles.containerPayPopup__label} htmlFor='cardNumber'>Номер карты</label>
                    <InputMask
                        className={styles.input__field}
                        id='cardNumber'
                        mask={"**** **** **** ****"}
                        maskChar={''}
                        {...register("cardNumber", CARDNUMBER_VALIDATION_CONFIG)}
                    />
                    <span className={styles.popup__carderror}>
                        {errors?.cardNumber && <p className={styles.popup__errorspan}>{errors?.cardNumber.message}</p>}
					</span>
                </div>
                <div className={styles.containerForDataCard}>
                    <div className={classNames(styles.containerPayPopup, styles.containerPayPopup_type_validData)}>
                    <label className={styles.containerPayPopup__label} htmlFor='validDate'>Срок действия</label>
                    <InputMask
                        className={styles.input__field}
                        id='validDate'
                        mask={"**/**"}
                        maskChar={''}
                        {...register("validDate", VALIDDATE_VALIDATION_CONFIG)}
                    />
                     <span className={styles.popup__carderror}>
                        {errors?.validDate && <p className={styles.popup__errorspan}>{errors?.validDate.message}</p>}
					</span>
                    </div>
                    <div className={classNames(styles.containerPayPopup, styles.containerPayPopup_type_validData)}>
                    <label className={styles.containerPayPopup__label} htmlFor='cvv'>CVV</label>
                    <InputMask
                        className={styles.input__field}
                        id='cvv'
                        mask={"***"}
                        maskChar={''}
                        {...register("cvv", CVV_VALIDATION_CONFIG)}
                    />
                    <span className={styles.popup__carderror}>
                        {errors?.cvv && <p className={styles.popup__errorspan}>{errors?.cvv.message}</p>}
					</span>
                    
                    </div>
                </div>
                <Input
					inputType={InputTypes.cardName}
					labelText="Держатель карты"
					validation={{ ...register('cardName', CARDNAME_VALIDATION_CONFIG) }}
					error={errors?.cardName?.message}
				/>
                <div className={styles.checkboxcontainer}>
					<input className={styles.checkboxcontainer__input}  id='remember' {...register("remember")} type="checkbox" value="remember"/>
					<label className={styles.checkboxcontainer__label} htmlFor='remember'>Запомнить карту</label>
				</div>
                <div>
                    <p className={styles.popup__errorspan}>{NotSuccessPay}</p>
                </div>
                <Button isDisabled={!isValid} onClick={handleClick} mode='primary'>Оплатить {isSuccess} ₽</Button>
            </form>
        </Popup>
    )
}
