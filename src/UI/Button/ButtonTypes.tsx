export interface IButtonProps {
    children?: string;
    mode: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    isDisabled?: boolean;
    onClick?: () => void;
  }
