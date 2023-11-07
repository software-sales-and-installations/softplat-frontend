import { FC, useState, useEffect } from 'react';
import styles from './ToggleButton.module.scss';
import { useDispatch } from 'react-redux';
import { IToggleButton } from './ToggleButtonTypes';
import { checkBoxState } from './ToggleButtonSlice';
import {  useSelector } from 'react-redux';
import { RootState } from '../../../services/redux/store';

export const ToggleButton: FC<IToggleButton> = ({ label }) => {
		const dispatch = useDispatch();
		const [checked, setChecked] = useState((useSelector((state: RootState) => state.toggleBtn.value))|| false);
		function handleClick(){
			setChecked(!checked)
		}
		useEffect(()=>{
			console.log(checked)
			dispatch(checkBoxState(checked))
		}, [checked])
	return (
		<label className={styles.wrapper} htmlFor="toggleSwitch" >
			<input type="checkbox" className={styles.toggle} id="toggleSwitch" checked={checked} onChange={handleClick}/>
			<p className={styles.label}>{label ?? ''}</p>
		</label>
	);
};
