import styles from './AccordionButton.module.scss';
import {FC, useState} from 'react';
import { IAccordionButton } from './AccordionButtonTypes';
import {SlArrowUp} from 'react-icons/sl';
import classNames from 'classnames';

export const AccordionButton: FC<IAccordionButton> =({question, answer}) =>{
    const[isClicked, setIsClicked] = useState(false)
    return (
        <div className={styles.container}>
            <button onClick={()=>setIsClicked(!isClicked)} type='button' className={styles.button}>
                <h2 className={styles.button__text}>{question}</h2>
                <SlArrowUp/>
            </button>
            <p className={classNames(styles.answer, isClicked ? styles.answer_opened : '')}>{answer}</p>
        </div>
    )
}
