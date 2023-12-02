import { FC, useState } from 'react';
import { ICheckboxProps } from './CheckboxTypes';
import style from './Checkbox.module.scss';

export const Checkbox: FC<ICheckboxProps> = ({ onCheck, label, checked, readOnly  }) => {
  
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (!readOnly) {
      const updatedValue = !isChecked;
      setIsChecked(updatedValue);
      if (onCheck) {
        onCheck(updatedValue);
      }

    }
  };

  return (
    <label
      className={`${style.checkbox} ${isChecked ? style.checkbox_checked : ''}`}
    >
      <input
        type={'checkbox'}
        onChange={handleChange}
        checked={isChecked}
        className={style.checkbox__input}
      />
      <span className={style.checkbox__custom}>{isChecked ? '✔' : ''}</span>
      <span className={style.checkbox__text}> {label}</span>
    </label>
  );
};
