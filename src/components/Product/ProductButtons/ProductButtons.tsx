import { useState } from 'react';

import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { Icons } from '../../../UIStorybook/Icons/Icons.tsx';

import styles from './ProductButtons.module.scss'
import { Checkbox } from '../../../UIStorybook/Checkbox/Checkbox.tsx';


interface IProductButtons {
  error: boolean;
}
const ProductButtons = ({error}: IProductButtons) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  return (
<>
        <div className={styles.productInfo__installation}>
          <Checkbox onCheck={() => console.log('test')} extClassName={styles.productInfo__checkbox} label='Добавить установку 2000 &#8381;' />
        </div>
        <div className={styles.productInfo__buttons}>
          <Button buttonType='primary' width='255px' height='55px' disabled={error}>В корзину</Button>
          <Button buttonType='link' onClick={handleClick} disabled={error}>{isLiked ? <Icons type='filledLike' size={35}/> :
            <Icons type='emptyLike' size={35}/>}</Button>
      </div>
  </>
  );
};

export default ProductButtons;
