import type { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extClassName?: string;
  buttonType: 'primary' | 'secondary' | 'partial';
  actionType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  label?: string;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  customIcon?: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  extClassName,
  buttonType,
  actionType,
  label,
  isLoading,
  size = 'small',
  customIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={actionType}
      className={`button button--${buttonType} button--${size} button--${buttonType}--${size}`}
      {...props}
    >
      <div
        className={`buttonContent buttonContent--${buttonType} buttonContent--${size} buttonContent--withoutLabel`}>
        {customIcon}
        {isLoading ? <span>IsLoading</span> : <span>{label}</span>}
      </div>
    </button>
  );
};
