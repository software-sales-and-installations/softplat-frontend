import { InputProps } from './InputTypes.tsx';
import styles from './Input.module.scss';
/**
 * Компонент инпута.
 * Используется для создания интерактивных инпутов.
 */
export const Input = ({
                        extClassName,
                        inputId,
                        inputVariant,
                        name,
                        onChange,
                        value,
                        placeholder,
                        type,
                        minLength,
                        maxLength,
                        isValid,
                        pattern,
                        autoFocus,
                        ...props
                      }: InputProps) => {
  return (
    <input
      name={name}
      id={inputId}
      onChange={(e) => onChange(e)}
      value={value}
      className={[styles.input, styles[`input_variant_${inputVariant}`], !isValid && styles.input_invalid, extClassName].join(' ')}
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      autoFocus={autoFocus}
      {...props}
    />
  );
};

