'use client';
import { Provider } from 'react-redux';
import { store } from '../services/redux/store';
import { ReactNode, FC } from 'react';

interface Iprovider {
	children: ReactNode;
}

const Providers: FC<Iprovider> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default Providers;
