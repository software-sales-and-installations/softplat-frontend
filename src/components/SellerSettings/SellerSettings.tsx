import { FC, useEffect } from 'react';
import styles from './SellerSettings.module.scss';
import { ISellerSettings } from './SellerSettingsTypes';
import { Input } from '../../UI/Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../UI/Button/Button';
import { InputTypes } from '../../UI/Input/InputTypes';
import {
  NAME_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
} from '../../utils/constants';
import {
  useSellerChangeDataMutation,
  useSellerInfoQuery,
} from '../../utils/api/sellerApi';

export const SellerSettings: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<ISellerSettings>({ mode: 'onChange' });

  const { data: sellerInfo } = useSellerInfoQuery(
    localStorage.getItem('userId'),
  );

  //   console.log(sellerInfo)

  const [sellerChangeData, {}] = useSellerChangeDataMutation();

  function setNewData() {
    const newBankData = {
      phone: getValues().phone,
      email: getValues().email,
      name: getValues().name,
    };
    console.log(newBankData);
    return newBankData;
  }

  const handleSellerChangeData = () => {
    sellerChangeData(setNewData())
      .unwrap()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  };

  useEffect(() => {
    setValue('phone', sellerInfo?.phone);
    setValue('email', sellerInfo?.email);
    setValue('name', sellerInfo?.name);
  }, [sellerInfo]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleSellerChangeData)}
    >
      <div className={styles.containerForPhone}>
        <Input
          inputType={InputTypes.phone}
          labelText="Телефон*"
          validation={{ ...register('phone', PHONE_VALIDATION_CONFIG) }}
          error={errors?.phone?.message}
          typeError="dataError"
        />
      </div>
      <Input
        inputType={InputTypes.email}
        readOnly
        labelText="E-mail (Логин)*"
        validation={{
          ...register('email'),
        }}
        error={errors?.email?.message}
        typeError="dataError"
      />
      <Input
        inputType={InputTypes.name}
        labelText="Название организации/магазина*"
        validation={{ ...register('name', NAME_VALIDATION_CONFIG) }}
        error={errors?.name?.message}
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
