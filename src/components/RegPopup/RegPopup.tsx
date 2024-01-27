import { FC, useEffect, useState } from 'react';
import { Popup } from '../../UI/Popup/Popup';
import { Input } from '../../UI/Input/Input';
import { InputTypes } from '../../UI/Input/InputTypes';
import {
  EMAIL_VALIDATION_CONFIG,
  PASSWORD_VALIDATION_CONFIG,
  VALIDATION_SETTINGS,
  NAME_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
  INN_VALIDATION_CONFIG,
  COMMON_PASSWORDS,
} from '../../utils/constants';
import { useForm } from 'react-hook-form';
import { ISignUpFields } from '../../UI/Popup/PopupTypes';
import styles from '../../UI/Popup/Popup.module.scss';
import { Button } from '../../UI/Button/Button';
import { useAppDispatch } from '../../services/redux/store';
import {
  useAuthLoginMutation,
  useAuthRegisterMutation,
} from '../../utils/api/authApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { setUser } from '../../services/redux/slices/user/user';
import { signout } from '../SignOutPopup/SignOutPopupSlice';
import classNames from 'classnames';
import { useBuyerBasketSaveCartMutation } from '../../utils/api/buyerBasketApi';
import {
  sendCartToServer,
  setCartItems,
} from '../../services/redux/slices/cart/cart';
import { convertCartItemsToRequest } from '../../services/cartService/cartService';
import { useNavigate } from 'react-router-dom';

export const PopupForReg: FC = () => {
  const navigate = useNavigate()
  const [errorStatus, setErrorStatus] = useState(0);
  const [textError, setTextError] = useState('');

  const [buyerBasketSaveCart] = useBuyerBasketSaveCartMutation();
  const cartRequest = convertCartItemsToRequest();

  const dispatch = useAppDispatch();
  const MyRole = useSelector((state: RootState) => state.chooseRole.title);
  const roleForReg =
    MyRole === 'Я покупатель'
      ? 'BUYER'
      : MyRole === 'Я продавец'
      ? 'SELLER'
      : null;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isValid },
    getValues,
  } = useForm<ISignUpFields>({ mode: 'onChange' });

  useEffect(() => {
    reset();
    setTextError('');
  }, []);

  const { email, name, password, confirmPassword, phone } = getValues();

  const [
    authLogin,
    {
      // isFetching, isLoading, isError
    },
  ] = useAuthLoginMutation();
  const [
    authRegister,
    {
      // isFetching, isLoading, isError
    },
  ] = useAuthRegisterMutation();
  const handleSubmitRegister = () => {
    console.log(getValues());
    authRegister({
      email,
      name,
      password,
      confirmPassword,
      role: roleForReg,
      phone: phone,
    })
      .unwrap()
      .then(res => {
        authLogin({
          confirmPassword: confirmPassword,
          email: res.email,
          password: password,
        })
          .unwrap()
          .then(userData => {
            localStorage.setItem('token', userData.token);
            localStorage.setItem('role', userData.role);
            localStorage.setItem('email', userData.email);
            localStorage.setItem('userId', userData.id);
            console.log(userData);

            dispatch(popupState(false));
            dispatch(setUser(userData));
            dispatch(signout(false));
            navigate('/')

            if (
              cartRequest.length > 0 &&
              localStorage.getItem('role') === 'BUYER'
            ) {
              sendCartToServer(cartRequest, buyerBasketSaveCart, dispatch);
            } else if (localStorage.getItem('role') !== 'BUYER') {
              localStorage.removeItem('cartItems');
              dispatch(setCartItems([]));
            }

            reset();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        setErrorStatus(error.status);
        console.log(error);
      })
      .finally();
  };
  useEffect(() => {
    if (errorStatus === 400) {
      setTextError('Некорректно заполнены поля');
    }
    if (errorStatus === 409) {
      setTextError('Такой пользователь уже существует');
    }
  }, [errorStatus]);
  useEffect(() => {
    trigger('confirmPassword');
  }, [password, trigger]);
  return (
    <Popup>
      <form
        autoComplete="off"
        className={classNames(
          styles.form,
          MyRole === 'Я продавец' ? styles.form_type_seller : '',
        )}
        onSubmit={handleSubmit(handleSubmitRegister)}
      >
        <input type='hidden' value='something'/>
          {MyRole === 'Я продавец' ? (
            <Input
              inputType={InputTypes.INN}
              labelText="ИНН"
              validation={{
                ...register('INN', INN_VALIDATION_CONFIG),
              }}
              error={errors?.INN?.message}
            />
          ) : null}
        <Input
          inputType={InputTypes.text}
          labelText="Телефон"
          validation={{ ...register('phone', PHONE_VALIDATION_CONFIG) }}
          error={errors?.phone?.message}
          isPhone={true}
        />
        <Input
          inputType={InputTypes.email}
          labelText="E-mail"
          validation={{
            ...register('email', EMAIL_VALIDATION_CONFIG),
          }}
          error={errors?.email?.message}
        />
          {MyRole === 'Я продавец' ? (
            <Input
              inputType={InputTypes.name}
              labelText="Название магазина"
              validation={{
                ...register('name', NAME_VALIDATION_CONFIG),
              }}
              error={errors?.name?.message}
            />
          ) : MyRole === 'Я покупатель' ? (
            <Input
              inputType={InputTypes.name}
              labelText="Ваше имя"
              validation={{
                ...register('name', NAME_VALIDATION_CONFIG),
              }}
              error={errors?.name?.message}
            />
          ) : null}
        <Input
          inputType={InputTypes.password}
          labelText="Пароль (буквы, цифры и знаки препинания)"
          showPasswordButton={true}
          validation={{
            ...register('password', {
              ...PASSWORD_VALIDATION_CONFIG,
              validate: value => {
                if (
                  value === watch('email') ||
                  value === watch('email').split('@')[0]
                ) {
                  return VALIDATION_SETTINGS.password.messages.sameAsEmail;
                } else if (value === watch('name')) {
                  return VALIDATION_SETTINGS.password.messages.sameAsName;
                } else if (COMMON_PASSWORDS.includes(value)) {
                  return VALIDATION_SETTINGS.password.messages.unsafe;
                }
                return;
              },
            }),
          }}
          error={errors?.password?.message}
        />
        <Input
          inputType={InputTypes.confirmPassword}
          labelText={'Повторите пароль'}
          showPasswordButton={true}
          validation={{
            ...register('confirmPassword', {
              validate: value =>
                value === watch('password') ||
                VALIDATION_SETTINGS.password.messages.noMatch,
            }),
          }}
          error={errors?.confirmPassword?.message}
        />
        <div className={styles.checkboxcontainer}>
          <input
            className={styles.checkboxcontainer__input}
            id="remember"
            {...register('remember')}
            type="checkbox"
            value="remember"
          />
          <label className={styles.checkboxcontainer__label} htmlFor="remember">
            Запомнить меня
          </label>
        </div>
        <div
          className={classNames(
            styles.checkboxcontainer,
            styles.checkboxcontainer_type_reg,
          )}
        >
          <input
            id="agreement"
            className={styles.checkboxcontainer__input}
            {...register('agree', { required: true })}
            type="checkbox"
            value="agree"
          />
          <label
            className={styles.checkboxcontainer__label}
            htmlFor="agreement"
          >
            Я соглашаюсь с политикой обработки персональных данных
          </label>
        </div>
        <div className={styles.errorContainer}>
          <p className={styles.errorContainer__error}>{textError}</p>
        </div>
        <div className={styles.btncontainer}>
          <Button isDisabled={!isValid} mode="primary" type="submit">
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </Popup>
  );
};
