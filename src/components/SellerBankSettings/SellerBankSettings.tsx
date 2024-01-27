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
  KPP_VALIDATION_CONFIG,
  ADDRESS_VALIDATION_CONFIG,
  INNIP_VALIDATION_CONFIG,
  OGRN_VALIDATION_CONFIG,
} from '../../utils/constants';
import { useState } from 'react';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';

export const SellerBankSettings: FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm<ISellerBankData>({ mode: 'onChange' });

  const [sellerAddBank, {}] = useSellerAddBankMutation();

  // @ts-ignore
  const { data: sellerBank } = useSellerGetBankQuery();

  const watchOrgForm = watch('orgForm.value');

  const triggerFunc = () => {
    trigger(['ogrnip', 'INN']);
  };

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

  const isIP = getValues().orgForm?.value === 'IP' ? 'ogrnip' : 'ogrn';

  function setNewData() {
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

  useEffect(() => {
    const orgFormDefaultValue = ORGFORM_OPTIONS.find(
      i => i.value === bankData.legalForm || i.value === sellerBank?.legalForm,
    );
    setValue('bik', bankData.bik || sellerBank?.bik);
    setValue(
      'ogrnip',
      bankData.ogrnip ||
        bankData.ogrn ||
        sellerBank?.ogrnip ||
        sellerBank?.ogrn,
    );
    setValue('account', bankData.account || sellerBank?.account);
    setValue('INN', bankData.inn || sellerBank?.inn);
    setValue('address', bankData.address || sellerBank?.address);
    setValue('kpp', bankData.kpp || sellerBank?.kpp);
    setValue('orgForm', orgFormDefaultValue || undefined);
  }, [sellerBank, bankData]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.informText}>
        Поля, отмеченные звездочкой*, обязательны для заполнения
      </p>
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
            ...register(
              'INN',
              watchOrgForm === 'IP'
                ? INNIP_VALIDATION_CONFIG
                : INN_VALIDATION_CONFIG,
            ),
          }}
          error={errors?.INN?.message}
          typeError="dataError"
        />
        <Input
          inputType={InputTypes.kpp}
          labelText="КПП*"
          validation={{
            ...register('kpp', KPP_VALIDATION_CONFIG),
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
              typeError="dataError"
              isMultiOption={false}
              formSize
              trigger={triggerFunc}
            />
          )}
        />
        <Input
          inputType={InputTypes.ogrnip}
          labelText="ОГРН/ОГРНИП*"
          validation={{
            ...register(
              'ogrnip',
              watchOrgForm === 'IP'
                ? OGRNIP_VALIDATION_CONFIG
                : OGRN_VALIDATION_CONFIG,
            ),
          }}
          error={errors?.ogrnip?.message}
          typeError="dataError"
        />
        <Input
          inputType={InputTypes.address}
          labelText="Юридический адрес*"
          validation={{
            ...register('address', ADDRESS_VALIDATION_CONFIG),
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
    </div>
  );
};
