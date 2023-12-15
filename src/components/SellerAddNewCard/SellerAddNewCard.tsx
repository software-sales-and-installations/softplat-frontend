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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="116"
              viewBox="0 0 116 116"
              fill="none"
            >
              <rect width="116" height="116" rx="11.6" fill="#EEF1F4" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.5012 37.6992H72.5012C74.0394 37.6992 75.5147 38.3109 76.6024 39.3997C77.6901 40.4886 78.3012 41.9653 78.3012 43.5051V72.5348C78.3012 74.0746 77.6901 75.5514 76.6024 76.6402C75.5147 77.729 74.0394 78.3407 72.5012 78.3407H43.5012C41.9629 78.3407 40.4877 77.729 39.4 76.6402C38.3122 75.5514 37.7012 74.0746 37.7012 72.5348V43.5051C37.7012 41.9653 38.3122 40.4886 39.4 39.3997C40.4877 38.3109 41.9629 37.6992 43.5012 37.6992Z"
                stroke="white"
                strokeWidth="2.94328"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M78.3012 66.7297L69.6012 58.0208L60.9012 66.6861M72.5012 78.3415L46.4012 52.2148L37.7012 60.9237"
                stroke="white"
                strokeWidth="2.94328"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M68.15 50.763C69.7516 50.763 71.05 49.4633 71.05 47.86C71.05 46.2567 69.7516 44.957 68.15 44.957C66.5484 44.957 65.25 46.2567 65.25 47.86C65.25 49.4633 66.5484 50.763 68.15 50.763Z"
                fill="white"
              />
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
