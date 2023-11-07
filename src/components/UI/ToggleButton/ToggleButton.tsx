import { FC, ChangeEvent, useState, useEffect, useCallback, useRef } from 'react';
import styles from './ToggleButton.module.scss';
import { useDispatch } from 'react-redux';
import { openLoginPopup } from '../../Popup/AuthSlise';
import { openRegisterPopup } from '../../Popup/RegSlise';
import { IToggleButton } from './ToggleButtonTypes';



export const ToggleButton: FC<IToggleButton> = ({ label, buttonText,
	itsLoginPopup }) => {
		const dispatch = useDispatch();
		// const [checked, setChecked] = useState(false);
		const onClick = useCallback((event: ChangeEvent<HTMLInputElement>) => {
			console.log(event.target.checked)
			if (event.target.checked) {
				dispatch(openLoginPopup(false));
				dispatch(openRegisterPopup(true));

			} else {
				dispatch(openRegisterPopup(false));
				dispatch(openLoginPopup(true));
			}
		}, [])

	return (
		<label className={styles.wrapper} htmlFor="toggleSwitch" >
			<input type="checkbox" className={styles.toggle} id="toggleSwitch"
			 onChange={onClick}

			 />
			<p className={styles.label}>{label ?? ''}</p>
		</label>
	);
};
