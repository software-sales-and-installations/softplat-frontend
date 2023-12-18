import { ReactNode } from 'react';

export interface EmptyStateProps {
  children: ReactNode;
  navigateTo: string;
  buttonText: string;
}
