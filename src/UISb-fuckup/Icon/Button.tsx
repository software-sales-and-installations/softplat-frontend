import PropTypes from 'prop-types';
import './Icon.scss';

/**
 * Компонент кнопки.
 * Используется для создания интерактивных кнопок.
 */
export const Icon = ({
                         variant = 'primary',
                         color = 'fill',
                         size = 'medium',
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
      ` button_size_${size}` +
      ` button_color_${color}` +
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

Icon.propTypes = {
  /**
   * Вариант внешнего вида кнопки
   */
  variant: PropTypes.oneOf(['primary', 'square', 'link']),
  /**
   * Вариант типа кнопки
   */
  type: PropTypes.oneOf(['button', 'submit']),
  /**
   * Вариант заливки кнопки
   */
  color: PropTypes.oneOf(['fill', 'empty', 'dis', 'blue-empty']),
  /**
   * Вариант размера кнопки
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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

Icon.defaultProps = {
  variant: 'primary',
  color: 'fill',
  type: 'button',
  size: 'medium',
  width: 'auto',
  children: '',
  onClick: undefined,
  className: '',
};
