import { FC } from 'react';
import { IMainWrapperProps } from './MainWrapperTypes';

export const MainWrapper: FC<IMainWrapperProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
}
