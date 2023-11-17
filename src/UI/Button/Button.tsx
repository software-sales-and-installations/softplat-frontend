import { FC } from 'react';
import style from './Button.module.scss'
import { IButtonProps  } from './ButtonTypes';
import classNames from 'classnames';

export const Button: FC<IButtonProps > = ({ type = 'button', children, onClick, mode, isDisabled}) => {
  return (
    <button onClick={onClick} disabled={isDisabled} type={type} className={classNames(style.button, style[mode], isDisabled ? style[`${mode}_inactive`] : '')}>
      {children}
    </button>
  )
}
