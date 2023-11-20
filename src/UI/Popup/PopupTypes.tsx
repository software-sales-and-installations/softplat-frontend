import { ReactNode } from 'react';
export interface IPopup {
	children: ReactNode;
	setIsOpened?: boolean;
}
export interface ISignInFields {
	email: string;
	password: string;
	remember?: any;
}

export interface ISignUpFields extends ISignInFields {
	repeatPassword: string;
	INN?: number;
	orgName?: string;
	agree?: any;
	personName: string;
	telephone?: string;
}

export interface IShippingFields {
	email: string;
	password: string;
	agree?: any;
}
export interface ISignInData {
	email: string;
	password: string;
}
export interface ISignUpData extends ISignInData {
	personName: string;
	telephone?: string;
	repeatPassword: string;
}
export interface IUser {
	personName: string;
	email: string;
	telephone?: string;
	token: string;
	password?: string;
	repeatPassword?: string;
}
