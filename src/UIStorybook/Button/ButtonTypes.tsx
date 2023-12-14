import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extClassName?: string;
  buttonType?: 'primary' | 'secondary' | 'minorPrimary' | 'minorSecondary' | 'minorGrey' | 'link';
  actionType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  width?: string;
  height?: string;
}
