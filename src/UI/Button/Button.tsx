import { FC } from 'react';
import style from './Button.module.scss'
import { IButtonProps  } from './ButtonTypes';

export const Button: FC<IButtonProps > = ({ type = 'button', children, onClick, mode, isDisabled = false }) => {
  return (
    <button disabled={isDisabled} type={type} className={`${style.button} + ${style[mode]}`}>
      {children}
    </button>
  )
}
