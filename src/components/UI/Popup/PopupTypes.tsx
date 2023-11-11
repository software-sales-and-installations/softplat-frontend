import { ReactNode } from 'react';
export interface IPopup {
	children: ReactNode;
	setIsOpened?: boolean;
}
export interface ISignInFields {
	email: string;
	password: string;
}

export interface ISignUpFields extends ISignInFields {
	repeatPassword: string;
	INN: number;
	orgName: string;
	agree?: any;
	personName: string;
	telephone?: string;
}

export interface IShippingFields {
	email: string;
	password: string;
	agree?: any;
}
