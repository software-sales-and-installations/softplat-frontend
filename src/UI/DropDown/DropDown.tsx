import { FC } from 'react';
import Select, { SingleValue } from 'react-select';

import './DropDown.scss';
import { IDropDowmProps, IOption, SelectorType } from './DropDownTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { changeCountryOption, changeOption } from './DropDownSlice';
import classNames from 'classnames';

const DropDown: FC<IDropDowmProps> = ({ options, type, isMultiOption }) => {
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

  // const isMultiOption = true;

  return (
    <Select
      // classNamePrefix="multi custom-select"
      classNamePrefix={classNames(
        { multi: isMultiOption },
        { country: isMultiOption && type === SelectorType.COUNTRY },
        { vendor: isMultiOption && type === SelectorType.VENDOR },
        'custom-select',
      )}
      options={options}
      isMulti={isMultiOption ? true : false}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      defaultValue={defaultValue}
      // onChange={e => handleChange(e)}
      onChange={e => console.log(e)}
      isSearchable={false}
      // menuIsOpen
      placeholder={false}
    />
  );
};

export default DropDown;
