import { ReactNode } from 'react';

export interface FormProps {
  name: string;
  errorText?: string | undefined | null;
  formType: string;
  extClassName?: string;
  buttonType: 'primary' | 'secondary' | 'minorPrimary' | 'minorSecondary' | 'link';
  buttonText: ReactNode;
  secondButtonText?: ReactNode;
  onSubmit: () => void,
  width?: string,
  height?: string,
  children: ReactNode,
  disabled?: boolean,
  onClick?: () => void,
  onSecondaryClick?: () => void,
  successText?: string,
}
