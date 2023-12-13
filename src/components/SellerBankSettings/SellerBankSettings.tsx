import {FC, useEffect} from 'react';
import styles from './SellerBankSettings.module.scss';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { ISellerBankData } from './SellerBankSettingsTypes';
import { InputTypes } from '../../UI/Input/InputTypes';
import { Button } from '../../UI/Button/Button';
import { useSellerGetBankQuery } from '../../utils/api/sellerApi';
import { useSellerChangeBankMutation } from '../../utils/api/sellerApi';
import { BIK_VALIDATION_CONFIG, OGRNIP_VALIDATION_CONFIG, ACCOUNT_VALIDATION_CONFIG } from '../../utils/constants';

export const SellerBankSettings: FC = () =>{
	const sellerId = localStorage.getItem('userId')
    const {
        register,
        handleSubmit,
        watch,
        getValues,
		setValue,
        formState: { errors,  isValid },
      } = useForm<ISellerBankData>({ mode: 'onChange' });
	  const { data: sellerBank,
		    // isFetching,isLoading, error
		  } = useSellerGetBankQuery(sellerId);
		  useEffect(()=>{
			setValue('bik', sellerBank?.bik)
		  },[sellerBank])
	const [sellerChangeBank, {
    // isFetching, isLoading, isError
  }] = useSellerChangeBankMutation();
  function setNewData(){
	const newBankData = {bik: getValues().bik, ogrnip: getValues().ogrnip, account: getValues().account}
	console.log(newBankData)
	return newBankData
  }
  const handleSellerChangeBank = () => {
    sellerChangeBank(setNewData()).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };
    return (
            <form className={styles.form} onSubmit={handleSubmit(handleSellerChangeBank)}>
                    <Input
					    inputType={InputTypes.bik}
					    labelText='БИК'
					    validation={{
						    ...register('bik', BIK_VALIDATION_CONFIG),
					    }}
					    error={errors?.bik?.message}
				    />
                    <Input
					    inputType={InputTypes.ogrnip}
					    labelText='ОГРНИП'
					    validation={{
						    ...register('ogrnip', OGRNIP_VALIDATION_CONFIG),
					    }}
					    error={errors?.ogrnip?.message}
				    />
                <Input
					inputType={InputTypes.account}
					labelText='Расчетный счет'
					validation={{
						...register('account', ACCOUNT_VALIDATION_CONFIG),
					}}
					error={errors?.account?.message}
				/>
                <div className={styles.btncontainer}>
					<Button isDisabled={!isValid} type='submit' mode='primary'>Сохранить</Button>
				</div>
            </form>
    )
}
