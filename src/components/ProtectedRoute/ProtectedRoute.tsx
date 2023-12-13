import { FC, JSXElementConstructor, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { chooseRoleState } from '../../UI/ChooseRole/ChooseRoleSlice';

interface IProtectedRoute {
	children: ReactElement<string | JSXElementConstructor<unknown>> | null;
}


export const ProtectedRouteForBuyer: FC<IProtectedRoute> = ({ children }) => {
	const role = localStorage.getItem('role');
	return role==='BUYER' ? (
		children
	) : (
		<>
			<Navigate to="/catalog" />
		</>
	);
};
export const ProtectedRouteForSeller: FC<IProtectedRoute> = ({ children }) => {
	const role = localStorage.getItem('role');
	return role==='SELLER' ? (
		children
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};
export const ProtectedRouteForAdmin: FC<IProtectedRoute> = ({ children }) => {
	const dispatch = useAppDispatch();
	dispatch(popupState(true));
	dispatch(chooseRoleState('Я админ'))
	const role = localStorage.getItem('role');
	return role==='ADMIN' ? (
		children
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};

