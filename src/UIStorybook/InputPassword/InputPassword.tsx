import styles from './InputPassword.module.scss';
import { InputPasswordTypes } from './InputPasswordTypes.tsx';
import { Button } from '../Button/Button.tsx';
import { Icons } from '../Icons/Icons.tsx';
import { Input } from '../Input/Input.tsx';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

export const InputPassword: FC<InputPasswordTypes> = ({
	showPasswordButton = false,
  inputType,
  inputId,
...props
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
			: inputType;

	return (
    <>
					<Input
						type={inputTextType}
            inputId={inputId}
            width='420px'
            height='40px'
            {...props}
					/>
					{showPasswordButton && (
						<Button
						className={classNames(styles.input__button, !isPasswordHidden ? styles.input__button_clicked : '')}
							type="button"
							onClick={togglePassword}
            ><Icons type='emptyLike' size={35}/></Button>
					)}
      </>
	);
};


