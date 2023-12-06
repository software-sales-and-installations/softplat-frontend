import {FC} from 'react';
import styles from './SellerBankSettings.module.scss';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { ISellerBankData } from './SellerBankSettingsTypes';
import { InputTypes } from '../../UI/Input/InputTypes';
import { Button } from '../../UI/Button/Button';

export const SellerBankSettings: FC = () =>{
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors,  isValid },
      } = useForm<ISellerBankData>({ mode: 'onChange' });
    return (
            <form className={styles.form}>
                <div className={styles.containerBik}>
                    <Input
					    inputType={InputTypes.bik}
					    labelText='БИК'
					    validation={{
						    ...register('bik'),
					    }}
					    error={errors?.bik?.message}
				    />
                </div>
                <div className={styles.containerOgrnip}>
                    <Input
					    inputType={InputTypes.ogrnip}
					    labelText='ОГРНИП'
					    validation={{
						    ...register('ogrnip'),
					    }}
					    error={errors?.ogrnip?.message}
				    />
                </div>
                <Input
					inputType={InputTypes.account}
					labelText='Расчетный счет'
					validation={{
						...register('account'),
					}}
					error={errors?.account?.message}
				/>
                <div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Сохранить</Button>
				</div>
            </form>
    )
}
