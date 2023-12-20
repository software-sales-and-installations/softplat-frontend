import {FC} from 'react';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import styles from './SellerAddNewCard.module.scss';
import { ICreateProductFields } from './SellerAddNewCardTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NAME_VALIDATION_CONFIG, LINK_VALIDATION_CONFIG, PRICE_VALIDATION_CONFIG } from '../../utils/constants';
import { useState } from 'react';
import classNames from 'classnames';

export const SellerAddNewCard: FC = () =>{
    const [variantSoftware, setVariantSoftware] = useState('Загрузка ПО')
    const [DDactive, setDDActive] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<ICreateProductFields>({ mode: 'onChange' });
    
      const onSubmit: SubmitHandler<ICreateProductFields> = data => {
        console.log(data);
        // reset();
      };
    return(
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputType={InputTypes.name}
            labelText="Название ПО в соответствии с лицензией"
            validation={{
              ...register('name', NAME_VALIDATION_CONFIG),
            }}
            typeError='addCardError'
            error={errors?.name?.message}
          />
          <div className={styles.selectContainer}>
            <label className={styles.selectContainer__label} htmlFor='vendor'>Вендор</label>
              <select id='vendor'  className={styles.selectContainer__select} {...register('vendor')}>
                <option value="A">Вендор А</option>
                <option value="B">Вендор Б</option>
            </select>
          </div>
          <div className={styles.selectContainer}>
            <label className={styles.selectContainer__label} htmlFor='category'>Категория</label>
              <select id='category' className={styles.selectContainer__select} {...register('category')}>
                <option value="A">Категория А</option>
                <option value="B">Категория Б</option>
            </select>
          </div>
          <div className={styles.selectContainer}>
            <label className={styles.selectContainer__label} htmlFor='install'>Вариант продажи</label>
              <select id='install' className={styles.selectContainer__select} {...register('install')}>
                <option value="A">С установкой</option>
                <option value="B">Без установки</option>
            </select>
          </div>
          <div className={styles.selectContainer}>
            <p className={styles.selectContainer__label}>Предоставьте ПО</p>
            <button onClick={()=>setDDActive(!DDactive)} className={styles.dropdown__label}>
                <p className={styles.dropdown__text}>{variantSoftware}</p>
                <div className={styles.dropdown__chevron}></div>
            </button>
            <div className={classNames(styles.dropdown, DDactive? styles.dropdown_active: '')}>
                {variantSoftware==='Ссылка на файл'? <button className={styles.dropdown__btn} onClick = {()=>{
                    setVariantSoftware('Загрузка ПО')
                    setDDActive(!DDactive)
                }}>Загрузка ПО</button>
                : <button className={styles.dropdown__btn} onClick = {()=>{
                    setVariantSoftware('Ссылка на файл')
                    setDDActive(!DDactive)
                    }}>Ссылка на файл</button>}
            </div>
          </div>
        {variantSoftware==='Загрузка ПО'?<>
        <div className={styles.containerForFile}>
          <p className={styles.selectContainer__label}>Загрузка ПО</p>
            <input
              type="file"
              id="file"
              {...register('file')}
              className={styles.sellerAddCard__loadImg}
            />
            <div className={styles.containerForFile__img}></div>
            <label htmlFor='file' className={styles.sellerAddCard__load}>
              <p className={styles.containerForFile__label}>Перетащите сюда файлы или клините для выбора</p>
            </label>
        </div>
        <div className={styles.containerForFile}>
          <p className={styles.selectContainer__label}>Загрузка демо</p>
            <input
              type="file"
              id="fileDemo"
              {...register('fileDemo')}
              className={styles.sellerAddCard__loadImg}
            />
            <div className={styles.containerForFile__img}></div>
            <label htmlFor='fileDemo' className={styles.sellerAddCard__load}>
              <p className={styles.containerForFile__label}>Перетащите сюда файлы или клините для выбора</p>
            </label>
        </div>
        </>
        : <div className={styles.linkContainer}>
        <Input
        labelText='Ссылка на файл ПО'
        inputType={InputTypes.link}
        validation={{
          ...register('link', LINK_VALIDATION_CONFIG),
        }}
        error={errors?.link?.message}
        typeError='addCardError'
      />
      <Input
        labelText='Ссылка на файл Демо'
        inputType={InputTypes.link}
        validation={{
          ...register('link', LINK_VALIDATION_CONFIG),
        }}
        error={errors?.link?.message}
        typeError='addCardError'
      />
      </div>}
        
        <div>
          <p className={styles.sellerAddCard__title}>Логотип ПО</p>
          <label className={styles.sellerAddCard__load_logo}>
            <input
              type="file"
              id="logo"
              className={styles.sellerAddCard__loadImg}
              {...register('logo')}
            />
            <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="115" height="115" rx="12" stroke="#B7C5D6"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M44.127 38.375H72.877C74.4019 38.375 75.8645 38.9814 76.9428 40.0609C78.0212 41.1403 78.627 42.6043 78.627 44.1309V72.9103C78.627 74.4368 78.0212 75.9009 76.9428 76.9803C75.8645 78.0597 74.4019 78.6661 72.877 78.6661H44.127C42.602 78.6661 41.1394 78.0597 40.0611 76.9803C38.9828 75.9009 38.377 74.4368 38.377 72.9103V44.1309C38.377 42.6043 38.9828 41.1403 40.0611 40.0609C41.1394 38.9814 42.602 38.375 44.127 38.375Z" stroke="#C1C2C2" strokeWidth="2.94328" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M78.627 67.1543L70.002 58.5205L61.377 67.1112M72.877 78.6661L47.002 52.7646L38.377 61.3985" stroke="#C1C2C2" strokeWidth="2.94328" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M68.5645 51.3252C70.1523 51.3252 71.4395 50.0367 71.4395 48.4473C71.4395 46.8578 70.1523 45.5693 68.5645 45.5693C66.9766 45.5693 65.6895 46.8578 65.6895 48.4473C65.6895 50.0367 66.9766 51.3252 68.5645 51.3252Z" fill="#C1C2C2"/>
            </svg> 
          </label>
        </div>
        <div className={styles.textArea}>
            <label className={styles.textArea__label} htmlFor='description'>Описание</label>
            <textarea className={styles.textArea__input} id='description' {...register('description', {required: true})}/>
       </div>
       <div className={styles.priceContainer}>
        <Input
          inputType={InputTypes.price}
          labelText="Стоимость ПО в рублях"
          validation={{
            ...register('price', PRICE_VALIDATION_CONFIG),
          }}
          error={errors?.price?.message}
          typeError='addCardError'
        />
        <Input
          inputType={InputTypes.priceInstall}
          labelText="Стоимость установки в рублях"
          validation={{
            ...register('priceInstall', PRICE_VALIDATION_CONFIG),
          }}
          error={errors?.priceInstall?.message}
          typeError='addCardError'
        />
        </div>
        <div className={styles.textArea}>
            <label className={styles.textArea__label} htmlFor='keywords'>Ключевые слова для поиска - не более 10</label>
            <textarea className={classNames(styles.textArea__input, styles.textArea__input_type_keyword)} id='keywords' {...register('keywords', {required: true})}/>
       </div>
        <div className={styles.sellerAddCard__btncontainer}>
          <Button type='submit' isDisabled={!isValid} mode="primary">
            На модерацию
          </Button>
          <Button type="button" mode="secondary">
            Сохранить
          </Button>
        </div>
      </form>
    )

}
