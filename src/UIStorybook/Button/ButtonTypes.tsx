import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extClassName?: string;
  buttonType?: 'primary' | 'secondary' | 'decline' | 'agree' | 'minor' | 'square' | 'link';
  actionType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children: ReactNode;
}
