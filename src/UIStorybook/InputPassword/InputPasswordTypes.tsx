// export enum InputPasswordTypes {
// 	email = 'email',
// 	password = 'password',
// 	confirmPassword = 'confirmPassword',
// 	enteredEmail = 'enteredEmail',
// 	text = 'text',
// 	date = 'date',
// 	INN ='INN',
// 	remember='checkbox',
// 	name = 'name',
// 	phone = 'phone',
// 	oldpassword='oldpassword',
// 	cardName = 'cardName',
// 	companyname = 'companyname',
// 	bik = 'bik',
// 	ogrnip = 'ogrnip',
// 	account = 'account',
// 	kpp = 'kpp',
// 	orgForm = 'orgForm',
//     shopname = 'shopname',
//     address = 'address'
// }
export interface InputPasswordTypes {
	showPasswordButton?: boolean;
  inputType: 'text' | 'password' | 'confirmPassword';
  inputId: string;
	rules?: any;
}
