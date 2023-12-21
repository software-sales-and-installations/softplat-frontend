import { ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface InputWrapperProps {
  inputId: string,
  labelText?: string,
  hintText?: string,
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
  extClassName?: string,
  children?: ReactNode,
}
