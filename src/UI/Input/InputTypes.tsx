export enum InputTypes {
	email = 'email',
	password = 'password',
	confirmPassword = 'confirmPassword',
	enteredEmail = 'enteredEmail',
	text = 'text',
	date = 'date',
	INN ='INN',
	orgName='orgName',
	remember='checkbox',
	name = 'name',
	phone = 'phone',
	oldpassword='oldpassword',
	cardName = 'cardName',
	link = 'link',
    price = 'price',
    priceInstall = 'priceInstall',
    description = 'description',

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
	validation?: any;
	rules?: any;
	error?: string;
	onChange?: any;
	max?: string;
	defaultValue?: any;
	helpText?: string;
	helpText?: string;
}
