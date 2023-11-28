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
  const adminToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjJAYWRtaW4ucnUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MDEyMDAzNDUsImV4cCI6MTcwMTIwMjE0NX0.YuvHQ_8iNaii_jd6rOP1z_mBWbrTCfhQO83spME8v0A"
  localStorage.setItem('token', adminToken)
  // const buyerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJidXllckBidXllci5ydSIsInJvbGUiOiJCVVlFUiIsImlhdCI6MTcwMTE3MDk4MiwiZXhwIjoxNzAxMTcyNzgyfQ.nAqy5BNOhXoodmYgJZhB5pc78UwrW6XHXxSuOn1AkqE'
  // localStorage.setItem('token', buyerToken)


/////////////////////////Admin
// @ts-ignore
  const { data: adminData, isFetching: isAdminFetching,isLoading: isAdminLoading, error: adminError } = useAdminInfoQuery();

//////////////////////////Auth
  const loginData = {
    confirmPassword: "Pupa321!",
    email: "pupa@pupa.ru",
    password: "Pupa321!",
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

///////////////////////////////////Buyer
// @ts-ignore
  const { data: buyerAllData, isFetching: isBuyerAllFetching,isLoading: isBuyerAllLoading, error: buyerAllError } = useBuyerAllMembersQuery();
  console.log('buyerAllData:')
  console.log(buyerAllData)

  const {} = useBuyerChangeInfoMutation();

  const id = 1
  const {data: buyerInfo,
    // isFetching: isBuyerInfoFetching,isLoading: isBuyerInfoLoading, error: buyerInfoError
  } = useBuyerInfoQuery(id);
  console.log('buyerInfo:')
  console.log(buyerInfo)

// @ts-ignore
  const {data: buyerFavourite, isFetching: isBuyerFavouriteFetching,isLoading: isBuyerFavouriteLoading, error: buyerFavouriteError} = useBuyerFavoritesQuery();
  console.log('buyerFavourite:')
  console.log(buyerFavourite)

  const {} = useBuyerAddFavoritesMutation();

  const {} = useBuyerDeleteFavoritesMutation();

//////////////////////////////////////BuyerBasket
// @ts-ignore
  const {data: buyerBasketInfo, isFetching: isBuyerBasketInfoFetching,isLoading: isBuyerBasketInfoLoading, error: buyerBuyerBasketInfoError} = useBuyerBasketInfoQuery();
  console.log('buyerBasketInfo:')
  console.log(buyerBasketInfo)


  const {} = useBuyerBasketAddItemMutation();


  const {} = useBuyerBasketDeleteItemMutation();

//////////////////////////////////////BuyerOrder
// @ts-ignore
  const {data: orderAll, isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllError} = useOrderAllQuery();
  console.log('orderAll:')
  console.log(orderAll)

  const basket = {
    "basketPositionIds": [
      0
    ]
  }
  const [orderMake, {
    // isFetching, isLoading, isError
  }] = useOrderMakeMutation();
  const handleOrderMake = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    orderMake(basket).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };

  const idOrderInfo = 1
  const {data: orderInfo,
    // isFetching: isOrderInfoFetching,isLoading: isOrderInfoLoading, error: orderInfoError
  } = useOrderInfoQuery(idOrderInfo);
  console.log('orderInfo:')
  console.log(orderInfo)

/////////////////////////////////////////Category
// @ts-ignore
  const {data: categoryList, isFetching: isCategoryListFetching,isLoading: isCategoryListLoading, error: categoryListErr} = useCategoryListQuery();
  console.log('categoryList:')
  console.log(categoryList)

  const {} = useCategoryAddMutation();


 const catId = 1
  const {data: categoryQuery,
    // isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllErr
  } = useCategoryQuery(catId);
  console.log('categoryQuery:')
  console.log(categoryQuery)

  const {} = useCategoryDeleteMutation();


  const {} = useCategoryChangeMutation();

//Image
  const imageId = 1
  const { data: image,
    // isFetching,isLoading, error
  } = useImageQuery(imageId);
  console.log('image:')
  console.log(image)


/////////////////////////////////////PublicProduct
  const productId = 1
  const { data: product,
    // isFetching,isLoading, error
  } = usePublicProductQuery(productId);
  console.log('product:')
  console.log(product)

  // @ts-ignore
  const { data: productList, isFetching: isProductListFetching,isLoading: isProductListLoading, error: productListErr } = usePublicProductListQuery();
  console.log('productList:')
  console.log(productList)

///////////////////////////////////////////////////Seller
  // @ts-ignore
  // const { data: orderAll, isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllErr } = useSellerAllMembersQuery();


  const {  } = useSellerChangeDataMutation();


  const {  } = useSellerDeletePhotoByAdminMutation();


  const sellerId = 1
  const { data: sellerInfo,
    // isFetching,isLoading, error
  } = useSellerInfoQuery(sellerId);
  console.log('sellerInfo:')
  console.log(sellerInfo)

  const {  } = useSellerAddPhotoMutation();
  const {  } = useSellerDeletePhotoMutation();
  const {  } = useSellerDeleteBankMutation();
  const {  } = useSellerChangeBankMutation();


  const sellerBankId = 1
  const { data: sellerBank,
    // isFetching,isLoading, error
  } = useSellerGetBankQuery(sellerBankId);
  console.log('sellerBank:')
  console.log(sellerBank)


/////////////////////////////////////////UserProduct
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
  // const { data: orderAll, isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllErr } = useProductListQuery();



/////////////////////////////////////////////Vendor
  const {  } = useVendorAddMutation();


  const vendorId = 1
  const { data: vendor,
    // isFetching,isLoading, error
  } = useVendorQuery(vendorId);
  console.log('vendor:')
  console.log(vendor)

  const {  } = useVendorDeleteMutation();
  const {  } = useVendorChangeMutation();
  const {  } = useVendorAddImageMutation();
  const {  } = useVendorDeleteImageMutation();


  // @ts-ignore
  // const { data: orderAll, isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllErr } = useVendorListQuery();


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // handleSubmitLogin(e);
    // handleSubmitRegister(e);
    // handleSubmitLogout(e);
    // handleSubmitChangePass(e);
    handleOrderMake(e);

   }
  return (
  <div>
    <h1>DEMO API</h1>
    <h2>Admin Request</h2>
    {adminError ? (
      <>Oh no, there was an error</>
    ) : isAdminLoading ? (
      <>Loading...</>
    ) : isAdminFetching ? (
      <>Fetching...use me to block submit button</>
    ) : adminData ? (
      <ol>
        <li>id {adminData.id}</li>
      <li>email {adminData.email}</li>
      <li>name {adminData.name}</li>
      </ol>
      ) : null}
    <br/>
    <button onClick={handleClick}>Try</button>
  </div>
  )
}
