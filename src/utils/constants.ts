export const API_BASE_URL = 'https://api.softplat.ru';

import AdobeImg from '../images/producers/Adobe.png';
import AutodeskImg from '../images/producers/autodesk.png';
import AlludoImg from '../images/producers/alludo.png';
import GoogleImg from '../images/producers/google.png';
import OracleImg from '../images/producers/oracle.png';
import SAP from '../images/producers/SAP.png';
import PayPAlImg from '../images/producers/PayPal.png';
import MicrosoftImg from '../images/producers/Microsoft.png';

import PhotoShopImg from '../images/seller/Photoshop.png';
import Acrobat from '../images/seller/Acrobat.png';
import Illustrator from '../images/seller/Illustrator.png';

export const CATEGORIZED_TEXT: {
  id: number;
  text: string;
}[] = [
  { id: 1, text: 'Системное ПО' },
  { id: 2, text: 'Прикладное ПО' },
  { id: 3, text: 'Инструментальное ПО' },
  { id: 4, text: 'Системное ПО' },
  { id: 5, text: 'Системное ПО' },
  { id: 6, text: 'Windows' },
  { id: 7, text: 'Adobe' },
  { id: 8, text: 'Антивирусы' },
  { id: 9, text: 'Утилиты' },
  { id: 10, text: 'Корпоративные системы' },
];
export const TEXT_FOR_AUTH_CHECKBOX: {
  id: number;
  text: string;
}[] = [{ id: 1, text: 'Запомнить меня' }];

export const TEXT_FOR_REG_CHECKBOX: {
  id: number;
  text: string;
}[] = [
  { id: 1, text: 'Запомнить меня' },
  { id: 2, text: 'Я соглашаюсь с политикой обработки персональных данных' },
];
export const VALIDATION_SETTINGS = {
  email: {
    pattern:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    maxLength: 30,
    minLength: 6,
    messages: {
      noEmail: 'Необходимо ввести email',
      invalid: 'Необходимо ввести email в правильном формате',
      tooLong: 'Слишком длинный email',
      tooShort: 'Слишком короткий email'
    },
  },
  password: {
    pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-@#$%^&+=!])(?=\S+$)/,
    minLength: 8,
    maxLength: 40,
    messages: {
      invalid: 'Введены недопустимые символы',
      noPassword: 'Необходимо ввести пароль',
      noconfirmPassword: 'Необходимо повторно ввести пароль',
      tooShort: 'Слишком короткий пароль',
      tooLong: 'Слишком длинный пароль',
      noMatch: 'Пароли не совпадают',
      sameAsEmail: 'Пароль не должен совпадать с email',
      sameAsName: 'Пароль не должен совпадать с именем',
    },
  },
  name: {
    pattern: /^[a-zа-яё\s]+$/iu,
    minLength: 2,
    maxLength: 12,
    messages: {
      tooShort: 'Слишком короткое имя',
      tooLong: 'Слишком длинное имя',
      invalid: 'Только кириллица, латиница или дефис',
      noName: 'Необходимо ввести имя',
    },
  },
  companyname: {
    pattern: /^[a-zа-яё\s]+$/iu,
    minLength: 2,
    maxLength: 12,
    messages: {
      tooShort: 'Слишком короткое название',
      tooLong: 'Слишком длинное название',
      invalid: 'Только кириллица, латиница или дефис',
      noCompanyName: 'Необходимо ввести название',
    },
  },
  phone: {
    pattern: /^\d+$/,
    minLength: 10,
    maxLength: 10,
    messages: {
      tooShort: 'Слишком короткий номер',
      tooLong: 'Слишком длинный номер',
      invalid: 'Введены недопустимые символы',
      noPhone: 'Необходимо ввести номер телефона',
    },
  },
  cardNumber: {
    pattern: /\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}/,
    minLength: 19,
    maxLength: 19,
    messages: {
      tooShort: 'Введите еще цифры',
      tooLong: 'Слишком много цифр',
      invalid: 'Введите еще цифры',
      noCardNumber: 'Введите номер карты'
    }
  },
  validDate: {
    pattern: /[0-1][0-9]\/[2-3][0-9]$/,
    minLength: 5,
    maxLength: 5,
    messages: {
      tooShort: 'Неверная дата',
      tooLong: 'Неверная дата',
      invalid: 'Неверный формат даты',
      novalidDate: 'Введите дату'
    }
  },
  cvv: {
    pattern: /[0-9]{3}$/,
    minLength: 3,
    maxLength: 3,
    messages: {
      tooShort: 'Неверный cvv',
      tooLong: 'Неверный cvv',
      invalid: 'Неверный формат cvv',
      novalidDate: 'Введите cvv'
    }
  },
  cardname: {
    pattern: /^[a-z\s]+$/iu,
    minLength: 2,
    maxLength: 42,
    messages: {
      tooShort: 'Слишком короткое имя',
      tooLong: 'Слишком длинное имя',
      invalid: 'Только латинские буквы',
      noName: 'Необходимо ввести имя',
    },
  },
  INN: {
    pattern: /^\d+$/,
    minLength: 10,
    maxLength: 12,
    messages: {
      tooShort: 'Введите еще цифры',
      tooLong: 'Слишком длинный ИНН',
      invalid: 'Необходимо вводить только цифры',
      noINN: 'Необходимо ввести ИНН',
    },
  },
  bik: {
    pattern: /^\d+$/,
    minLength: 9,
    maxLength: 9,
    messages: {
      tooShort: 'Введите еще цифры',
      tooLong: 'Слишком длинный БИК',
      invalid: 'Необходимо вводить только цифры',
      nobik: 'Необходимо ввести БИК'
    }
  },
  ogrnip: {
    pattern: /^\d+$/,
    minLength: 15,
    maxLength: 15,
    messages: {
      tooShort: 'Введите еще цифры',
      tooLong: 'Слишком длинный ОГРНИП',
      invalid: 'Необходимо вводить только цифры',
      noogrnip: 'Необходимо ввести ОГРНИП'
    }
  },
  account: {
    pattern: /^\d+$/,
    minLength: 20,
    maxLength: 20,
    messages: {
      tooShort: 'Введите еще цифры',
      tooLong: 'Слишком длинный расчетный счет',
      invalid: 'Необходимо вводить только цифры',
      noaccount: 'Необходимо ввести расчетный счет'
    }
  }
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
export const INN_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.INN.messages.noINN,
  },
  pattern: {
    value: VALIDATION_SETTINGS.INN.pattern,
    message: VALIDATION_SETTINGS.INN.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.INN.maxLength,
    message: VALIDATION_SETTINGS.INN.messages.tooLong,
  },
};export const PERSONALEMAIL_VALIDATION_CONFIG = {
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

export const NAME_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.name.messages.noName,
  },
  pattern: {
    value: VALIDATION_SETTINGS.name.pattern,
    message: VALIDATION_SETTINGS.name.messages.invalid,
  },
  minLength: {
    value: VALIDATION_SETTINGS.name.minLength,
    message: VALIDATION_SETTINGS.name.messages.tooShort,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.name.maxLength,
    message: VALIDATION_SETTINGS.name.messages.tooLong,
  },
};
export const COMPANYNAME_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.companyname.messages.noCompanyName,
  },
  pattern: {
    value: VALIDATION_SETTINGS.companyname.pattern,
    message: VALIDATION_SETTINGS.companyname.messages.invalid,
  },
  minLength: {
    value: VALIDATION_SETTINGS.companyname.minLength,
    message: VALIDATION_SETTINGS.companyname.messages.tooShort,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.companyname.maxLength,
    message: VALIDATION_SETTINGS.companyname.messages.tooLong,
  },
};
export const PERSONALNAME_VALIDATION_CONFIG = {
  pattern: {
    value: VALIDATION_SETTINGS.name.pattern,
    message: VALIDATION_SETTINGS.name.messages.invalid,
  },
  minLength: {
    value: VALIDATION_SETTINGS.name.minLength,
    message: VALIDATION_SETTINGS.name.messages.tooShort,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.name.maxLength,
    message: VALIDATION_SETTINGS.name.messages.tooLong,
  },
};
export const PHONE_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.phone.messages.noPhone,
  },
  pattern: {
    value: VALIDATION_SETTINGS.phone.pattern,
    message: VALIDATION_SETTINGS.phone.messages.invalid,
  },
  minLength: {
    value: VALIDATION_SETTINGS.phone.minLength,
    message: VALIDATION_SETTINGS.phone.messages.tooShort,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.phone.maxLength,
    message: VALIDATION_SETTINGS.phone.messages.tooLong,
  },
};
export const PERSONALPHONE_VALIDATION_CONFIG = {
  pattern: {
    value: VALIDATION_SETTINGS.phone.pattern,
    message: VALIDATION_SETTINGS.phone.messages.invalid,
  },
  minLength: {
    value: VALIDATION_SETTINGS.phone.minLength,
    message: VALIDATION_SETTINGS.phone.messages.tooShort,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.phone.maxLength,
    message: VALIDATION_SETTINGS.phone.messages.tooLong,
  },
};
export const CARDNUMBER_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.cardNumber.messages.noCardNumber,
  },
  pattern: {
    value: VALIDATION_SETTINGS.cardNumber.pattern,
    message: VALIDATION_SETTINGS.cardNumber.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.cardNumber.maxLength,
    message: VALIDATION_SETTINGS.cardNumber.messages.tooLong,
  },
};
export const VALIDDATE_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.validDate.messages.novalidDate,
  },
  pattern: {
    value: VALIDATION_SETTINGS.validDate.pattern,
    message: VALIDATION_SETTINGS.validDate.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.validDate.maxLength,
    message: VALIDATION_SETTINGS.validDate.messages.tooLong,
  },

}
export const CVV_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.cvv.messages.novalidDate,
  },
  pattern: {
    value: VALIDATION_SETTINGS.cvv.pattern,
    message: VALIDATION_SETTINGS.cvv.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.cvv.maxLength,
    message: VALIDATION_SETTINGS.cvv.messages.tooLong,
  },
  
}
export const CARDNAME_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.cardname.messages.noName,
  },
  pattern: {
    value: VALIDATION_SETTINGS.cardname.pattern,
    message: VALIDATION_SETTINGS.cardname.messages.invalid,
  },
  minLength: {
    value: VALIDATION_SETTINGS.cardname.minLength,
    message: VALIDATION_SETTINGS.cardname.messages.tooShort,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.cardname.maxLength,
    message: VALIDATION_SETTINGS.cardname.messages.tooLong,
  },
}
export const BIK_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.bik.messages.nobik,
  },
  pattern: {
    value: VALIDATION_SETTINGS.bik.pattern,
    message: VALIDATION_SETTINGS.bik.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.bik.maxLength,
    message: VALIDATION_SETTINGS.bik.messages.tooLong,
  },
};
export const OGRNIP_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.ogrnip.messages.noogrnip,
  },
  pattern: {
    value: VALIDATION_SETTINGS.ogrnip.pattern,
    message: VALIDATION_SETTINGS.ogrnip.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.ogrnip.maxLength,
    message: VALIDATION_SETTINGS.ogrnip.messages.tooLong,
  },
};
export const ACCOUNT_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.account.messages.noaccount,
  },
  pattern: {
    value: VALIDATION_SETTINGS.account.pattern,
    message: VALIDATION_SETTINGS.account.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.account.maxLength,
    message: VALIDATION_SETTINGS.account.messages.tooLong,
  },
};
export const CHOOSE_ROLE: {
  id: number;
  title: string;
}[] = [
  { id: 1, title: 'Я покупатель' },
  { id: 2, title: 'Я продавец' },
  { id: 3, title: 'Я админ' },
];

export const FOOTER_LINKS: {
  id: number;
  text: string;
  link: string;
}[] = [
  { id: 1, text: 'Каталог', link: '/catalog' },
  { id: 2, text: 'Производители', link: '/producers' },
  { id: 3, text: 'FAQ', link: '/faq' },
  { id: 4, text: 'Контакты', link: '/contacts' },
  { id: 5, text: 'Условия использования', link: '/terms-of-use' },
  { id: 6, text: 'Политика конфиденциальности', link: '/privacy-policy' },
];
export const CATALOGUE_NAMES: {
  name: string;
  img: string;
  pathName: string;
  id: number;
}[] = [
  { name: 'Офисные приложения', img: '', pathName: 'office-apps', id: 1 },
  { name: 'Системное ПО', img: '', pathName: 'system-apps', id: 2 },
  { name: 'Мультимедиа', img: '', pathName: 'media-apps', id: 3 },
  { name: 'Конвекторы', img: '', pathName: 'convectors', id: 4 },
  { name: 'Архиваторы', img: '', pathName: 'archivers', id: 5 },
  { name: 'Безопасность', img: '', pathName: 'security', id: 6 },
  { name: 'Интернет', img: '', pathName: 'internet', id: 7 },
  { name: 'ERP & CRM', img: '', pathName: 'erp-crm', id: 8 },
];
export const FAQ_INFO: {
  id: number;
  question: string;
  answer: { id: number; text: string }[];
  textlink?: string;
  link?: string;
}[] = [
  {
    id: 1,
    question: 'Где найти свой оплаченный заказ?',
    answer: [{ id: 1, text: 'Посетите личный кабинет, раздел ' }],
    textlink: 'Мои покупки.',
    link: '/personal/purchases'
  },
  {
    id: 2,
    question: 'Как с вами связаться?',
    answer: [
      { id: 1, text: 'Все доступные способы связи на странице ' },
    ],
    textlink: 'Контакты.',
    link: '/contacts'
  },
  {
    id: 3,
    question: 'Правила обмена и возврата',
    answer: [
      {
        id: 1,
        text: 'По действующему российскому законодательству, покупатель может в течение 14 календарных дней вернуть любой товар без каких‑либо причин. В такой ситуации главное, чтобы продукция не была ни разу использована и сохранила свой первоначальный вид.',
      },
      {
        id: 2,
        text: 'Стоит отметить, что программное обеспечение, различные приложения и операционные системы не подпадают под действие данного закона. Однако наши клиенты все равно могут воспользоваться таким правом в течение 14 дней со дня покупки. Нужно помнить, что вернуть можно лишь физические носители — диски. Ключи активации, полученные по электронной почте, не обладают такой гарантией.',
      },
      {
        id: 3,
        text: 'Такой подход не прихоть, а мера безопасности от взлома компьютеров, хакерских атак и разработки вредоносных программ.',
      },
    ],
  },
];

export const TITLES_FOR_BREADCRUMBS: {
  [key: string]: string;
} = {
  catalog: 'Каталог',
  contacts: 'Контакты',
  faq: 'FAQ',
  producers: 'Производители',
  search: 'Поиск',
  personal: 'Личный кабинет',
  seller: 'Личный кабинет',
  purchases: 'Мои покупки',
  products: 'Мои товары',
  analytics: 'Аналитика',
  settings: 'Настройки',
  favorites: 'Избранное',
};

export const CATEGORIZED_TEXT_VENDOR: {
  id: number;
  text: string;
}[] = [
  { id: 1, text: 'Фоторедактор' },
  { id: 2, text: 'Видеоредактор' },
  { id: 3, text: 'Векторная графика' },
  { id: 4, text: 'Дизайн' },
  { id: 5, text: 'Анимирование' },
  { id: 6, text: 'Web-разработка' },
  { id: 7, text: 'Adobe' },
  { id: 8, text: 'Аудиоредактор' },
];

export const SELECT_OPTIONS: {
  label: string;
  value: string;
}[] = [
  // {
  //   value: 'popularity',
  //   label: 'По популярности',
  // },
  {
    value: 'NEWEST',
    label: 'По новизне',
  },
  {
    value: 'BY_PRICE',
    label: 'По цене',
  },
];

export const SELECT_COUNTRIES_OPTIONS: { label: string; value: string }[] = [
  { value: 'RUSSIA', label: 'Россия' },
  { value: 'CHINA', label: 'Китай' },
  { value: 'INDIA', label: 'Индия' },
  { value: 'UK', label: 'Великобритания' },
  { value: 'USA', label: 'США' },
];

export const PRODUCT_ITEMS = {
  products: [
    {
      id: 1,
      name: 'Adobe Photoshop 2023',
      price: 19898,
      installationPrice: 2000,
      image: {
        url: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
      },
    },
    {
      id: 2,
      name: 'FL Studio',
      price: 19898,
      installationPrice: 2000,
      image: {
        url: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
      },
    },
    {
      id: 3,
      name: 'Stop Motion Studio Pro',
      price: 19898,
      installationPrice: 2000,
      image: {
        url: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
      },
    },
    {
      id: 4,
      name: 'PDF Reader Pro',
      price: 19898,
      installationPrice: 2000,
      image: {
        url: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
      },
    },
    {
      id: 5,
      name: '3D SportEditor Desktop',
      price: 19898,
      installationPrice: 2000,
      image: {
        url: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
      },
    },
  ],
};

export const PRODUCERS_LIST = [
  {
    id: 1,
    label: AdobeImg,
    title: 'Adobe',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 2,
    label: AutodeskImg,
    title: 'Autodesk',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 3,
    label: AlludoImg,
    title: 'Alludo',
    descriprion:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 4,
    label: GoogleImg,
    title: 'Google',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 5,
    label: OracleImg,
    title: 'Oracle',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 6,
    label: SAP,
    title: 'SAP',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 7,
    label: PayPAlImg,
    title: 'PayPal',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
  {
    id: 8,
    label: MicrosoftImg,
    title: 'Microsoft',
    description:
      'Компания Adobe — ведущий мировой разработчик революционных программных продуктов для любого вида данных, включая текстовую информацию, графические изображения, видео и web-контент. Adobe Systems является правообладателями формата PDF и TIFF. В сентябре 2022 года Adobe объявила о покупке сервиса Figma за 20 млн $. В феврале 2023 года Еврокомиссия озвучила намерение проверить эту сделку из-за повышенной опасности снижения конкуренции на рынке ПО для интерактивного дизайна. В марте 2023 года Adobe представила собственный ИИ-сервис для генерации изображений по описаниям на естественном языке. В сентябре 2023 года компания завершила процесс бета-тестирования продукта и открыла его широкой публике на коммерческой основе.',
  },
];

export const PURCHASES_ITEMS_CABINET: {
  id: number;
  img: string;
  name: string;
  brand: string;
  describe: string;
  data: string;
}[] = [
  {
    id: 1,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    name: 'Название программного обеспечения',
    brand: 'Бренд',
    describe: 'Описание',
    data: '01/10/2023',
  },
  {
    id: 2,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    name: 'Название программного обеспечения',
    brand: 'Бренд',
    describe: 'Описание',
    data: '01/10/2023',
  },
  {
    id: 3,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    name: 'Название программного обеспечения',
    brand: 'Бренд',
    describe: 'Описание',
    data: '01/10/2023',
  },
];

export const PRODUCT_ITEMS_LIKED: {
  id: number;
  name: string;
  price: number;
  img: string;
  installationPrice: number;
}[] = [
  {
    id: 1,
    name: 'Название программного обеспечения',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    installationPrice: 0,
  },
  {
    id: 2,
    name: 'Название программного обеспечения',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    installationPrice: 0,
  },
  {
    id: 3,
    name: 'Название программного обеспечения',
    price: 19898,
    img: 'http://allpcworld.com/wp-content/uploads/2017/03/Adobe-Photoshop-CC-2017-Portable-Free-Download.jpg',
    installationPrice: 0,
  },
];



  export const SellerExistingCard = {products:[
	{id: 1, logo: PhotoShopImg, name: 'Adobe Photoshop', vendor: {id: 1,country: 'iuh', description: 'df', image: {url:''}, name: 'Adobe'}, category: {id: 1, name:'Мультимедиа'}, art: '123456789', description: 'Многофункциональный растровый графический иллюстратор', data: '01.01.2023', price: 0, installationPrice: 0},
	{id: 2, logo: Acrobat, name: 'Adobe Acrobat', vendor: {id: 1,country: 'iuh', description: 'df', image: {url:''}, name: 'Adobe'}, category: {id: 1, name:'Мультимедиа'}, art: '123456789', description: 'Многофункциональный растровый графический иллюстратор', data: '01.01.2023', price: 0, installationPrice: 0},
	{id: 3, logo: Illustrator, name: 'Adobe Illustrator', vendor: {id: 1,country: 'iuh', description: 'df', image: {url:''}, name: 'Adobe'}, category: {id: 1, name:'Мультимедиа'}, art: '123456789', description: 'Многофункциональный растровый графический иллюстратор', data: '01.01.2023', price: 0, installationPrice: 0}
  ]}

  export const slides: Slider = [
    {
      text: 'Быстрый и удобный процесс покупки — получите доступ к программному обеспечению всего в несколько кликов',
      img: 'https://randomwordgenerator.com/img/picture-generator/sea-2101488_640.jpg',
      link: '/contacts'
    },
    {
      text: 'Удобные способы оплаты онлайн в любое время',
      img: 'https://s3.pet-yes.com/articles/photos/5ca394ee4c03aec91e8d0404b6df9199.jpeg',
      link: '/producers/1'
    },
    {
      text: 'Slide 3',
      img: 'https://sun9-48.userapi.com/impg/fycmHPAnxYdnFozjVbiaWPV1XykgTlhBwN7IzQ/zJhjSHDz0g4.jpg?size=973x728&quality=95&sign=bcd0d179da593a98c3031cf5c1198161&c_uniq_tag=eZu7nS4IBsQizITQuAr9qPIOpSpdihT0DTjdGVt7TWg&type=album',
      link: '/catalog/media-apps'
    },
  ];

export const personalMenuItems = [
  {
    id: 1,
    name: 'Мои покупки',
    link: 'purchases',
  },
  {
    id: 2,
    name: 'Избранное',
    link: 'favorites',
  },
  {
    id: 3,
    name: 'Данные профиля',
    link: 'settings',
  },
  {
    id: 4,
    name: 'Смена пароля',
    link: 'password',
  },
];

export const sellerMenuItems = [
  {
    id: 1,
    name: 'Добавить карточку',
    link: 'add-card',
  },
  {
    id: 2,
    name: 'Черновики',
    link: 'drafts',
  },
  {
    id: 3,
    name: 'Опубликовано',
    link: 'published',
  },
  {
    id: 4,
    name: 'На модерации',
    link: 'on-moderation',
  },
  {
    id: 5,
    name: 'На доработке',
    link: 'correction',
  },
  {
    id: 6,
    name: 'Отчеты продаж',
    link: 'sales',
  },
  {
    id: 7,
    name: 'Банковские реквизиты',
    link: 'bank-details',
  },
  {
    id: 8,
    name: 'Данные профиля',
    link: 'settings',
  },
  {
    id: 9,
    name: 'Смена пароля',
    link: 'password',
  },
];

export const adminMenuItems = [
  {
    id: 1,
    name: 'Опубликовано',
    link: 'published',
  },
  {
    id: 2,
    name: 'На модерации',
    link: 'on-moderation',
  },
  {
    id: 3,
    name: 'Отклоненные',
    link: 'rejected',
  },
  {
    id: 4,
    name: 'Жалобы',
    link: 'appeal',
  },
  {
    id: 5,
    name: 'Вендоры',
    link: 'vendors',
  },
  {
    id: 6,
    name: 'Добавить вендора',
    link: 'add-vendor',
  },
  {
    id: 7,
    name: 'Отчеты продаж',
    link: 'sales',
  },
  {
    id: 8,
    name: 'Контакты',
    link: 'contacts',
  },
];
