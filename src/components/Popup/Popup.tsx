import { FC } from 'react';
import styles from './Popup.module.scss';
import { IPopup } from './PopupTypes';
import {AiOutlineClose} from 'react-icons/ai';
import { ChooseRole } from '../UI/ChooseRole/ChooseRole';
import { CHOOSE_ROLE } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { popupState } from './PopupSlice';
import { chooseRoleState } from '../UI/ChooseRole/ChooseRoleSlice';


export const Popup: FC<IPopup> = ({ children}) => {
	const dispatch = useDispatch();
	const isOpened =  useSelector((state: RootState) => state.popupOpen.setIsOpened)
	const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
		if (evt.target === evt.currentTarget) {
			dispatch(popupState(false));
			dispatch(chooseRoleState('Я покупатель'))
		}
	};
	function handlePopupClose(){
		dispatch(popupState(false));
		dispatch(chooseRoleState('Я покупатель'))
	}
	return (
		<div onClick={handleOverlayClick} className={classNames(styles.popup, isOpened ? styles.popup_opened : '')}>
			<div className={styles.popup__container}>
			<button onClick={()=>handlePopupClose()} className={styles.popup__closebtn}><AiOutlineClose className={styles.popup__closeicon}/></button>
			{children}
			{CHOOSE_ROLE.map((i)=>{
				return(
					<ChooseRole key={i.id} title={i.title}/>
				)
			})}
			</div>
		</div>
	);
};
