import styles from './Input.module.scss';
import { IInput } from './InputTypes';

import { FC, useEffect, useState } from 'react';

export const Input: FC<IInput> = ({
	inputType,
	labelText,
	value,
	color = 'white',
	readOnly = false,
	showPasswordButton = false,
	validation,
	error = '',
	onChange,
	max,
	defaultValue,
}) => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	useEffect(() => {
		setIsPasswordHidden(true);
	}, []);

	// function togglePassword() {
	// 	setIsPasswordHidden(!isPasswordHidden);
	// }
	const inputTextType =
		inputType === 'password' && isPasswordHidden === false
			? 'text'
			: inputType === 'repeatPassword'
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
						onChange={
							onChange
								? onChange
								: (e) => {
										validation.onChange(e);
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
					{error ? <span className={styles.input__error}>{error}</span> : null}
					{/* {showPasswordButton ? (
						<button
							className={styles.input__button}
							type="button"
							onClick={togglePassword}
						/>
					) : null} */}
		</div>
	);
};


