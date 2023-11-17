import styles from './AccordionButton.module.scss';
import {FC, useState} from 'react';
import { IAccordionButton } from './AccordionButtonTypes';
import {SlArrowDown} from 'react-icons/sl';
// import classNames from 'classnames';

export const AccordionButton: FC<IAccordionButton> =({question, answer}) =>{
    const[isClicked, setIsClicked] = useState(false)
    return (
        <div className={styles.container}>
            <button onClick={()=>setIsClicked(!isClicked)} type='button' className={styles.button}>
                <h3 className={styles.button__question}>{question}</h3>
                <SlArrowDown className={styles.button__down}/>
            </button>
            {answer.map((i)=>{
                return(
                <p className={(styles.answer, isClicked ? styles.answer_opened : '')}>{i}</p>
            )})}
            
        </div>
    )
}
