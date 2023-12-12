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
  ...props
}: ButtonProps) => {
  return (
    <button
      type={actionType}
      disabled={disabled}
      className={[styles.button, styles[`button_type_${buttonType}`], extClassName].join(' ')}
      {...props}
    >{children}</button>
  );
};
