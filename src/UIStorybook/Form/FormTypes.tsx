import { ReactNode } from 'react';

export interface FormProps {
  name: string;
  errorText?: string | undefined | null;
  formType: 'register' | 'twoButtons' | 'search' | 'data';
  extClassName?: string;
  buttonType: 'primary' | 'secondary' | 'minorPrimary' | 'minorSecondary' | 'link';
  buttonText: ReactNode;
  secondButtonText?: ReactNode;
  onSubmit: () => void,
  width?: string,
  height?: string,
  children: ReactNode,
  disabled: boolean,
}
