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


export const DemoApi = () => {
  const adminToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjJAYWRtaW4ucnUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MDExMTU4MTYsImV4cCI6MTcwMTExNzYxNn0.DemxDkTqrIqxMMSemaGHvqoC_gM7tA4oDijWRENgyVU'
  localStorage.setItem('token', adminToken)

//Admin
// @ts-ignore
  const { data: adminData, error, isLoading } = useAdminInfoQuery();

//Auth
  const {} = useAuthLoginMutation();
  const {} = useAuthLogoutMutation();
  const {} = useAuthChangePasswordMutation();
  const {} = useAuthRegisterMutation();

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

  return (
  <div>
    <h1>DEMO API</h1>
    {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : adminData ? (
      <ol>AdminData
        <li>id {adminData.id}</li>
      <li>email {adminData.email}</li>
      <li>name {adminData.name}</li>
      </ol>
      ) : null}
  </div>
  )
}
