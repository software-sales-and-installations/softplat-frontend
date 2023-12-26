import { ReactNode } from 'react';

export interface InputWrapperProps {
  inputId: string,
  labelText?: string,
  hintText?: string,
  errorText?: ReactNode,
  extClassName?: string,
  children?: ReactNode,
}
