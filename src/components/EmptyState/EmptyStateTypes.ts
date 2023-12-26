import { ReactNode } from 'react';

export interface EmptyStateProps {
  children: ReactNode;
  button?: boolean;
  navigateTo?: string;
  buttonText?: string;
}
