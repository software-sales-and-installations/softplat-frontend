import {FC} from 'react';
import { IChooseRole } from './ChooseRoleTypes';
import { chooseRoleState } from './ChooseRoleSlice';
import { useDispatch } from 'react-redux';
import styles from './ChooseRole.module.scss';


export const ChooseRole: FC<IChooseRole> = ({title}) =>{
    const dispatch = useDispatch();
    function handleRoleClick(title: string){
        dispatch(chooseRoleState(title))
    }
return (
    <button className={styles.button} onClick={()=>handleRoleClick(title)}>{title}</button>
)
}
