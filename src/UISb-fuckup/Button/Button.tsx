import PropTypes from 'prop-types';
import './Button.scss';
import { FC } from 'react';
import { IButtonProps } from './ButtonTypes.tsx';

/**
 * Компонент кнопки.
 * Используется для создания интерактивных кнопок.
 */
export const Button: FC<IButtonProps > = ({
                         variant = 'primary',
                         type = 'button',
                         width = 'auto',
                         children,
                         onClick,
                         disabled = false,
                         className = '',
                       }) => (
  <button
    className={
      'button' +
      ` button_variant_${variant}` +
      ` ${className ? className : ''}`
    }
    type={type}
    onClick={onClick}
    style={{ width }}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  /**
   * Вариант внешнего вида кнопки
   */
  variant: PropTypes.oneOf(['primary',  'secondary', 'decline', 'agree', 'green', 'gray', 'square', 'link']),
  /**
   * Вариант типа кнопки
   */
  type: PropTypes.oneOf(['button', 'submit']),
  /**
   * Ширина кнопки
   */
  width: PropTypes.string,
  /**
   * Текст кнопки
   */
  children: PropTypes.node,
  /**
   * Действие, выполняемое при нажатии на кнопку
   */
  onClick: PropTypes.func,
  /**
   * Дополнительный класс
   */
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  width: 'auto',
  children: '',
  onClick: undefined,
  className: '',
};
