export enum InputTypes {
	email = 'email',
	password = 'password',
	repeatPassword = 'repeatPassword',
	enteredEmail = 'enteredEmail',
	text = 'text',
	date = 'date',
	INN ='INN',
	orgName='orgName',
	remember='checkbox',
	personName = 'personName',
	telephone = 'telephone'
}

export enum InputColors {
	black = 'black',
	white = 'white',
	grey = 'grey',
}

export interface IInput {
	inputType: InputTypes;
	readOnly?: boolean;
	value?: any;
	labelText?: string;
	showPasswordButton?: boolean;
	color?: InputColors;
	validation?: any;
	rules?: any;
	error?: string;
	onChange?: any;
	max?: string;
	defaultValue?: any;
}
