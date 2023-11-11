import {FC} from 'react';
import styles from './Checkbox.module.scss';
import {ICheckbox} from './CheckboxTypes'

export const Checkbox: FC<ICheckbox> = ({inpId, labelText, onChange, checked}) => {

    return (
        <div>
            <label htmlFor={labelText} className="input__label">{labelText}</label>
            <input onChange={onChange} checked = {checked} id={labelText} type='checkbox'/>
        </div>
    )
}
