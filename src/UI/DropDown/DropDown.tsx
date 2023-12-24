import { FC } from 'react';
import Select from 'react-select';

import './DropDown.scss';
import { IDropDownProps, SelectorType } from './DropDownTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { changeCountryOption, changeOption, changeVendorOption, changeComplaintOption } from './DropDownSlice';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const DropDown: FC<IDropDownProps> = ({
  id,
  options,
  type,
  isMultiOption,
  labelText,
  onChange,
  value,
  error,
  typeError,
  formSize
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const baseSelect = type === SelectorType.BASE;
  const countrySelect = type === SelectorType.COUNTRY;
  const vendorSelect = type === SelectorType.VENDOR;
  const catalogSelect = type === SelectorType.CATALOG;
  const complaintSelect = type === SelectorType.COMPLAINT;
  const orgFormSelect = type === SelectorType.ORGFORM;
  const currentBase = useAppSelector(state => state.dropdown.option);
  // const orgFormOption = useAppSelector(state => state.dropdown.orgFormOption)
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
    } else if (orgFormSelect) {
      onChange(e);
    }
  };



  return (
    <>
      {labelText && (
        <div className="input__hints">
          {labelText ? (
            <label
              className="input__label"
              // htmlFor={inputType}
            >
              {labelText}
            </label>
          ) : null}
        </div>
      )}
      <Select
        classNamePrefix={classNames(
          { multi: isMultiOption },
          { country: isMultiOption && countrySelect },
          { vendor: isMultiOption && vendorSelect },
          { catalog: catalogSelect },
          { complaint: complaintSelect },
           { form: formSize},
          'custom-select',
        )}
        id={id}
        options={options}
        isMulti={isMultiOption ? true : false}
        hideSelectedOptions={false}
        closeMenuOnSelect={formSize || catalogSelect && true}
        defaultValue={baseSelect && currentBase}
        onChange={e => handleChange(e)}
        isSearchable={isMultiOption && true}
        placeholder={true}
        noOptionsMessage={() => 'Нет подходящих вариантов'}
        value={value}
        // menuIsOpen={!catalogSelect && true}
      />
      {typeError && (
        <span
          className={classNames(
            'input__error',
            typeError === 'dataError'
              ? 'input__error_type_data'
              : typeError === 'addCardError'
              ? 'input__error_type_addCardError'
              : '',
          )}
        >
          {error}
        </span>
      )}
    </>
  );
};

export default DropDown;
