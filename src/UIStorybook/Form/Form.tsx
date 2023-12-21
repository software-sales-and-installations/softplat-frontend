import { Button } from '../Button/Button.tsx';
import { FormProps } from './FormTypes.tsx';
import styles from './Form.module.scss';
const Form = ({
                name,
  formType,
                extClassName,
  errorText,
                buttonType,
                buttonText,
                secondButtonText,
                onSubmit,
                width,
                height,
                children,
  disabled,
  ...props
              }: FormProps) => {
  return (
    <form
      className={[styles.form, styles[`form_type_${formType}`], extClassName].join(' ')}
      name={name}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
      <div className={[styles.form__buttonContainer, styles[`form_type_${formType}_buttonContainer`]].join(' ')}
      >
        <div className={styles.form__errorWrapper}>
        <span className={styles.form__error}>{errorText}</span>
          </div>
        <Button disabled={disabled} width={width} height={height} buttonType={buttonType}
                type='submit' {...props}>{buttonText}</Button>
        {secondButtonText && <Button width={width} height={height} buttonType='minorSecondary'
                                     type='submit' {...props}>{secondButtonText}</Button>}
      </div>
    </form>
  );
};

export default Form;
