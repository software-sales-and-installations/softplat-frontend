
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { RegPopupSeller } from './RegPopupSeller';
import { RegPopupBuyer } from './RegPopupBuyer';


export const PopupForReg: FC =() =>{
	const MyRole = useSelector((state: RootState) => state.chooseRole.title);
	return (
		<>
		{MyRole==='Я продавец' ? <RegPopupSeller/> : <RegPopupBuyer/>}
		</>
	)
}
