import { FC } from 'react';
import Select from 'react-select';

import './DropDown.scss';
import { IDropDowmProps } from './DropDownTypes';

const DropDown: FC<IDropDowmProps> = ({ options, onChoose }) => {
  const handleChange = () => {
    onChoose();
  };

  return (
    <Select
      classNamePrefix="custom-select"
      options={options}
      closeMenuOnSelect={false}
      defaultValue={options[0]}
      onChange={handleChange}
      isSearchable={false}
    />
  );
};

export default DropDown;
