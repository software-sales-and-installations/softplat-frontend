export const HEADER_BTNS: {
    id: number;
    title: string;
}[] = [
{
    id: 1,
    title: 'Каталог',
},
{
    id: 2,
    title: 'Производители',
},
{
    id: 3,
    title: 'FAQ',
},
{
    id: 4,
    title: 'Контакты',
},
]

export const CATEGORIZED_TEXT: {
    id: number;
    text: string;
}[]= [
    {id: 1,
    text: 'Системное ПО'}, 
    {id: 2,
    text: 'Прикладное ПО'},
    {id: 3,
    text: 'Инструментальное ПО'},
    {id: 4,
    text: 'Windows'},
    {id: 5,
    text: 'Adobe'},
    {id: 6,
    text: 'Антивирусы'},
    {id: 7,
    text: 'Утилиты'},
    {id: 8,
    text: 'Корпоративные системы'},
    {id: 9,
    text: 'Корпоративные системы'},
    {id: 10,
    text: 'Корпоративные системы'}
]
export const TEXT_FOR_AUTH_CHECKBOX: {
    id: number;
    text: string
} []=[
    {id: 1,
    text: 'Запомнить меня'}
];

export const TEXT_FOR_REG_CHECKBOX: {
    id: number;
    text: string
} []=[
    {id: 1,
    text: 'Запомнить меня'},
    {id: 2,
    text: 'Я соглашаюсь с политикой обработки персональных данных'}
];
export const VALIDATION_SETTINGS = {
	email: {
		pattern:
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		maxLength: 64,
		messages: {
			noEmail: 'Необходимо ввести email',
			invalid: 'Необходимо ввести email в правильном формате',
			tooLong: 'Слишком длинный email',
		},
	},
	password: {
		pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/,
		minLength: 8,
		maxLength: 32,
		messages: {
			noPassword: 'Необходимо ввести пароль',
			noRepeatPassword: 'Необходимо повторно ввести пароль',
			invalid: 'Необходимо ввести пароль в правильном формате',
			tooShort: 'Слишком короткий пароль',
			tooLong: 'Слишком длинный пароль',
			noMatch: 'Пароли не совпадают',
		},
	},
	INN: {
		pattern: /[0-9]/,
		minLength: 10,
		maxLength: 12,
		messages: {
			tooShort: 'Слишком короткий ИНН',
			tooLong: 'Слишком длинный ИНН',
			invalid: 'Необходимо ввести ИНН в правильном формате',
			noINN: 'Необходимо ввести ИНН',
		}
	},
	orgName: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 32,
		messages: {
			tooShort: 'Слишком короткое название',
			tooLong: 'Слишком длинное название',
			invalid: 'Только кириллица или латинские буквы',
			noorgName: 'Необходимо ввести название организации',
		}
	},
	personName: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 12,
		messages: {
			tooShort: 'Слишком короткое имя',
			tooLong: 'Слишком длинное имя',
			invalid: 'Только кириллица или латинские буквы',
			noName: 'Необходимо ввести имя',
		}
	},
	// agree: {
	// 	pattern: 'agree',
	// 	messages: {
	// 		invalid: 'Необходимо согласиться'
	// 	}
	// }
	// nickname: {
	// 	pattern: /^[a-zа-яё\s]+$/iu,
	// 	maxLength: 32,
	// 	messages: {
	// 		invalid: 'Только кириллица или латинские буквы',
	// 		tooLong: 'Слишком длинный никнейм',
	// 	},
	// },
};
export const EMAIL_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.email.messages.noEmail,
	},
	pattern: {
		value: VALIDATION_SETTINGS.email.pattern,
		message: VALIDATION_SETTINGS.email.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.email.maxLength,
		message: VALIDATION_SETTINGS.email.messages.tooLong,
	},
};

export const PASSWORD_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.password.messages.noPassword,
	},
	pattern: {
		value: VALIDATION_SETTINGS.password.pattern,
		message: VALIDATION_SETTINGS.password.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.password.minLength,
		message: VALIDATION_SETTINGS.password.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.password.maxLength,
		message: VALIDATION_SETTINGS.password.messages.tooLong,
	},
};
export const INN_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.INN.messages.noINN,
	},
	pattern: {
		value: VALIDATION_SETTINGS.INN.pattern,
		message: VALIDATION_SETTINGS.INN.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.INN.minLength,
		message: VALIDATION_SETTINGS.INN.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.INN.maxLength,
		message: VALIDATION_SETTINGS.INN.messages.tooLong,
	},
}
export const ORGNAME_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.orgName.messages.noorgName,
	},
	pattern: {
		value: VALIDATION_SETTINGS.orgName.pattern,
		message: VALIDATION_SETTINGS.orgName.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.orgName.minLength,
		message: VALIDATION_SETTINGS.orgName.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.orgName.maxLength,
		message: VALIDATION_SETTINGS.orgName.messages.tooLong,
	},
}
export const NAME_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.personName.messages.noName,
	},
	pattern: {
		value: VALIDATION_SETTINGS.personName.pattern,
		message: VALIDATION_SETTINGS.personName.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.personName.minLength,
		message: VALIDATION_SETTINGS.personName.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.personName.maxLength,
		message: VALIDATION_SETTINGS.personName.messages.tooLong,
	},
}
export const CHOOSE_ROLE: {
    id: number;
    title: string
} []= [{id: 1, title: 'Я покупатель'}, {id: 2, title: 'Я продавец'}, {id: 3, title: 'Забыли пароль?'}, {id: 4, title:'Я админ'}]
