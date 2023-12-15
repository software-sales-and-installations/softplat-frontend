import { FC } from 'react';
import { IMainWrapperProps } from './MainWrapperTypes';
import styles from './MainWrapper.module.scss';

export const MainWrapper: FC<IMainWrapperProps> = ({ children }) => {

  return (
        <main className={styles.background}>
            {children}
        </main>
    );
}
