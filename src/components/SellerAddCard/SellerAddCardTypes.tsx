import { InputTypes } from '../../UI/Input/InputTypes';

export interface ICreateProductFields {
  inputType: InputTypes;
  name?: string;
  link?: string;
  producer?: string;
  category?: string;
  programm?: string;
  price?: number;
  priceInstall?: number;
  loadFile?: string;
  loadLogo?: string;
  textField?: string;
  keyWord?: string;
  error?: string;
}

export interface IOption {
  value: string;
  label: string;
}
