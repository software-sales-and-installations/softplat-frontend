import styles from './Input.module.scss';
import { IInput } from './InputTypes';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

export const Input: FC<IInput> = ({
	inputType,
	labelText,
	value,
	readOnly = false,
	showPasswordButton = false,
	validation,
	error = '',
	onChange,
	max,
	defaultValue,
	helpText
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  useEffect(() => {
    setIsPasswordHidden(true);
  }, []);

  function togglePassword() {
    setIsPasswordHidden(!isPasswordHidden);
  }
  const inputTextType =
    inputType === 'password' && isPasswordHidden === false
      ? 'text'
      : inputType === 'confirmPassword'
      ? 'password'
      : inputType;

	return (
		<div className={styles.input__container}>
			<div className={styles.input__hints}>
						{labelText ? (
							<label
								className={styles.input__label}
								htmlFor={inputType}
							>
								{labelText}
							</label>
						) : null}
						
					</div>
					<input
						{...validation}
						onChange={ onChange ? onChange: (e) => {
										validation.onChange(e) 
								  }
						}
						className={styles.input__field}
						type={inputTextType}
						name={inputType}
						id={inputType}
						readOnly={readOnly}
						max={max}
						defaultValue={defaultValue}
						maxLength={inputTextType === 'date' ? 8 : undefined}
						value={readOnly && value ? value : undefined}
					/>
					<span className={styles.input__error}>{error ? error : (inputType === 'password'? 
						<p className={styles.input__help}>{helpText}</p>
						: '')}
					</span>
					{showPasswordButton ? (
						<button
						className={classNames(styles.input__button, !isPasswordHidden ? styles.input__button_clicked : '')}
							type="button"
							onClick={togglePassword}
						/>
					) : null}
		</div>
	);
};
