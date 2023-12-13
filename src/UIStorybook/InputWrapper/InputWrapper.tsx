import styles from './InputWrapper.module.scss';
import { InputWrapperProps } from './InputWrapperTypes.tsx';

/**
 * Компонент Обертки инпута.
 * Содержит в себе ярлык, вывод подсказок и ошибок инпута.
 */

export const InputWrapper = ({
                               inputId,
                               labelText,
                               inputWrapperType,
                               errorText,
                               hintText,
                               children,
                             }:InputWrapperProps) => (
  <div className={[styles.inputWrapper, styles[`inputWrapper_type_${inputWrapperType}`]].join(' ')}>
    <label htmlFor={inputId} className={styles.inputWrapper__label}>
      {labelText}
    </label>
    {children}
    {!errorText ? (<span
      className={[styles.inputWrapper__hint, styles[`inputWrapper__hint_type_${inputWrapperType}`], styles[`${inputId}-hint`]].join(' ')}
    >
      {hintText}
    </span>) :
      (<span
      className={[styles.inputWrapper__error, styles[`inputWrapper__error_type_${inputWrapperType}`], styles[`${inputId}-error`]].join(' ')}
    >
      {errorText}
    </span>)}
  </div>
);
