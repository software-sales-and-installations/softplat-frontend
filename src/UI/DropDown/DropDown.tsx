import { FC } from 'react';
import Select, { SingleValue } from 'react-select';

import './DropDown.scss';
import { IDropDowmProps, IOption, SelectorType } from './DropDownTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { changeCountryOption, changeOption } from './DropDownSlice';

const DropDown: FC<IDropDowmProps> = ({ options, type }) => {
  const dispatch = useAppDispatch();
  const currentCountry = useAppSelector(state => state.dropdown.countryOption);
  const currentBase = useAppSelector(state => state.dropdown.option);
  const defaultValue =
    type === SelectorType.BASE ? currentBase : currentCountry;

  const handleChange = (e: SingleValue<IOption>): void => {
    if (type === SelectorType.BASE) {
      dispatch(changeOption(e));
    } else if (type === SelectorType.COUNTRY) {
      dispatch(changeCountryOption(e));
    }
  };

  return (
    <Select
      classNamePrefix="custom-select"
      options={options}
      closeMenuOnSelect={false}
      defaultValue={defaultValue}
      onChange={e => handleChange(e)}
      isSearchable={false}
    />
  );
};

export default DropDown;
