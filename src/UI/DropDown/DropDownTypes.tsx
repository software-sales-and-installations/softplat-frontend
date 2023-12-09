export interface IOption {
  value: string;
  label: string;
}

export enum SelectorType {
  BASE = 'base',
  COUNTRY = 'country',
  VENDOR = 'vendor',
  CATALOG = 'catalog'
}

export interface IDropDowmProps {
  options: IOption[];
  type?: SelectorType;
  isMultiOption: boolean
}
