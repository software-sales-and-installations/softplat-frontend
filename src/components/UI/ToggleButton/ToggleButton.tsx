import { FC, useState, useEffect } from 'react';
import styles from './ToggleButton.module.scss';
import { useDispatch } from 'react-redux';
import { IToggleButton } from './ToggleButtonTypes';
import { checkBoxState } from './ToggleButtonSlice';
import {  useSelector } from 'react-redux';
import { RootState } from '../../../services/redux/store';

export const ToggleButton: FC<IToggleButton> = () => {
		const dispatch = useDispatch();
		const [checked, setChecked] = useState((useSelector((state: RootState) => state.toggleBtn.value)));
		function handleClick(){
			console.log(!checked)
			dispatch(checkBoxState(!checked))
			setChecked(!checked)
		}

	return (
		<div className={styles.wrapper}>
			<input type="checkbox" className={styles.toggle} id="toggleSwitch" checked={checked} onChange={()=>handleClick()}/>
			<label className={styles.textlabel} htmlFor="toggleSwitch" >
				<p className={styles.text}>Вход</p>
				<p className={styles.text}>Регистрация</p>
			</label>
		</div>
	);
};
