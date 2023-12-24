import { InputProps } from './InputTypes.tsx';
import styles from './Input.module.scss';
/**
 * Компонент инпута.
 * Используется для создания интерактивных инпутов.
 */
export const Input = ({
                        extClassName,
                        inputId,
                        inputType,
                        type,
                        isValid,
                        width,
                        height,
                        ...props
                      }: InputProps) => {
  return (
    <input
      id={inputId}
      className={[styles.input, styles[`input_type_${inputType}`], isValid && styles.input_invalid, extClassName].join(' ')}
      type={type}
      style={{width: `${width}`, height: `${height}`}}
      {...props}
    />
  );
};

