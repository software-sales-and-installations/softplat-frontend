import styles from './InputWrapper.module.scss';
import { InputWrapperProps } from './InputWrapperTypes.tsx';

/**
 * Компонент Обертки инпута.
 * Содержит в себе ярлык, вывод подсказок и ошибок инпута.
 */

export const InputWrapper = ({
                               inputId,
                               labelText,
                               errorText,
                               hintText,
                               extClassName,
                               children,
                             }:InputWrapperProps) => (
  <div className={[styles.inputWrapper, extClassName].join(' ')}>
    <label htmlFor={inputId} className={[styles.inputWrapper__label, extClassName].join(' ')}>
      {labelText}
    </label>
    {children}
    {!errorText ? (<span
      className={[styles.inputWrapper__hint, extClassName, styles[`${inputId}-hint`]].join(' ')}
    >
      {hintText}
    </span>) :
      (<span
      className={[styles.inputWrapper__error, extClassName, styles[`${inputId}-error`]].join(' ')}
    >
      {errorText}
    </span>)}
  </div>
);
