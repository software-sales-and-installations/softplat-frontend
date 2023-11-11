import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import {AiOutlineClose} from 'react-icons/ai';
import { ChooseRole } from '../ChooseRole/ChooseRole';
import { CHOOSE_ROLE } from '../../../utils/constants';
import { useDispatch } from 'react-redux';
import { popupState } from './PopupSlice';
import { chooseRoleState } from '../ChooseRole/ChooseRoleSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/redux/store';

export const Popup: FC<IPopup> = ({ children}) => {
	const dispatch = useDispatch();
	function handlePopupClose(){
		dispatch(popupState(false));
		dispatch(chooseRoleState('Я покупатель'))
	}
	const MyRole = useSelector((state: RootState) => state.chooseRole.title);
	return (
		<>
			<button onClick={()=>handlePopupClose()} className={styles.popup__closebtn}><AiOutlineClose className={styles.popup__closeicon}/></button>
			{children}
			<div className={styles.popup__btncontainer}>
			{CHOOSE_ROLE.map((i)=>{
				return(
					MyRole===i.title ? null : <ChooseRole key={i.id} title={i.title}/>
				)
			})}
			</div>
		</>
	);
};
