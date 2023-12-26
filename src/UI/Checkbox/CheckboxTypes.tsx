export interface ICheckboxProps {
  onCheck?: (isChecked: boolean) => void;
  label?: string;
  checked?: boolean;
  readOnly?: boolean
}
