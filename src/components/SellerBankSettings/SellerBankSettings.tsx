import {FC, useEffect} from 'react';
import styles from './SellerBankSettings.module.scss';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { ISellerBankData } from './SellerBankSettingsTypes';
import { InputTypes } from '../../UI/Input/InputTypes';
import { Button } from '../../UI/Button/Button';
import { useSellerGetBankQuery } from '../../utils/api/sellerApi';
import { useSellerChangeBankMutation } from '../../utils/api/sellerApi';
import { BIK_VALIDATION_CONFIG, OGRNIP_VALIDATION_CONFIG, ACCOUNT_VALIDATION_CONFIG} from '../../utils/constants';
import { useState } from 'react';

export const SellerBankSettings: FC = () =>{
	const sellerId = localStorage.getItem('userId')
    const {
        register,
        handleSubmit,
        getValues,
		setValue,
        formState: { errors,  isValid },
      } = useForm<ISellerBankData>({ mode: 'onChange' });
	  const { data: sellerBank,
		    // isFetching,isLoading, error
		  } = useSellerGetBankQuery(sellerId);
		  const [bankData, setBankData] = useState({bik: sellerBank?.bik, ogrnip: sellerBank?.ogrnip, account: sellerBank?.account})
		  
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
		setBankData({bik: res.bik, ogrnip: res.ogrnip, account: res.account})
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };
  useEffect(()=>{
	setValue('bik', bankData.bik|| sellerBank?.bik)
	setValue('ogrnip', bankData.ogrnip || sellerBank?.ogrnip )
	setValue('account', bankData.account || sellerBank?.account)
  },[sellerBank, bankData])
    return (
            <form className={styles.form} onSubmit={handleSubmit(handleSellerChangeBank)}>
                    <Input
					    inputType={InputTypes.bik}
					    labelText='БИК'
					    validation={{
						    ...register('bik', BIK_VALIDATION_CONFIG)}}
					    error={errors?.bik?.message}
							typeError='dataError'
				    />
                    <Input
					    inputType={InputTypes.ogrnip}
					    labelText='ОГРНИП'
					    validation={{
						    ...register('ogrnip', OGRNIP_VALIDATION_CONFIG)}}
					    error={errors?.ogrnip?.message}
							typeError='dataError'
				    />
                <Input
					inputType={InputTypes.account}
					labelText='Расчетный счет'
					validation={{
						...register('account', ACCOUNT_VALIDATION_CONFIG),
					}}
					error={errors?.account?.message}
					typeError='dataError'
				/>
                <div className={styles.btncontainer}>
					<Button isDisabled={!(isValid)} type='submit' mode='primary'>Сохранить</Button>
				</div>
            </form>
    )
}
