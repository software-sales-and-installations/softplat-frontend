import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  extClassName?: string;
  inputId: string;
  inputType?: 'search';
  type: 'text' | 'number' | 'password' | 'tel' | 'email' | 'file';
  width: string;
  height: string;
  isValid?: true | false;
}
