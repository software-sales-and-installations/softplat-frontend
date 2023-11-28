// Ю. Удалить после переноса всех запросов в компоненты
// Ю. Найти причину ошибки типизации в get запросах

import { useAdminInfoQuery } from './adminApi.tsx';
import {
  useAuthChangePasswordMutation,
  useAuthLoginMutation,
  useAuthLogoutMutation,
  useAuthRegisterMutation,
} from './authApi.tsx';
import {
  useBuyerAddFavoritesMutation,
  useBuyerAllMembersQuery,
  useBuyerChangeInfoMutation, useBuyerDeleteFavoritesMutation,
  useBuyerFavoritesQuery,
  useBuyerInfoQuery,
} from './buyerApi.tsx';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  useBuyerBasketInfoQuery,
} from './buyerBasketApi.tsx';
import {
  useOrderAllQuery,
  useOrderMakeMutation,
  useOrderInfoQuery,
} from './buyerOrderApi.tsx';
import {
  useCategoryAddMutation, useCategoryChangeMutation,
  useCategoryDeleteMutation,
  useCategoryListQuery,
  useCategoryQuery,
} from './categoryApi.tsx';
import { useImageQuery } from './imageApi.tsx';
import { usePublicProductListQuery, usePublicProductQuery } from './publicProductApi.tsx';
import {
  useSellerAddPhotoMutation,
  useSellerAllMembersQuery, useSellerChangeBankMutation,
  useSellerChangeDataMutation, useSellerDeleteBankMutation,
  useSellerDeletePhotoByAdminMutation, useSellerDeletePhotoMutation, useSellerGetBankQuery, useSellerInfoQuery,
} from './sellerApi.tsx';
import {
  useProductCreateMutation,
  useProductDeleteMutation,
  useProductDeleteImageMutation,
  useProductAddImageMutation,
  useProductModerateMutation,
  useProductSendToModerationMutation,
  useProductUpdateMutation,
  useProductDeleteOwnCardMutation,
  useProductDeleteOwnCardImageMutation,
  useProductListQuery,
} from './userProductApi.tsx';
import {
  useVendorAddMutation,
  useVendorQuery,
  useVendorDeleteMutation,
  useVendorChangeMutation,
  useVendorAddImageMutation,
  useVendorDeleteImageMutation,
  useVendorListQuery,
} from './vendorApi.tsx';
import React from 'react';


export const DemoApi = () => {
  // const adminToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjJAYWRtaW4ucnUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MDExNjkxOTEsImV4cCI6MTcwMTE3MDk5MX0.5BeZaPioZ09Jq4fJxIZtBiMb3UnL7Fo4MEBTxu0pP0M'
  // localStorage.setItem('token', adminToken)
  // const buyerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJidXllckBidXllci5ydSIsInJvbGUiOiJCVVlFUiIsImlhdCI6MTcwMTE3MDk4MiwiZXhwIjoxNzAxMTcyNzgyfQ.nAqy5BNOhXoodmYgJZhB5pc78UwrW6XHXxSuOn1AkqE'
  // localStorage.setItem('token', buyerToken)


/////////////////////////Admin
// @ts-ignore
  const { data: adminData, isFetching,isLoading, error } = useAdminInfoQuery();

//////////////////////////Auth
  const loginData = {
    confirmPassword: "Pupa123!",
    email: "pupa@pupa.ru",
    password: "Pupa123!",
  }
  const [authLogin, {
    // isFetching, isLoading, isError
  }] = useAuthLoginMutation();
  const handleSubmitLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    authLogin(loginData).unwrap()
    .then((userData) => {
      localStorage.setItem('token', userData.token);
      console.log(userData)
    })
      .catch((error) => {
      console.log(error);
    })
      .finally()
    };


  const [ authLogout,{
    // isFetching, isLoading, isError
  }] = useAuthLogoutMutation();
  const handleSubmitLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
 // @ts-ignore
    authLogout().unwrap()
      .then((userData) => {
      localStorage.removeItem('token');
      console.log(userData)
    })
      .catch((error) => {
      console.log(error);
    })
      .finally()
  };

  const changePassData = {
    confirmPassword: "Pupa321!",
    email: "pupa@pupa.ru",
    password: "Pupa321!",
  }
  const [authChangePass, {
    // isFetching, isLoading, isError
  }] = useAuthChangePasswordMutation();
  const handleSubmitChangePass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    authChangePass(changePassData).unwrap()
      .then((userData) => {
        console.log(userData)
    })
      .catch((error) => {
      console.log(error);
    })
  .finally()
  };

  const registerData = {
    "confirmPassword": "Buy54321!",
    "email": "buy12345@buy.ru",
    "name": "buyer",
    "password": "Buy54321!",
    "phone": "1234554321",
    "role": "BUYER",
    "status": "ACTIVE",
  }
  const [authRegister, {
    // isFetching, isLoading, isError
  }] = useAuthRegisterMutation();
  const handleSubmitRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
   authRegister(registerData).unwrap()
     .then((res) => {
      authLogin({
        confirmPassword: registerData['password'],
        email: res.email,
        password: registerData['password'],
      }).unwrap()
        .then((userData) => {
      localStorage.setItem('token', userData.token);
      console.log(userData)
    })
        .catch((error) => {
          console.log(error);
        })
     })
     .catch((error) => {
      console.log(error);
    })
.finally()
  };

//Buyer
// @ts-ignore
  const {} = useBuyerAllMembersQuery();
  const {} = useBuyerChangeInfoMutation();
// @ts-ignore
  const {} = useBuyerInfoQuery();
// @ts-ignore
  const {} = useBuyerFavoritesQuery();
  const {} = useBuyerAddFavoritesMutation();
  const {} = useBuyerDeleteFavoritesMutation();

//BuyerBasket
// @ts-ignore
  const {} = useBuyerBasketInfoQuery();
  const {} = useBuyerBasketAddItemMutation();
  const {} = useBuyerBasketDeleteItemMutation();

//BuyerOrder
// @ts-ignore
  const {} = useOrderAllQuery();
  const {} = useOrderMakeMutation();
// @ts-ignore
  const {} = useOrderInfoQuery();

//Category
// @ts-ignore
  const {} = useCategoryListQuery();
  const {} = useCategoryAddMutation();
// @ts-ignore
  const {} = useCategoryQuery();
  const {} = useCategoryDeleteMutation();
  const {} = useCategoryChangeMutation();

//Image
// @ts-ignore
  const { data: imageData } = useImageQuery();

//PublicProduct
  // @ts-ignore
  const { data: publicProductData } = usePublicProductQuery();
  // @ts-ignore
  const { data: publicProductListData } = usePublicProductListQuery();

//Seller
  // @ts-ignore
  const { data: sellerAllMembersData } = useSellerAllMembersQuery();
  const {  } = useSellerChangeDataMutation();
  const {  } = useSellerDeletePhotoByAdminMutation();
  // @ts-ignore
  const { data: sellerInfoData } = useSellerInfoQuery();
  const {  } = useSellerAddPhotoMutation();
  const {  } = useSellerDeletePhotoMutation();
  const {  } = useSellerDeleteBankMutation();
  const {  } = useSellerChangeBankMutation();
  // @ts-ignore
  const { data: sellerBankData} = useSellerGetBankQuery();

//UserProduct
  const {  } = useProductCreateMutation();
  const {  } = useProductDeleteMutation();
  const {  } = useProductDeleteImageMutation();
  const {  } = useProductAddImageMutation();
  const {  } = useProductModerateMutation();
  const {  } = useProductSendToModerationMutation();
  const {  } = useProductUpdateMutation();
  const {  } = useProductDeleteOwnCardMutation();
  const {  } = useProductDeleteOwnCardImageMutation();
  // @ts-ignore
  const { data: productListData } = useProductListQuery();

//Vendor
  const {  } = useVendorAddMutation();
  // @ts-ignore
  const { data: vendorData } = useVendorQuery();
  const {  } = useVendorDeleteMutation();
  const {  } = useVendorChangeMutation();
  const {  } = useVendorAddImageMutation();
  const {  } = useVendorDeleteImageMutation();
  // @ts-ignore
  const { data: vendorListData } = useVendorListQuery();


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // handleSubmitLogin(e);
    // handleSubmitRegister(e);
    // handleSubmitLogout(e);
    // handleSubmitChangePass(e);


   }
  return (
  <div>
    <h1>DEMO API</h1>
    <h2>Admin Request</h2>
    {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : isFetching ? (
      <>Fetching...use me to block submit button</>
    ) : adminData ? (
      <ol>
        <li>id {adminData.id}</li>
      <li>email {adminData.email}</li>
      <li>name {adminData.name}</li>
      </ol>
      ) : null}
    <button onClick={handleClick}>Try</button>
  </div>
  )
}
