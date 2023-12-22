import { FC, useEffect } from 'react';
import styles from './SellerBankSettings.module.scss';
import { Input } from '../../UI/Input/Input';
import { useForm, Controller } from 'react-hook-form';
import { ISellerBankData } from './SellerBankSettingsTypes';
import { InputTypes } from '../../UI/Input/InputTypes';
import { Button } from '../../UI/Button/Button';
import {
  useSellerAddBankMutation,
  useSellerGetBankQuery,
} from '../../utils/api/sellerApi';
import { useSellerChangeBankMutation } from '../../utils/api/sellerApi';
import {
  BIK_VALIDATION_CONFIG,
  OGRNIP_VALIDATION_CONFIG,
  ACCOUNT_VALIDATION_CONFIG,
  INN_VALIDATION_CONFIG,
  ORGFORM_OPTIONS,
} from '../../utils/constants';
import { useState } from 'react';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';

export const SellerBankSettings: FC = () => {
  const sellerId = localStorage.getItem('userId');
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<ISellerBankData>({ mode: 'onChange' });

  const [sellerAddBank, {}] = useSellerAddBankMutation();

  const {
    data: sellerBank,
    // isFetching,isLoading, error
  } = useSellerGetBankQuery(sellerId);
  const [bankData, setBankData] = useState({
    bik: sellerBank?.bik,
    ogrnip: sellerBank?.ogrnip,
    ogrn: sellerBank?.ogrn,
    account: sellerBank?.account,
    inn: sellerBank?.inn,
    kpp: sellerBank?.kpp,
    address: sellerBank?.address,
    legalForm: sellerBank?.legalForm,
  });

  const [
    sellerChangeBank,
    {
      // isFetching, isLoading, isError
    },
  ] = useSellerChangeBankMutation();
  function setNewData() {
    const isIP = getValues().orgForm?.value === 'IP' ? 'ogrnip' : 'ogrn'
    console.log(isIP)
    const newBankData = {
      bik: getValues().bik,
      [isIP]: getValues().ogrnip,
      account: getValues().account,
      inn: getValues().INN,
      kpp: getValues().kpp,
      address: getValues().address,
      legalForm: getValues().orgForm?.value,
    };
    console.log(newBankData);
    return newBankData;
  }
  const handleSellerAddBank = () => {
    sellerAddBank(setNewData())
      .unwrap()
      .then(res => {
        setBankData({
          bik: res.bik,
          ogrnip: res.ogrnip,
          ogrn: res.ogrn,
          account: res.account,
          inn: res.inn,
          kpp: res.kpp,
          address: res.address,
          legalForm: res.legalForm,
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  };

  const handleSellerChangeBank = () => {
    sellerChangeBank(setNewData())
      .unwrap()
      .then(res => {
        setBankData({
          bik: res.bik,
          ogrnip: res.ogrnip,
          ogrn: res.ogrn,
          account: res.account,
          inn: res.inn,
          kpp: res.kpp,
          address: res.address,
          legalForm: res.legalForm,
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  };

  const orgFormDefaultValue = ORGFORM_OPTIONS.find(
    i => i.value === sellerBank?.legalForm,
  );

  useEffect(() => {
    setValue('bik', bankData.bik || sellerBank?.bik);
    setValue('ogrnip', bankData.ogrnip || bankData.ogrn || sellerBank?.ogrnip || sellerBank?.ogrn);
    setValue('account', bankData.account || sellerBank?.account);
    setValue('INN', bankData.inn || sellerBank?.inn);
    setValue('address', bankData.address || sellerBank?.address);
    setValue('kpp', bankData.kpp || sellerBank?.kpp);
    setValue('orgForm', orgFormDefaultValue || undefined);
  }, [sellerBank, bankData]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(
        !sellerBank?.bik ? handleSellerAddBank : handleSellerChangeBank,
      )}
    >
      <Input
        inputType={InputTypes.INN}
        labelText="ИНН*"
        validation={{
          ...register('INN', INN_VALIDATION_CONFIG),
        }}
        error={errors?.INN?.message}
        typeError="dataError"
      />
      <Input
        inputType={InputTypes.kpp}
        labelText="КПП*"
        validation={{
          ...register('kpp'),
        }}
        error={errors?.kpp?.message}
        typeError="dataError"
      />
      <Controller
        control={control}
        name="orgForm"
        render={({ field: { onChange, value } }) => (
          <DropDown
            type={SelectorType.ORGFORM}
            options={ORGFORM_OPTIONS}
            labelText="Правовая форма организации*"
            onChange={onChange}
            value={value}
            // error={errors?.orgForm?.message}
            typeError="dataError"
            isMultiOption={false}
          />
        )}
      />
      <Input
        inputType={InputTypes.ogrnip}
        labelText="ОГРН/ОГРНИП*"
        validation={{
          ...register('ogrnip', OGRNIP_VALIDATION_CONFIG),
        }}
        error={errors?.ogrnip?.message}
        typeError="dataError"
      />
      <Input
        inputType={InputTypes.address}
        labelText="Юридический адрес*"
        validation={{
          ...register('address'),
        }}
        error={errors?.address?.message}
        typeError="dataError"
      />
      <Input
        inputType={InputTypes.bik}
        labelText="БИК*"
        validation={{
          ...register('bik', BIK_VALIDATION_CONFIG),
        }}
        error={errors?.bik?.message}
        typeError="dataError"
      />

      <Input
        inputType={InputTypes.account}
        labelText="Расчетный счет*"
        validation={{
          ...register('account', ACCOUNT_VALIDATION_CONFIG),
        }}
        error={errors?.account?.message}
        typeError="dataError"
      />
      <div className={styles.btncontainer}>
        <Button isDisabled={!isValid} type="submit" mode="primary">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
