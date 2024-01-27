export enum InputTypes {
	email = 'email',
	password = 'password',
	confirmPassword = 'confirmPassword',
	enteredEmail = 'enteredEmail',
	text = 'text',
	date = 'date',
	INN ='INN',
	remember='checkbox',
	name = 'name',
	phone = 'phone',
	oldPass='oldPass',
	cardName = 'cardName',
	companyname = 'companyname',
	bik = 'bik',
	ogrnip = 'ogrnip',
	account = 'account',
	kpp = 'kpp',
	orgForm = 'orgForm',
    shopname = 'shopname',
    address = 'address',
	link = 'link',
	description = 'description',
	price = 'price',
	installationPrice = 'installationPrice',
	quantity = 'quantity',
	version = 'version',
}
export interface IInput {
  isPhone?: boolean;
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
	typeError?: string
}
