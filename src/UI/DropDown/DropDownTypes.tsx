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
}

export interface IDropDownProps {
  options: IOption[];
  type?: SelectorType;
  isMultiOption?: boolean
  id?: string;
}
