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
  ...props
}: ButtonProps) => {
  return (
    <button
      type={actionType}
      className={[styles.button, styles[`button_type_${buttonType}`], extClassName].join(' ')}
      {...props}
    >{children}</button>
  );
};
