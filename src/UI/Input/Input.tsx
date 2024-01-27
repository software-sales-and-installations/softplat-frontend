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
	helpText,
	typeError,
                                    isPhone,
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
			: inputType === 'confirmPassword' && isPasswordHidden === true
			? 'password'
			: inputType==='oldPass' && isPasswordHidden===true
			? 'password'
			: inputType;

	return (
		<div className={classNames(styles.input__container, isPhone ? styles.input__container_type_phone: '') }>
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
						autoComplete='new-password'
            aria-autocomplete='none'
						{...validation}
						onChange={ onChange ? onChange: (e) => {
										validation.onChange(e)
								  }
						}
						className={classNames(styles.input__field, error? styles.input__field_type_error: '', isPhone ? styles.input__field_type_phone: '', readOnly ? styles.input__field_disabled : '')}
						type={inputTextType}
						name={inputType}
						id={inputType}
						readOnly={readOnly}
						max={max}
						defaultValue={defaultValue}
						maxLength={inputTextType === 'date' ? 8 : undefined}
						value={readOnly && value ? value : undefined}
					/>
					<span className={classNames(styles.input__error, typeError==='dataError'? styles.input__error_type_data: (typeError==='addCardError'?styles.input__error_type_addCardError:''))}>{error ? error : (helpText?
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


