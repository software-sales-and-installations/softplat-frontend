import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import { ChooseRole } from '../ChooseRole/ChooseRole';
import { CHOOSE_ROLE } from '../../utils/constants';
import { popupState } from './PopupSlice';
import { chooseRoleState } from '../ChooseRole/ChooseRoleSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { useAppDispatch } from '../../services/redux/store';

export const Popup: FC<IPopup> = ({ children}) => {
	const token = localStorage.getItem('token')
	const dispatch = useAppDispatch();
	function handlePopupClose(){
		dispatch(popupState(false));
		dispatch(chooseRoleState('Я покупатель'))
	}
	const MyRole = useSelector((state: RootState) => state.chooseRole.title);
	return (
		<>
			<button onClick={()=>handlePopupClose()} className={styles.popup__closebtn}/>
			{children}
			{!token ? (
				MyRole==='Забыли пароль?'? null : 
			<div className={styles.popup__btncontainer}>
				{MyRole==='Я админ'? null :
				(CHOOSE_ROLE.map((i)=>{
					return(
						(MyRole===i.title) ? null : <ChooseRole key={i.id} title={i.title}/>
					)
				}))}
			</div>) : null}
		</>
	);
};
