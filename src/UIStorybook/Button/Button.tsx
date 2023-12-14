import { ButtonProps } from './ButtonTypes.tsx';
import styles from './Button.module.scss';

/**
 * Компонент кнопки.
 * Используется для создания интерактивных кнопок.
 */

export const Button = ({
  extClassName,
  buttonType,
  actionType,
  children,
  disabled,
  width,
  height,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={actionType}
      disabled={disabled}
      style={{width: `${width}`, height: `${height}`}}
      className={[styles.button, styles[`button_type_${buttonType}`], extClassName].join(' ')}
      {...props}
    >{children}</button>
  );
};
