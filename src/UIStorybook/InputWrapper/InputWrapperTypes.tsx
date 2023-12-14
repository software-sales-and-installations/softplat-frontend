import { ReactNode } from 'react';

export interface InputWrapperProps {
  inputId: string,
  labelText?: string,
  hintText?: string,
  errorText?: string,
  extClassName?: string,
  children?: ReactNode,
}
