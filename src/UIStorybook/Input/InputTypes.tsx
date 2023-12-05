import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  extClassName?: string;
  inputId: string;
  inputVariant?: 'popup';
  name?: string;
  onChange: (e:React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  type: 'text' | 'number' | 'password' | 'tel' | 'email' | 'file';
  isValid: true | false;
  pattern: string;
  autoFocus?: true | false
}
