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
  // const adminToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjJAYWRtaW4ucnUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MDEyNDc3NDcsImV4cCI6MTcwMTI0OTU0N30.1_pz8vJ0wpx3zfD1ccIkl2Bfe9rLkqoLLl9UCvq6TBE"
  // localStorage.setItem('token', adminToken)
  const buyerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdXBhQHB1cGEucnUiLCJyb2xlIjoiQlVZRVIiLCJpYXQiOjE3MDEyNDk3MDcsImV4cCI6MTcwMTI1MTUwN30.yR-9oMye-JI88T9ocdsubFNLgIE7shfBG4IiSYV0qGA'
  localStorage.setItem('token', buyerToken)


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
  const limit = 10;
  const start = 0;
  const { data: buyerAllData = [],
    // isFetching: isBuyerAllFetching,isLoading: isBuyerAllLoading, error: buyerAllError
  } = useBuyerAllMembersQuery({minId: start, pageSize: limit});
  // console.log('buyerAllData:')
  // console.log(buyerAllData)

  const buyerNewInfo = {
  "email": "pupa@pupa.ru",
  "name": "pupa",
  "phone": "9879879898"
  }
  const [buyerChangeInfo, {
    // isFetching, isLoading, isError
  }] = useBuyerChangeInfoMutation();
  const handleBuyerChangeInfo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  buyerChangeInfo(buyerNewInfo).unwrap()
    .then((userData) => {
      console.log(userData)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally()
};


  const id = 1
  const {data: buyerInfo,
    // isFetching: isBuyerInfoFetching,isLoading: isBuyerInfoLoading, error: buyerInfoError
  } = useBuyerInfoQuery(id);
  // console.log('buyerInfo:')
  // console.log(buyerInfo)

// @ts-ignore
  const {data: buyerFavourite, isFetching: isBuyerFavouriteFetching,isLoading: isBuyerFavouriteLoading, error: buyerFavouriteError} = useBuyerFavoritesQuery();
  // console.log('buyerFavourite:')
  // console.log(buyerFavourite)

  const [buyerAddFavorite, {
    // isFetching, isLoading, isError
  }] = useBuyerAddFavoritesMutation();
  const handleBuyerAddFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    buyerAddFavorite(id).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };

  const [buyerDeleteFavorite, {
    // isFetching, isLoading, isError
  }] = useBuyerDeleteFavoritesMutation();
  const handleBuyerDeleteFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    buyerDeleteFavorite(id).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


//////////////////////////////////////BuyerBasket
// @ts-ignore
  const {data: buyerBasketInfo, isFetching: isBuyerBasketInfoFetching,isLoading: isBuyerBasketInfoLoading, error: buyerBuyerBasketInfoError} = useBuyerBasketInfoQuery();
  // console.log('buyerBasketInfo:')
  // console.log(buyerBasketInfo)

  const addProductId = 1
  const installation = true
  const [buyerBasketAdd, {
    // isFetching, isLoading, isError
  }] = useBuyerBasketAddItemMutation();
  const handleBuyerBasketAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    buyerBasketAdd({productId: addProductId, installation: installation}).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };

  const [buyerBasketDelete, {
    // isFetching, isLoading, isError
  }] = useBuyerBasketDeleteItemMutation();
  const handleBuyerBasketDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    buyerBasketDelete(addProductId).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


//////////////////////////////////////BuyerOrder
// @ts-ignore
  const {data: orderAll, isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllError} = useOrderAllQuery();
  // console.log('orderAll:')
  // console.log(orderAll)

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
  // console.log('orderInfo:')
  // console.log(orderInfo)

/////////////////////////////////////////Category
  // @ts-ignore
  const {data: categoryList, isFetching: isCategoryListFetching,isLoading: isCategoryListLoading, error: categoryListErr} = useCategoryListQuery();
  // console.log('categoryList:')
  // console.log(categoryList)


  const category = {
   "name": "Новая Категория"
  }
  const [categoryAdd, {
    // isFetching, isLoading, isError
  }] = useCategoryAddMutation();
  const handleCategoryAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    categoryAdd(category).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


 const catId = 1
  const {data: categoryQuery,
    // isFetching: isOrderAllFetching,isLoading: isOrderAllLoading, error: orderAllErr
  } = useCategoryQuery(catId);
  // console.log('categoryQuery:')
  // console.log(categoryQuery)


  const [categoryDelete, {
    // isFetching, isLoading, isError
  }] = useCategoryDeleteMutation();
  const handleCategoryDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    categoryDelete(catId).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };

  const categoryChangeData =
  {
   "name": "Категория2"
  }
  const [categoryChange, {
    // isFetching, isLoading, isError
  }] = useCategoryChangeMutation();
  const handleCategoryChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    categoryChange({catId: catId, body: categoryChangeData}).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


////////////////////////////////////////Image
  const imageId = 1
  const { data: image,
    // isFetching,isLoading, error
  } = useImageQuery(imageId);
  // console.log('image:')
  // console.log(image)


/////////////////////////////////////PublicProduct
  const productId = 1
  const { data: product,
    // isFetching,isLoading, error
  } = usePublicProductQuery(productId);
  // console.log('product:')
  // console.log(product)

  const min = 5
  const max = 10
  const sort = 'NEWEST'
  const sortInfo = {
    "categories": [
      0
    ],
    "countries": [
      "CHINA"
    ],
    "licenses": [
      "DEMO"
    ],
    "priceMax": 0,
    "priceMin": 0,
    "sellerIds": [
      0
    ],
    "text": "string",
    "vendorIds": [
      0
    ]
  }
  // @ts-ignore
  const { data: productList, isFetching: isProductListFetching,isLoading: isProductListLoading, error: productListErr } = usePublicProductListQuery({minId: min, pageSize: max, sort: sort, body: sortInfo});
  // console.log('productList:')
  // console.log(productList)


///////////////////////////////////////////////////Seller

  const sellerMin = 3
  const sellerMax = 12
  // @ts-ignore
  const { data: sellerAll,
    // isFetching,isLoading, error
  } = useSellerAllMembersQuery({minId: sellerMin, pageSize: sellerMax});
  // console.log('productList:')
  // console.log(productList)

  const sellerNewData = {
    "email": "seller2@mail.ru",
    "name": "seller2",
    "phone": "5556667777"
  }
  const [sellerChange, {
    // isFetching, isLoading, isError
  }] = useSellerChangeDataMutation();
  const handleSellerChangeData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sellerChange(sellerNewData).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


  const sellerId = 1
  const [sellerDeletePhotoByAdmin, {
    // isFetching, isLoading, isError
  }] = useSellerDeletePhotoByAdminMutation();
  const handleSellerDeletePhotoByAdmin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sellerDeletePhotoByAdmin(sellerId).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };

  const { data: sellerInfo,
    // isFetching,isLoading, error
  } = useSellerInfoQuery(sellerId);
  // console.log('sellerInfo:')
  // console.log(sellerInfo)

  const imgUrl = 'https://unsplash.com/photos/a-decorated-christmas-tree-in-a-living-room-NFfBlixWJLk'
  const [sellerAddPhoto, {
    // isFetching, isLoading, isError
  }] = useSellerAddPhotoMutation();
  const handleSellerAddPhoto = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sellerAddPhoto(imgUrl).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


  const [sellerDeletePhoto, {
    // isFetching, isLoading, isError
  }] = useSellerDeletePhotoMutation();
  const handleSellerDeletePhoto = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sellerDeletePhoto().unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


  const [sellerDeleteBank, {
    // isFetching, isLoading, isError
  }] = useSellerDeleteBankMutation();
  const handleSellerDeleteBank = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sellerDeleteBank(imgUrl).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };

  const bank = '12345678900'
  const [sellerChangeBank, {
    // isFetching, isLoading, isError
  }] = useSellerChangeBankMutation();
  const handleSellerChangeBank = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sellerChangeBank(bank).unwrap()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };


  const { data: sellerBank,
    // isFetching,isLoading, error
  } = useSellerGetBankQuery(sellerId);
  // console.log('sellerBank:')
  // console.log(sellerBank)


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
  // console.log('vendor:')
  // console.log(vendor)

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
    // handleBuyerBasketAdd(e);
    // handleBuyerBasketDelete(e);
    handleBuyerChangeInfo(e);
    handleBuyerAddFavorite(e);
    // handleBuyerDeleteFavorite(e);
    // handleOrderMake(e);
    // handleCategoryAdd(e);
    // handleCategoryDelete(e);
    // handleCategoryChange(e);
    // handleSellerChangeData;
    // handleSellerDeletePhotoByAdmin;
    // handleSellerAddPhoto;
    // handleSellerDeletePhoto;
    // handleSellerDeleteBank;
    // handleSellerDeleteBank;
    // handleSellerChangeBank;

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
