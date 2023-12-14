import { useEffect } from "react";
import { useBuyerBasketInfoQuery } from "../../utils/api/buyerBasketApi";
import { setCartItems } from "../redux/slices/cart/cart";
import { useAppDispatch } from "../redux/store";

export const useLoadCart = () => {
    const dispatch = useAppDispatch();
    const userId = localStorage.getItem('userId');
    
    
    const { data: basketInfo } = useBuyerBasketInfoQuery(undefined);
    
    useEffect(() => {
      const fetchData = async () => {
        if (basketInfo && userId) {
          dispatch(setCartItems(basketInfo.productsInBasket));
          console.log(basketInfo);
    
          console.log('Сработала загрузка корзины из мутациии');
        }
      };
    
      fetchData();
    }, [basketInfo]);
    
    
}

