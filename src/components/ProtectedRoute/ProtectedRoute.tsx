import { FC, JSXElementConstructor, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../../services/redux/slices/user/user';
import { useAppSelector } from '../../services/redux/store';

interface IProtectedRoute {
	children: ReactElement<string | JSXElementConstructor<unknown>> | null;
}


export const ProtectedRouteForBuyer: FC<IProtectedRoute> = ({ children }) => {
	const user = useAppSelector(selectUser);
	return user.role==='BUYER' ? (
		children
	) : (
		<>
			<Navigate to="/catalog" />
		</>
	);
};
export const ProtectedRouteForSeller: FC<IProtectedRoute> = ({ children }) => {
	const user = useAppSelector(selectUser);
	return user.role==='SELLER' ? (
		children
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};
export const ProtectedRouteForAdmin: FC<IProtectedRoute> = ({ children }) => {
	const user = useAppSelector(selectUser);
	return user.role==='ADMIN' ? (
		children
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};

