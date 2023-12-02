import './InputWrapper.scss';

export const InputWrapper = ({
                               inputId,
                               labelText,
                               variant,
                               errorText,
                               children,
                             }) => (
  <div className={`inputWrapper inputWrapper_kind_${variant}`}>
    <label htmlFor={inputId} className='inputWrapper__label'>
      {labelText}
    </label>
    {children}
    <span
      className={`inputWrapper__error inputWrapper__error_kind_${variant} ${inputId}-error`}
    >
      {errorText}
    </span>
  </div>
);
