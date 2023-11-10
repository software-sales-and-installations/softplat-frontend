import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import {AiOutlineClose} from 'react-icons/ai';
import { ChooseRole } from '../UI/ChooseRole/ChooseRole';
import { CHOOSE_ROLE } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { popupState } from './PopupSlice';
import { chooseRoleState } from '../UI/ChooseRole/ChooseRoleSlice';

export const Popup: FC<IPopup> = ({ children}) => {
	const dispatch = useDispatch();
	function handlePopupClose(){
		dispatch(popupState(false));
		dispatch(chooseRoleState('Я покупатель'))
	}
	return (
		<>
			<button onClick={()=>handlePopupClose()} className={styles.popup__closebtn}><AiOutlineClose className={styles.popup__closeicon}/></button>
			{children}
			{CHOOSE_ROLE.map((i)=>{
				return(
					<ChooseRole key={i.id} title={i.title}/>
				)
			})}
		</>
	);
};
