import { ReactNode } from 'react';

export interface IButtonProps {
    variant?: string;
    type: 'button' | 'submit' | undefined;
    width?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

