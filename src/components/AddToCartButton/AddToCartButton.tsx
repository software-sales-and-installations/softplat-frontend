import styles from '../AddToCartButton/AddToCartButton.module.scss';
import { Button } from '../../UIStorybook/Button/Button.tsx';
import { useAppDispatch, useAppSelector } from '../../services/redux/store.ts';
import { useBuyerBasketAddItemMutation, useBuyerBasketDeleteItemMutation } from '../../utils/api/buyerBasketApi.tsx';
import { setCartItems } from '../../services/redux/slices/cart/cart.tsx';

interface IAddToCartButton {
  id: string | undefined;
  isInstallationSelected: boolean;
  type: 'big' | 'small';
}

export const AddToCartButton = ({id, isInstallationSelected, type}: IAddToCartButton) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(store => store.cart?.items);
  const countItemInCart = cart.filter(
    item =>
      (item.productResponseDto.id.toString() === id)
  );
  const totalCount = (countItemInCart[0]?.quantity || 0) + (countItemInCart[1]?.quantity || 0)

  const [buyerBasketAdd, { isError: addItemError }] = useBuyerBasketAddItemMutation();

  const handleAddToCart = () => {
    buyerBasketAdd({productId: id, installation: isInstallationSelected}).unwrap()
  .then((res: any) => {
    dispatch(setCartItems(res.productsInBasket));
    })
      .catch((error: any) => {
    console.error('Error adding item to cart:', error);
      })
  }

  const [buyerBasketDelete] = useBuyerBasketDeleteItemMutation();

  const handleRemoveFromCart = () => {
    buyerBasketDelete({productId: id, installation: isInstallationSelected}).unwrap()
      .then((res: any) => {
        if (totalCount === 1) {
          dispatch(setCartItems([]));
        } else {
        dispatch(setCartItems(res.productsInBasket));
        }
      })
      .catch((error: any) => {
        console.error('Error deleting item from cart:', error);
      })
  }

  return (
    <>
  {totalCount > 0 ? (
    <div className={[styles.addToCart__countButton, styles[`addToCart__countButton_type_${type}`]].join(' ')}>
    <button
      className={[styles.addToCart__changeQuantity, styles[`addToCart__changeQuantity_type_${type}`]].join(' ')}
        onClick={handleRemoveFromCart}
      >
        -
      </button>
      <span>{totalCount}</span>
      <button
        className={[styles.addToCart__changeQuantity, styles[`addToCart__changeQuantity_type_${type}`]].join(' ')}
        onClick={handleAddToCart}
        disabled={
          addItemError ||
          totalCount === countItemInCart[0].productResponseDto.quantity
        }
      >
        +
      </button>
    </div>
  ) : (
        <Button
          buttonType="primary"
          onClick={handleAddToCart}
          disabled={addItemError}
          extClassName={[styles.addToCart__addButton, styles[`addToCart__addButton_type_${type}`]].join(' ')}
        >
          Добавить в корзину
        </Button>
  )}
      </>
  )
}
