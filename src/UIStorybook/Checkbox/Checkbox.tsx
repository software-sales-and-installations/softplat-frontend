import { FC, useState } from 'react';
import { ICheckboxProps } from './CheckboxTypes';
import style from './Checkbox.module.scss';

export const Checkbox: FC<ICheckboxProps> = ({ onCheck, label, extClassName, ...props }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
    onCheck(!isChecked);
  };

  return (
    <label
      className={`${style.checkbox} ${isChecked ? style.checkbox_checked : ''} ${extClassName}`}
    >
      <input
        type={'checkbox'}
        onChange={handleChange}
        checked={isChecked}
        className={style.checkbox__input}
        {...props}
      />
      <span className={style.checkbox__custom}>{isChecked ? '✔' : ''}</span>
      <span className={[style.checkbox__text].join(' ')}> {label}</span>
    </label>
  );
};
