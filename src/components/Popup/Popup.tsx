import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import {AiOutlineClose} from 'react-icons/ai';


export const Popup: FC<IPopup> = ({ children}) => {

	return (
		<div className={styles.popup}>
			<button className={styles.popup__closebtn}><AiOutlineClose className={styles.popup__closeicon}/></button>
			{children}
		</div>
	);
};
