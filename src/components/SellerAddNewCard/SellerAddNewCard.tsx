import {FC} from 'react';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import styles from './SellerAddNewCard.module.scss';
import { ICreateProductFields } from './SellerAddNewCardTypes';
import { useForm } from 'react-hook-form';
import { NAME_VALIDATION_CONFIG, LINK_VALIDATION_CONFIG, PRICE_VALIDATION_CONFIG, QUANTITY_VALIDATION_CONFIG, VERSION_VALIDATION_CONFIG } from '../../utils/constants';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useVendorListQuery } from '../../utils/api/vendorApi';
import { useProductCreateMutation, useProductSendToModerationMutation, useProductUpdateMutation } from '../../utils/api/userProductApi';
import { usePublicProductQuery } from '../../utils/api/publicProductApi';
import { useCategoryListQuery } from '../../utils/api/categoryApi';
import { useParams } from 'react-router-dom';
import { useProductSubmitImageMutation } from '../../utils/api/submitImageApi';
import { useAppDispatch } from '../../services/redux/store';
import { useAppSelector } from '../../services/redux/store';
import { RootState } from '../../services/redux/store';
import { sellerDraftList, sellerShippedList } from '../../pages/Seller/SellerSlice';


export const SellerAddNewCard: FC = () =>{
  const id = useParams();
  const dispatch = useAppDispatch();
  const sellerShipped = useAppSelector((state: RootState) => state.sellerTotalProducts.sellerShippedList)
  const sellerDraft = useAppSelector((state: RootState) => state.sellerTotalProducts.sellerDraftList)
  const [productCreate, {
    //     // isFetching, isLoading, isError
      }] = useProductCreateMutation();
  const [productUpdate,{
    // isFetching, isLoading, isError
  }] = useProductUpdateMutation()

  //@ts-ignore
  const { data: vendorAll} = useVendorListQuery({},{
    refetchOnMountOrArgChange:true
  });
  const {data: categoryList} = useCategoryListQuery({});

  
  const [variantSoftware, setVariantSoftware] = useState ('Загрузка ПО')
  const { data: product} = usePublicProductQuery(id.id, {skip: id.id === undefined});
  const [productDataCard, setProductDataCard] = useState(product)
  const [productSendToModeration, {}] = useProductSendToModerationMutation();
    const [productAddImage, {}] = useProductSubmitImageMutation();

  useEffect(()=>{
    console.log(id.id)
    setProductDataCard(product)
  }, [product])
  const [subminBtnName, setSubmitBtnName] = useState('moderation')
  const [errorText, setErrorText] = useState('')
  const [addCardError, setAddCardError] = useState(0);
  const [DDactive, setDDActive] = useState(false)
  const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors, isValid },
      } = useForm<ICreateProductFields>({ mode: 'onChange' });

  const [categoryListData, setcategoryListData] = useState(categoryList)
  const [vendorData, setVendorData] = useState(vendorAll)
  const productData = {
    hasDemo: true,
    category: getValues().category,
    description: getValues().description,
    installation: getValues().installation,
    installationPrice: getValues().installationPrice,
    name: getValues().name,
    price: getValues().price,
    quantity: getValues().quantity,
    vendor: getValues().vendor,
    version: getValues().version,
    logo: getValues().logo
  }
  useEffect(()=>{
    setcategoryListData(categoryList)
  },[categoryList, categoryListData])

  useEffect(()=>{
    setVendorData(vendorAll)
  },[vendorData, vendorAll])


  function handleSubmitCard(){
  console.log(productData)
    if(!id.id){
      productCreate(productData).unwrap()
      .then((res) => {
        dispatch(sellerDraftList(sellerDraft+1))
        if(subminBtnName==='moderation'){
          console.log(res.id)
          productSendToModeration({productId: res.id}).unwrap()
            .then((res) => {
              const newData = new FormData();
          newData.append('image', productData.logo[0]);
          productAddImage({productId: res.id, body: newData}).unwrap()
            .then((res) => {
            console.log(res)
            
            })
            .catch((error) => {
            console.log(error);
            setErrorText('При загрузке картинки произошла ошибка')
          })
            .finally(()=>{
              
        })
        
              console.log(res)
              setErrorText('Данные сохранены')
              dispatch(sellerShippedList(sellerShipped+1))
              dispatch(sellerDraftList(sellerDraft))
            })
            .catch((error) => {
              console.log(error);
              setErrorText('При отправке товара на модерацию произошла ошибка, товар сохранен во вкладке Черновики')
            })
            .finally()
      }

      })
      .catch((error) => {
        setAddCardError(error.status)
        console.log(error);
      })
      .finally()
    }
    else {
      productUpdate({productId: id.id, body: getValues()})
      .then(()=>{
        dispatch(sellerDraftList(sellerDraft+1))
        const newData = new FormData();
        newData.append('image', productData.logo[0]);
        productAddImage({productId: id.id, body: newData}).unwrap()
          .then((res) => {
          console.log(res)
          })
          .catch((error) => {
          console.log(error);
          setErrorText('При загрузке картинки произошла ошибка')
        })
        .finally(()=>{
          if(subminBtnName==='moderation'){
            productSendToModeration({productId: id.id}).unwrap()
              .then((res) => {
                dispatch(sellerShippedList(sellerShipped+1))
                dispatch(sellerDraftList(sellerDraft))
                console.log(res)
                setErrorText('Данные сохранены')
              })
              .catch((error) => {
                console.log(error);
                setErrorText('При отправке товара на модерацию произошла ошибка')
              })
              .finally()
          }
        })
      })
      .catch((error)=>{
        console.log(error)
        setAddCardError(error.status)
      })
      .finally()
    }
    }
        useEffect(() => {
          if (addCardError === 401) {
            setErrorText('Пользователь не авторизован');
          }
          if (addCardError === 400) {
              console.log('ddd')
            setErrorText('Некорректно заполнены поля');
          }
          if (addCardError === 403) {
              setErrorText('Доступ запрещен');
            }
        }, [addCardError]);

          useEffect(()=>{
              if(id.id){
              console.log(productDataCard)
              setValue('quantity', productDataCard?.quantity? productDataCard.quantity: 0)
              setValue('price', productDataCard?.price? productDataCard.price: 0)
              setValue('installationPrice', productDataCard?.installationPrice? productDataCard.installationPrice: 0)
              setValue('name', productDataCard?.name? productDataCard.name: '')
              setValue('description', productDataCard?.description? productDataCard.description: '')
              setValue('version', productDataCard?.version? productDataCard.version:'')
              setValue('vendor', productDataCard?.vendor?.id? productDataCard.vendor.id: 1)
              setValue('category', productDataCard?.category?.id? productDataCard.category.id: 1)}
          },[id, product, productDataCard])
    return(
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitCard)}>
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
              <select id='vendor'  className={styles.selectContainer__select} {...register('vendor', {required: true})}>
                <option value=''>Выберите вендора</option>
                {vendorData?.vendors.map((i)=>{
                  return(
                <option key={i.id} value={i.id}>{i.name}</option>
                )})}
            </select>
          </div>
          <div className={styles.selectContainer}>
            <label className={styles.selectContainer__label} htmlFor='category'>Категория</label>
              <select id='category' className={styles.selectContainer__select} {...register('category',{required: true})}>
              <option value=''>Выберите категорию</option>
                {categoryListData?.categories.map((i: any)=>{
                  return(
                    <option key={i.id} value={i.id}>{i.name}</option>
                  )
                })}
            </select>
          </div>
          <div className={styles.selectContainer}>
            <label className={styles.selectContainer__label} htmlFor='installation'>Вариант продажи</label>
              <select id='installation' className={styles.selectContainer__select} {...register('installation')}>
                <option value="true">С установкой</option>
                <option value="false">Без установки</option>
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
        : <>
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
      </>}

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
              <path fillRule="evenodd" clipRule="evenodd" d="M44.127 38.375H72.877C74.4019 38.375 75.8645 38.9814 76.9428 40.0609C78.0212 41.1403 78.627 42.6043 78.627 44.1309V72.9103C78.627 74.4368 78.0212 75.9009 76.9428 76.9803C75.8645 78.0597 74.4019 78.6661 72.877 78.6661H44.127C42.602 78.6661 41.1394 78.0597 40.0611 76.9803C38.9828 75.9009 38.377 74.4368 38.377 72.9103V44.1309C38.377 42.6043 38.9828 41.1403 40.0611 40.0609C41.1394 38.9814 42.602 38.375 44.127 38.375Z" stroke="#C1C2C2" strokeWidth="2.94328" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M78.627 67.1543L70.002 58.5205L61.377 67.1112M72.877 78.6661L47.002 52.7646L38.377 61.3985" stroke="#C1C2C2" strokeWidth="2.94328" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M68.5645 51.3252C70.1523 51.3252 71.4395 50.0367 71.4395 48.4473C71.4395 46.8578 70.1523 45.5693 68.5645 45.5693C66.9766 45.5693 65.6895 46.8578 65.6895 48.4473C65.6895 50.0367 66.9766 51.3252 68.5645 51.3252Z" fill="#C1C2C2"/>
            </svg>
          </label>
        </div>
        <Input
          inputType={InputTypes.version}
          labelText="Версия ПО"
          validation={{
            ...register('version', VERSION_VALIDATION_CONFIG),
          }}
          error={errors?.version?.message}
          typeError='addCardError'
        />
        <div className={styles.textArea}>
            <label className={styles.textArea__label} htmlFor='description'>Описание</label>
            <textarea className={styles.textArea__input} id='description' {...register('description', {required: true})}/>
       </div>
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
          inputType={InputTypes.installationPrice}
          labelText="Стоимость установки в рублях"
          validation={{
            ...register('installationPrice', PRICE_VALIDATION_CONFIG),
          }}
          error={errors?.installationPrice?.message}
          typeError='addCardError'
        />
         <Input
          inputType={InputTypes.quantity}
          labelText="Количество"
          validation={{
            ...register('quantity', QUANTITY_VALIDATION_CONFIG),
          }}
          error={errors?.quantity?.message}
          typeError='addCardError'
        />
        <div className={styles.textArea}>
            <label className={styles.textArea__label} htmlFor='keywords'>Ключевые слова для поиска - не более 10</label>
            <textarea className={classNames(styles.textArea__input, styles.textArea__input_type_keyword)} id='keywords' {...register('keywords')}/>
       </div>
       <div className={styles.errorContainer}>
          <p className={styles.errorContainer__error}>{errorText}</p>
        </div>
        <div className={styles.sellerAddCard__btncontainer}>
          <Button onClick = {()=>setSubmitBtnName('moderation')} isDisabled={!isValid}  type="submit"  mode="primary">
            На модерацию
          </Button>
          <Button onClick = {()=>setSubmitBtnName('save')} type="submit" isDisabled={!isValid} mode="secondary">
            Сохранить
          </Button>
        </div>
      </form>
    )

}
