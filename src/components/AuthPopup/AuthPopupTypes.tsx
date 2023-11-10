export interface ISignInFields {
	email: string;
	password: string;
}

export interface ISignUpFields extends ISignInFields {
	repeatPassword: string;
	INN: number;
	orgName: string;
	agree: any;
	personName: string;
}

export interface IShippingFields {
	email: string;
	password: string;
}

