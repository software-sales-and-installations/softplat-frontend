import { AccordionButton } from "../../components/UI/AccordionButton/AccordionButton";
import {FC, useState, useEffect} from 'react';
import { FAQ_INFO } from "../../utils/constants";
import styles from './FAQ.module.scss';
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs/Breadcrumbs";

export const FAQ: FC =() =>{

    return (
        
        <>
        <Breadcrumbs/>
            <SectionTitle title='FAQ' />
            <ul className={styles.list}>
            {FAQ_INFO.map((i)=>{
                return(
                    <li key={i.id} className={styles.list__item}>
                        <AccordionButton question={i.question} answer={i.answer}/>
                    </li>
                )
            })}
            </ul>
        </>
    )
}
