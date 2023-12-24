import {FC, useEffect, useState} from 'react';
import styles from './AdminAddVendor.module.scss';
import { useParams } from 'react-router-dom';
import { Input } from '../../UI/Input/Input';
import { VENDORDESCRIPTION_VALIDATION_CONFIG, VENDORNAME_VALIDATION_CONFIG } from '../../utils/constants';
import { InputTypes } from '../../UI/Input/InputTypes';
import { useForm } from 'react-hook-form';
import { IAdminAddVendor } from './AdminAddVendorTypes';
import { Button } from '../../UI/Button/Button';
import { useVendorQuery } from '../../utils/api/vendorApi';
import { useVendorChangeMutation } from '../../utils/api/vendorApi';
import { useVendorAddMutation } from '../../utils/api/vendorApi';

export const AdminAddVendor: FC = () =>{
    const [errorText, setErrorText] = useState('')
    const [addVendorError, setAddVendorError] = useState(0);
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors,  isValid },
      } = useForm<IAdminAddVendor>({ mode: 'onChange' });
    const id = useParams();
    const { data: vendor,
        // isFetching,isLoading, error
      } = useVendorQuery(id.id,{
        refetchOnMountOrArgChange: true
      });
      const [vendorData, setVendorData] = useState(vendor)
      const [vendorChange, {
        // isFetching, isLoading, isError
    }] = useVendorChangeMutation();
    const [vendorAdd, {
        // isFetching, isLoading, isError
      }] = useVendorAddMutation();
    function handleSubmitVendor(){
        if(id.id){
            vendorChange({vendorId: id.id, body: getValues()}).unwrap()
            .then((res) => {
                console.log(res)
                setErrorText('Данные сохранены')
            })
            .catch((error) => {
                console.log(error);
                setAddVendorError(error.status)
            })
            .finally()

        }
        else {
            vendorAdd(getValues()).unwrap()
            .then((res) => {
                setErrorText('Данные сохранены')
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
                setAddVendorError(error.status)
            })
            .finally()
        }
    }
    useEffect(() => {
        if (addVendorError === 401) {
          setErrorText('Пользователь не авторизован');
        }
        if (addVendorError === 400) {
            console.log('ddd')
          setErrorText('Некорректно заполнены поля');
        }
        if (addVendorError === 403) {
            setErrorText('Доступ запрещен');
          }
      }, [addVendorError]);
    useEffect(()=>{
        if(id.id){
        setVendorData(vendor)
        console.log(id.id)
        setValue('country', vendor?.country)
        setValue('name', vendor?.name)
        setValue('description', vendor?.description)}
    },[id, vendor, vendorData])
    return (
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitVendor)}>
            <Input
					inputType={InputTypes.name}
					labelText='Название'
					validation={{
						...register('name', VENDORNAME_VALIDATION_CONFIG)}}
                    typeError='dataError'
                    error={errors?.name?.message}
            />
            <div className={styles.selectContainer}>
            <label className={styles.selectContainer__label} htmlFor='country'>Страна</label>
              <select id='country' className={styles.selectContainer__select} {...register('country',{required: true})}>
                <option value="RUSSIA">Russia</option>
                <option value="CHINA">China</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="INDIA">India</option>
            </select>
          </div>
            <div className={styles.containerLogo}>
                 <p className={styles.addVendor__title}>Логотип</p>
                <label className={styles.addVendor__load_logo}>
                <input
                    type="file"
                    id="logo"
                    className={styles.addVendor__loadImg}
                    {...register('logo')}
                />
                <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="115" height="115" rx="12" stroke="#B7C5D6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M44.127 38.375H72.877C74.4019 38.375 75.8645 38.9814 76.9428 40.0609C78.0212 41.1403 78.627 42.6043 78.627 44.1309V72.9103C78.627 74.4368 78.0212 75.9009 76.9428 76.9803C75.8645 78.0597 74.4019 78.6661 72.877 78.6661H44.127C42.602 78.6661 41.1394 78.0597 40.0611 76.9803C38.9828 75.9009 38.377 74.4368 38.377 72.9103V44.1309C38.377 42.6043 38.9828 41.1403 40.0611 40.0609C41.1394 38.9814 42.602 38.375 44.127 38.375Z" stroke="#C1C2C2" strokeWidth="2.94328" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M78.627 67.1543L70.002 58.5205L61.377 67.1112M72.877 78.6661L47.002 52.7646L38.377 61.3985" stroke="#C1C2C2" strokeWidth="2.94328" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M68.5645 51.3252C70.1523 51.3252 71.4395 50.0367 71.4395 48.4473C71.4395 46.8578 70.1523 45.5693 68.5645 45.5693C66.9766 45.5693 65.6895 46.8578 65.6895 48.4473C65.6895 50.0367 66.9766 51.3252 68.5645 51.3252Z" fill="#C1C2C2"/>
                </svg> 
                </label>
            </div>
            <div className={styles.textArea}>
            <label className={styles.textArea__label} htmlFor='description'>Описание</label>
            <textarea className={styles.textArea__input} id='description' {...register('description', VENDORDESCRIPTION_VALIDATION_CONFIG)}/>
            <span className={styles.textArea__error}>{errors.description?.message}</span>
        </div>
        <div className={styles.errorContainer}>
          <p className={styles.errorContainer__error}>{errorText}</p>
        </div>
        <div className={styles.containerForBtn}>
            <Button isDisabled={!isValid} type="submit" mode="primary">Сохранить</Button>
        </div>
        </form>
    )
}
