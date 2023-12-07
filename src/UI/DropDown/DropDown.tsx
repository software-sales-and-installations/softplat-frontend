import { FC } from 'react';
import Select from 'react-select';

import './DropDown.scss';
import { IDropDowmProps, SelectorType } from './DropDownTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { changeCountryOption, changeOption, changeVendorOption } from './DropDownSlice';
import classNames from 'classnames';

const DropDown: FC<IDropDowmProps> = ({ options, type, isMultiOption }) => {
  const baseSelect = type === SelectorType.BASE;
  const countrySelect = type === SelectorType.COUNTRY;
  const vendorSelect = type === SelectorType.VENDOR;
  const dispatch = useAppDispatch();
  const currentCountry = useAppSelector(state => state.dropdown.countryOption);
  const currentBase = useAppSelector(state => state.dropdown.option);
  // const defaultValue = baseSelect ? currentBase : currentCountry;
  // SingleValue<IOption> | MultiValue<IOption[]>
  const handleChange = (e: any): void => {
    if (baseSelect) {
      dispatch(changeOption(e));
    } else if (countrySelect) {
      dispatch(changeCountryOption(e));
    } else if (vendorSelect) {
      dispatch(changeVendorOption(e))
    }
  };

  console.log(currentCountry);

  return (
    <Select
      classNamePrefix={classNames(
        { multi: isMultiOption },
        { country: isMultiOption && countrySelect },
        { vendor: isMultiOption && vendorSelect },
        'custom-select',
      )}
      options={options}
      isMulti={isMultiOption ? true : false}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      defaultValue={baseSelect && currentBase}
      onChange={e => handleChange(e)}
      isSearchable={false}
      // menuIsOpen
      placeholder={false}
    />
  );
};

export default DropDown;
