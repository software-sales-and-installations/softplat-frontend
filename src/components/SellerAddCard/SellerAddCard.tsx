import { FC } from 'react';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../SellerAddCard/SellerAddCard.module.scss';
import { Button } from '../../UI/Button/Button';
import { ICreateProductFields } from '../SellerAddCard/SellerAddCardTypes';
import { Categories } from '../Categories/Categories';
import { LINK_VALIDATION_CONFIG, PRICE_VALIDATION_CONFIG, CARD_REQUIRED_FIELDS } from '../../utils/constants';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import { SELECT_COUNTRIES_OPTIONS } from '../../utils/constants';

export const SellerAddCard: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICreateProductFields>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ICreateProductFields> = data => {
    console.log(data);
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.sellerAddCard}>
      <div className={styles.sellerAddCard__inputs}>
        <Input
          inputType={InputTypes.name}
          labelText="Введите название"
          validation={{
            ...register('name', CARD_REQUIRED_FIELDS),
          }}
          helpText='Полное название в соответствии с лицензией'
          error={errors?.name?.message}
        />
        <div className={styles.selectContainer}>
          <label className={styles.selectContainer__label} htmlFor='vendor'>Выберите вендора</label>
            <select id='vendor'  className={styles.selectContainer__select} {...register('vendor')}>
              <option value="A">Вендор А</option>
              <option value="B">Вендор Б</option>
          </select>
        </div>
        <div className={styles.selectContainer}>
          <label className={styles.selectContainer__label} htmlFor='category'>Выберите категорию</label>
            <select id='category' className={styles.selectContainer__select} {...register('category')}>
              <option value="A">Категория А</option>
              <option value="B">Категория Б</option>
          </select>
        </div>
        <div className={styles.selectContainer}>
          <label className={styles.selectContainer__label} htmlFor='install'>Выберите категорию</label>
            <select id='install' className={styles.selectContainer__select} {...register('install')}>
              <option value="A">С установкой</option>
              <option value="B">Без установки</option>
          </select>
        </div>
      </div>
      <div className={styles.containerForFile}>
        <p className={styles.selectContainer__label}>Загрузите ПО</p>
          <input
            type="file"
            id="file"
            {...register('file')}
            className={styles.sellerAddCard__loadImg}
          />
          <div className={styles.containerForFile__img}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 8L12 4M12 4L8 8M12 4L12 16"
              stroke="#545F71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </div>
          <label htmlFor='file' className={styles.sellerAddCard__load}>
            <p className={styles.containerForFile__label}>Перетащите сюда файлы или клините для выбора</p>
          </label>
      </div>
      <Input
        labelText='Или вы можете указать ссылку на файл для скачивания'
        inputType={InputTypes.link}
        validation={{
          ...register('link', LINK_VALIDATION_CONFIG),
        }}
        helpText='Ссылка на файл'
        error={errors?.link?.message}
      />
      <div>
        <p className={styles.sellerAddCard__title}>Загрузите логотип ПО</p>
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
      <Input
        labelText='Добавьте описание'
        inputType={InputTypes.description}
        validation={{
          ...register('description'),
        }}
      />
      <Input
        inputType={InputTypes.price}
        labelText="Введите стоимость"
        validation={{
          ...register('price', PRICE_VALIDATION_CONFIG),
        }}
        helpText='В рублях'
        error={errors?.price?.message}
      />
      <Input
        inputType={InputTypes.priceInstall}
        labelText="Стоимость установки"
        validation={{
          ...register('priceInstall', PRICE_VALIDATION_CONFIG),
        }}
        helpText='В рублях'
        error={errors?.priceInstall?.message}
      />
      <p className={styles.sellerAddCard__title}>
        Выберите ключевые слова для поиска
      </p>
      </div>
      <Categories />
      <div className={styles.sellerAddCard__btncontainer}>
        <Button type='submit' isDisabled={!isValid} mode="primary">
          Сохранить
        </Button>
        <Button type="button" mode="secondary">
          Отправить на модерацию
        </Button>
      </div>
    </form>
  );
};
