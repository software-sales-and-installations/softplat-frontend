import { FC, useState } from 'react';

import { ICheckbox } from './CheckboxTypes';
import { useLocation } from 'react-router';

export const Checkbox: FC<ICheckbox> = ({
	id,
	text,
	color = 'white',
	checked,
	onChange,
	readOnly = false,
	defaultChecked,
}) => {
	const [isChecked, setIsChecked] = useState(checked || false);

	const handleChange = () => {
		if (onChange) {
			const newChecked = !isChecked;
			setIsChecked(newChecked);
			onChange(id, newChecked);
		} else {
			setIsChecked(!isChecked);
		}
	};

	return (
		<label>
			<input
				type="checkbox"
				checked={checked || isChecked}
				onChange={handleChange}
				value={id}
				readOnly={readOnly}
				// defaultChecked={defaultChecked}
			/>

			<span
			>ttt
			</span>
		</label>
	);
};


