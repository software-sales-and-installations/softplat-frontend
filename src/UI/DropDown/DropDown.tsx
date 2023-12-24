import { FC } from 'react';
import Select from 'react-select';

import './DropDown.scss';
import { IDropDownProps, SelectorType } from './DropDownTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { changeCountryOption, changeOption, changeVendorOption, changeComplaintOption } from './DropDownSlice';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const DropDown: FC<IDropDownProps> = ({ options, id, type, isMultiOption }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const baseSelect = type === SelectorType.BASE;
  const countrySelect = type === SelectorType.COUNTRY;
  const vendorSelect = type === SelectorType.VENDOR;
  const catalogSelect = type === SelectorType.CATALOG;
  const complaintSelect = type === SelectorType.COMPLAINT;
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
    } else if (complaintSelect) {
      dispatch(changeComplaintOption(e));
    }
  };

  return (
    <Select
      classNamePrefix={classNames(
        { multi: isMultiOption },
        { country: isMultiOption && countrySelect },
        { vendor: isMultiOption && vendorSelect },
        { catalog: catalogSelect },
        { complaint: complaintSelect },
        'custom-select',
      )}
      options={options}

      id={id}
      isMulti={isMultiOption ? true : false}
      hideSelectedOptions={false}
      closeMenuOnSelect={catalogSelect && true}
      defaultValue={baseSelect && currentBase}
      onChange={e => handleChange(e)}
      isSearchable={isMultiOption && true}
      placeholder={true}
      noOptionsMessage={() => 'Нет подходящих вариантов'}
      // menuIsOpen={!catalogSelect && true}
    />
  );
};

export default DropDown;
