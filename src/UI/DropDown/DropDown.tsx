import { FC } from 'react';
import Select from 'react-select';

import './DropDown.scss';
import { IDropDowmProps } from './DropDownTypes';
import { useAppDispatch } from '../../services/redux/store';
import { changeOption } from './DropDownSlice';

const DropDown: FC<IDropDowmProps> = ({ options }) => {
  const dispatch = useAppDispatch();



  return (
    <Select
      classNamePrefix="custom-select"
      options={options}
      closeMenuOnSelect={false}
      defaultValue={options[0]}
      onChange={(e) => dispatch(changeOption(e))}
      isSearchable={false}
    />
  );
};

export default DropDown;
