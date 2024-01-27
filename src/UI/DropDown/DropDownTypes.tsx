export interface IOption {
  value: string;
  label: string;
}

export enum SelectorType {
  BASE = 'base',
  COUNTRY = 'country',
  VENDOR = 'vendor',
  CATALOG = 'catalog',
  COMPLAINT = 'complaint',
  ORGFORM = 'orgForm'
}

export interface IDropDownProps {
  options: IOption[];
  type?: SelectorType;
  id?: string;
  isMultiOption?: boolean;
  labelText?: string;
  onChange?: any;
  value?: any;
  error?: string;
  typeError?: string;
  formSize?: boolean;
  trigger?: any;
}
