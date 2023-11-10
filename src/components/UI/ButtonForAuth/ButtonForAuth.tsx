import { FC } from 'react';
import styles from './ButtonForAuth.module.scss';
import classNames from 'classnames';

interface IButtonForAuth {
    isValid: boolean;
	title: string;
	itsLoginPopup?: boolean;
}

export const ButtonForAuth: FC<IButtonForAuth> = ({isValid,
	title,
	itsLoginPopup,}) => {
    return (
        <button
			type="submit"
			className={classNames(
				styles.popup__submit_button,
				isValid ? '' : styles.popup__submit_button_inactive
			)}
			disabled={!isValid}
		>
			{title}
		</button>
    )
}
