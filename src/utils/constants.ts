import AdobeImg from '../images/producers/Adobe.png';
import AutodeskImg from '../images/producers/autodesk.png';
import AlludoImg from '../images/producers/alludo.png';
import GoogleImg from '../images/producers/google.png';
import OracleImg from '../images/producers/oracle.png';
import SAP from '../images/producers/SAP.png';
import PayPAlImg from '../images/producers/PayPal.png';
import MicrosoftImg from '../images/producers/Microsoft.png';


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
    text: 'Системное ПО'},
    {id: 5,
    text: 'Системное ПО'},
    {id: 6,
    text: 'Windows'},
    {id: 7,
    text: 'Adobe'},
    {id: 8,
    text: 'Антивирусы'},
    {id: 9,
    text: 'Утилиты'},
    {id: 10,
    text: 'Корпоративные системы'},
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
	telephone: {
		pattern: /[0-9]/,
		minLength: 11,
		maxLength: 11,
		messages: {
			tooShort: 'Слишком короткий номер',
			tooLong: 'Слишком длинный номер',
			invalid: 'Введите только цифры',
			noName: 'Необходимо ввести номер телефона',
		}
	},

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
export const TELEPHONE_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.telephone.messages.noName,
	},
	pattern: {
		value: VALIDATION_SETTINGS.telephone.pattern,
		message: VALIDATION_SETTINGS.telephone.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.telephone.minLength,
		message: VALIDATION_SETTINGS.telephone.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.telephone.maxLength,
		message: VALIDATION_SETTINGS.telephone.messages.tooLong,
	},
}
export const CHOOSE_ROLE: {
    id: number;
    title: string
} []= [{id: 1, title: 'Я покупатель'}, {id: 2, title: 'Я продавец'}, {id: 3, title:'Я админ'}]

export const FOOTER_LINKS: {
    id: number;
    text: string;
    link: string;
}[]= [
    {id: 1,
    text: 'Каталог', link: '/catalog'}, 
    {id: 2,
    text: 'Производители', link: '/producers'},
    {id: 3,
    text: 'FAQ', link: '/faq'},
    {id: 4,
    text: 'Контакты', link: '/contacts'},
    {id: 5,
    text: 'Условия пользования', link: '/terms-of-use'},
    {id: 6,
    text: 'Политика конфиденциальности', link: '/privacy-policy'}
]
export const CATALOGUE_NAMES:{name: string; img: string}[] = [
  {name: 'Офисные приложения', img: ''},
  {name: 'Системное ПО', img: ''},
  {name: 'Мультимедиа', img: ''},
  {name: 'Конвекторы', img: ''},
  {name: 'Архиваторы', img: ''},
  {name: 'Безопасность', img: ''},
  {name: 'Интернет', img: ''},
  {name: 'ERP & CRM', img: ''},
];
export const FAQ_INFO: {
    id: number;
    question: string;
    answer: {id: number, text: string}[]
}[] = [
    {id: 1, question: 'Где найти свой оплаченный заказ?', answer: [{id: 1, text: 'Посетите личный кабинет, раздел Мои покупки.'}]},
    {id: 2, question: 'Как с вами связаться?', answer: [{id: 1, text: 'Все доступные способы связи на странице Контакты.'}]},
    {id: 3, question: 'Правила обмена и возврата', answer: [{id: 1, text: 'По действующему российскому законодательству, покупатель может в течение 14 календарных дней вернуть любой товар без каких‑либо причин. В такой ситуации главное, чтобы продукция не была ни разу использована и сохранила свой первоначальный вид.'},{id: 2, text: 'Стоит отметить, что программное обеспечение, различные приложения и операционные системы не подпадают под действие данного закона. Однако наши клиенты все равно могут воспользоваться таким правом в течение 14 дней со дня покупки. Нужно помнить, что вернуть можно лишь физические носители — диски. Ключи активации, полученные по электронной почте, не обладают такой гарантией.'}, {id: 3, text: 'Такой подход не прихоть, а мера безопасности от взлома компьютеров, хакерских атак и разработки вредоносных программ.'}]}
]

export const TITLE_FOR_BREADCRUMBS:  {
    id: number;
    title: string;
    url: string;
}[] = [{id: 1, title: 'Главная', url:''}, {id: 2, title: 'FAQ', url: 'faq'}]

export const CATEGORIZED_TEXT_VENDOR: {
    id: number;
    text: string;
}[]= [
    {id: 1,
    text: 'Фоторедактор'}, 
    {id: 2,
    text: 'Видеоредактор'},
    {id: 3,
    text: 'Векторная графика'},
    {id: 4,
    text: 'Дизайн'},
    {id: 5,
    text: 'Анимирование'},
    {id: 6,
    text: 'Web-разработка'},
    {id: 7,
    text: 'Adobe'},
    {id: 8,
    text: 'Аудиоредактор'},
]

export const SELECT_OPTIONS: {
    label: string;
    value: string;
}[] = [
    {
      value: 'popularity',
      label: 'По популярности',
    },
    {
      value: 'recency',
      label: 'По новизне',
    },
    {
      value: 'price',
      label: 'По цене',
    },
  ];

 export const PRODUCT_ITEMS: { id: number; name: string; price: number; img: string }[] = [
	{
	  id: 1,
	  name: 'Adobe Photoshop 2023',
	  price: 19898,
	  img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
	},
	{
	  id: 2,
	  name: 'Adobe Photoshop 2023',
	  price: 19898,
	  img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
	},
	{
	  id: 3,
	  name: 'Adobe Photoshop 2023',
	  price: 19898,
	  img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
	},
	{
	  id: 4,
	  name: 'Adobe Photoshop 2023',
	  price: 19898,
	  img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
	},
	{
	  id: 5,
	  name: 'Adobe Photoshop 2023',
	  price: 19898,
	  img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
	},
  ];


  export const PRODUCERS_LIST = [
	{id: 1, label: AdobeImg, title: 'Adobe', description:'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 2, label: AutodeskImg, title: 'Autodesk', description: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 3, label: AlludoImg, title: 'Alludo', descriprion: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 4, label: GoogleImg, title: 'Google', description: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 5, label: OracleImg, title: 'Oracle', description: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 6, label: SAP, title: 'SAP', description: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 7, label: PayPAlImg, title: "PayPal", description: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'},
	{id: 8, label: MicrosoftImg, title: 'Microsoft', description: 'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.'}
  ]
