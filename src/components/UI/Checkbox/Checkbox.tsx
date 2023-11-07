import { FC } from 'react';
import {useState} from 'react';

interface ICheckbox {
    label: string;
}

export const Checkbox : FC<ICheckbox> = ({ label }) => {
  const [selected, setSelected] = useState (false)
  return(
    <div>
      <input type="checkbox" checked={selected} onChange={()=>setSelected(!selected)}/>
      <label>{label}</label>
    </div>
  )};
