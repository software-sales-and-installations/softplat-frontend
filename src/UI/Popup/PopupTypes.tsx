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
	confirmPassword: string;
	INN?: number;
	orgName?: string;
	agree?: any;
	name: string;
	phone?: string;
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
	name: string;
	phone?: string;
	confirmPassword: string;
	role: string;
}
export interface IUser {
	name: string;
	email: string;
	phone?: string;
	token: string;
	password?: string;
	confirmPassword?: string;
}
