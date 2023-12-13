import { FC } from 'react';
import Select from 'react-select';

import './DropDown.scss';
import { IDropDowmProps, SelectorType } from './DropDownTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  changeCountryOption,
  changeOption,
  changeVendorOption,
} from './DropDownSlice';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const DropDown: FC<IDropDowmProps> = ({ options, type, isMultiOption }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const baseSelect = type === SelectorType.BASE;
  const countrySelect = type === SelectorType.COUNTRY;
  const vendorSelect = type === SelectorType.VENDOR;
  const catalogSelect = type === SelectorType.CATALOG;
  const sellersSelect = type === SelectorType.SELLERS;
  const currentBase = useAppSelector(state => state.dropdown.option);
  // SingleValue<IOption> | MultiValue<IOption[]>
  const handleChange = (e: any): void => {
    if (baseSelect) {
      dispatch(changeOption(e));
    } else if (countrySelect) {
      dispatch(changeCountryOption(e));
    } else if (vendorSelect) {
      dispatch(changeVendorOption(e));
    } else if (catalogSelect) {
      navigate(`/catalog/${e.value}`, { replace: true });
    } else if (sellersSelect) {
      dispatch(changeVendorOption(e));
    }
  };

  return (
    <Select
      classNamePrefix={classNames(
        { multi: isMultiOption },
        { country: isMultiOption && countrySelect },
        { vendor: isMultiOption && vendorSelect },
        { vendor: isMultiOption && sellersSelect },
        { catalog: catalogSelect },
        'custom-select',
      )}
      options={options}
      isMulti={isMultiOption ? true : false}
      hideSelectedOptions={false}
      closeMenuOnSelect={catalogSelect && true}
      defaultValue={baseSelect && currentBase}
      onChange={e => handleChange(e)}
      isSearchable={false}
      placeholder={false}
      // menuIsOpen
    />
  );
};

export default DropDown;
