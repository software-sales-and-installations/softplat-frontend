export interface IOption {
  value: string;
  label: string;
}

export enum SelectorType {
  BASE = 'base',
  COUNTRY = 'country',
  VENDOR = 'vendor'
}

export interface IDropDowmProps {
  options: IOption[];
  type?: SelectorType;
}
