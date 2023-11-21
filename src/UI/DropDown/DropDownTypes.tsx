export interface Ioption {
  value: string;
  label: string;
}

export interface IDropDowmProps {
  options: Ioption[];
  onChoose: () => void;
}
