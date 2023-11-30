import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import { ChooseRole } from '../ChooseRole/ChooseRole';
import { CHOOSE_ROLE } from '../../utils/constants';
import { popupState } from './PopupSlice';
import { chooseRoleState } from '../ChooseRole/ChooseRoleSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';
import { useLocation } from 'react-router-dom';

export const Popup: FC<IPopup> = ({ children}) => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	function handlePopupClose(){
		dispatch(popupState(false));
		dispatch(chooseRoleState('Я покупатель'))
	}
	const MyRole = useSelector((state: RootState) => state.chooseRole.title);
	return (
		<>
			<button onClick={()=>handlePopupClose()} className={styles.popup__closebtn}/>
			{children}
			{(!user.token) ? (
				(MyRole==='Забыли пароль?' || location.pathname==='/cart')? null : 
			<div className={styles.popup__btncontainer}>
				{CHOOSE_ROLE.map((i)=>{
					return(
						MyRole===i.title ? null : <ChooseRole key={i.id} title={i.title}/>
					)
				})}
			</div>) : null}
		</>
	);
};
