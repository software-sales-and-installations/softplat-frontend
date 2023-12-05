import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string,
  labelText?: string,
  variant?: 'popup',
  hintText?: string,
  errorText?: string,
  children?: ReactNode,
}
