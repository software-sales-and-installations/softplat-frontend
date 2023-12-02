import PropTypes from 'prop-types';
import './Input.scss';

/**
 * Компонент инпута.
 * Используется для создания интерактивных инпутов.
 */
export const Input = ({
                        inputId,
                        variant,
                        name,
                        onChange,
                        value,
                        placeholder,
                        type,
                        minLength,
                        maxLength,
                        isValid,
                        pattern,
                      }) => {
  return (
    <input
      name={name}
      id={inputId}
      onChange={(e) => onChange(e)}
      value={value}
      className={`input input_kind_${variant} ${
        isValid ? '' : 'input_invalid'
      }`}
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
    />
  );
};

Input.propTypes = {
  /**
   * Вариант внешнего вида инпута
   */
  variant: PropTypes.oneOf([
    'form',
    'password',
    'info',
    'search',
    'price',
    'other',
  ]),
  /**
   * Действие, выполняемое при изменении значения инпута
   */
  // onChange: PropTypes.func,
  /**
   * Id инпута, используется также для привязки ярлыка
   */
  inputId: PropTypes.string,
  /**
   * Имя инпута
   */
  name: PropTypes.string,
  /**
   * Значение инпута
   */
  value: PropTypes.string,
  /**
   * Текст плейсхолдера
   */
  placeholder: PropTypes.string,
  /**
   * Индикатор видимости символов пароля
   */
  type: PropTypes.string,
};

Input.defaultProps = {
  variant: 'form',
  onChange: undefined,
  inputId: undefined,
  name: undefined,
  value: undefined,
  placeholder: undefined,
  type: undefined,
  children: undefined,
  required: true,
  minLength: '2',
  maxLength: '30',
};
