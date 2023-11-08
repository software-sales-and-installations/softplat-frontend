export interface ICheckbox {
	text: string;
	id: any;
	checked?: boolean;
	readOnly?: boolean;
	color?: 'black' | 'white' | 'yellow';
	onChange?: (id: number, newChecked: boolean) => void;
	defaultChecked?: boolean;
	image?: string;
}
