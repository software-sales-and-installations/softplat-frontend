import { FC } from 'react';

interface ICheckbox {
    label: string;
    selected: boolean;
}

export const Checkbox : FC<ICheckbox> = ({ label, selected }) => (
    <div>
      <input type="checkbox" checked={selected} />
      <label>{label}</label>
    </div>
  );
