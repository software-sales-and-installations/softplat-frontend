import { ReactNode } from 'react';

export interface FormProps {
  name: string;
  formType: 'register' | 'twoButtons' | 'search' | 'data';
  extClassName: string;
  buttonType: 'primary' | 'secondary' | 'minorPrimary' | 'minorSecondary' | 'link';
  buttonText: ReactNode;
  secondButtonText?: ReactNode;
  onSubmit: () => void,
  children: ReactNode,
}
