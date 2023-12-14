import {FC} from 'react';
import styles from './SellerSettings.module.scss';
import { ISellerSettings } from './SellerSettingsTypes';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../UI/Button/Button';
import { InputTypes } from '../../UI/Input/InputTypes';

export const SellerSettings: FC = () =>{
    const {
        register,
        formState: { errors,  isValid },
      } = useForm<ISellerSettings>({ mode: 'onChange' });
    return (
            <form className={styles.form}>
                <div className={styles.containerForINN}>
                <Input
					inputType={InputTypes.INN}
					labelText='ИНН'
					validation={{
						...register('inn'),
					}}
					error={errors?.inn?.message}
					typeError='dataError'
				/>
                </div>
                <div className={styles.containerForKPP}>
                <Input
					inputType={InputTypes.kpp}
					labelText='КПП'
					validation={{
						...register('kpp'),
					}}
					error={errors?.kpp?.message}
					typeError='dataError'
				/>
                </div>
                <div className={styles.containerForPhone}>
                <Input
						inputType={InputTypes.phone}
						labelText="Телефон"
						validation={{ ...register('phone') }}
						error={errors?.phone?.message}
						typeError='dataError'
					/>
                </div>
                <Input
						inputType={InputTypes.orgForm}
						labelText="Правовая форма организации"
						validation={{ ...register('orgForm') }}
						error={errors?.orgForm?.message}
						typeError='dataError'
					/>
                <Input
						inputType={InputTypes.companyname}
						labelText="Название организации"
						validation={{ ...register('companyname') }}
						error={errors?.companyname?.message}
						typeError='dataError'
					/>
                    <Input
						inputType={InputTypes.shopname}
						labelText="Название магазина"
						validation={{ ...register('shopname') }}
						error={errors?.shopname?.message}
						typeError='dataError'
					/>
                    <Input
					inputType={InputTypes.email}
					labelText='E-mail'
					validation={{
						...register('email'),
					}}
					error={errors?.email?.message}
					typeError='dataError'
				/>
                <Input
					inputType={InputTypes.address}
					labelText='Юридический адрес'
					validation={{
						...register('address'),
					}}
					error={errors?.address?.message}
					typeError='dataError'
				/>
                <div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Сохранить</Button>
				</div>
            </form>
    )
}
