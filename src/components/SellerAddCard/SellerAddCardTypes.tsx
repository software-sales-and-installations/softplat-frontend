export enum InputTypes {
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
  enteredEmail = 'enteredEmail',
  text = 'text',
  date = 'date',
  INN = 'INN',
  orgName = 'orgName',
  remember = 'checkbox',
  name = 'name',
  phone = 'phone',
  link = 'link',
  price = 'price',
  priceInstall = 'priceInstall',
  description = 'description',
}
export interface ICreateProductFields {
  inputType: InputTypes;
  name?: string;
  link?: string;
  description?: string;
  price?: number;
  priceInstall?: number;
  error?: string;
}
