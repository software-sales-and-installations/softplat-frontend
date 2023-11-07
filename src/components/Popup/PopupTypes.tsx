import { ReactNode } from 'react';

export interface IPopup {
	children: ReactNode;
	setIsOpened?: boolean;
	// closePopup(param: boolean)?: void;
	// setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
