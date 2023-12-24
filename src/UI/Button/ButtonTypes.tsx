export interface IButtonProps {
    children?: any;
    mode: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    isDisabled?: boolean;
    onClick?: () => void;
  }
