import { FC } from 'react';
import style from './MainWrapper.module.scss';
import { IMainWrapperProps } from './MainWrapperTypes';

export const MainWrapper: FC<IMainWrapperProps> = ({ children }) => {
    return (
        <section className={style.main}>
            {children}
        </section>
    );
}
