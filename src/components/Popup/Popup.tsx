import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import {AiOutlineClose} from 'react-icons/ai';
import { ChooseRole } from '../UI/ChooseRole/ChooseRole';
import { CHOOSE_ROLE } from '../../utils/constants';


export const Popup: FC<IPopup> = ({ children}) => {

	return (
		<div className={styles.popup}>
			<button className={styles.popup__closebtn}><AiOutlineClose className={styles.popup__closeicon}/></button>
			{children}
			{CHOOSE_ROLE.map((i)=>{
				return(
					<ChooseRole key={i.id} title={i.title}/>
				)
			})}
			

		</div>
	);
};
