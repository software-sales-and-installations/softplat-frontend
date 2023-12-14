import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  extClassName?: string;
  inputId?: string;
  inputType?: 'search';
  width?: string;
  height?: string;
  rows?: number;
  cols?: number;
  isValid?: true | false;
}
