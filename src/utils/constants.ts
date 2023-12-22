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

import OfficeApps from '../images/catalog/office-apps.png';
import SystemApps from '../images/catalog/system-apps.png';
import Internet from '../images/catalog/internet.png';
import Security from '../images/catalog/security.png';
import Convectors from '../images/catalog/convectors.png';
import Multimedia from '../images/catalog/multimedia.png';
import ERPCRM from '../images/catalog/erp-crm.png';
import Archivators from '../images/catalog/archivators.png';

import SliderSecurity from '../images/slider/slider-security.png'
import SliderMicrosoft from '../images/slider/slider-microsoft.png'
import SliderPhotoshop from '../images/slider/slider-photoshop.png'

export const CATEGORIZED_TEXT: {
  id: number;
  text: string;
}[] = [
  { id: 1, text: 'Системное ПО' },
  { id: 2, text: 'Прикладное ПО' },
  { id: 3, text: 'Инструментальное ПО' },
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
    pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    maxLength: 30,
    minLength: 6,
    messages: {
      noEmail: 'Необходимо ввести email',
      invalid: 'Необходимо ввести email в правильном формате',
      tooLong: 'Слишком длинный email',
      tooShort: 'Слишком короткий email',
      sameAsNow: 'Введите новый email'
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
      unsafe: 'Введите более надежный пароль'
    },
  },
  name: {
    pattern: /^[a-zа-яё\s]+$/iu,
    minLength: 2,
    maxLength: 20,
    messages: {
      tooShort: 'Слишком короткое имя/название',
      tooLong: 'Слишком длинное имя/название',
      invalid: 'Только кириллица, латиница или дефис',
      noName: 'Необходимо ввести имя/название',
      sameAsNow: 'Введите новое имя'
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
  vendordescription: {
    pattern: /^[0-9a-zA-Zа-яёЁА-Я-@#$.,%^&+=?!"'«»\s]/,
    minLength: 2,
    maxLength: 500,
    messages: {
      tooShort: 'Слишком короткое описание',
      tooLong: 'Слишком длинное описание',
      invalid: 'Использование недопустимых символов',
      noVendorDescription: 'Необходимо добавить описание',
    }

  },
  vendorname: {
    pattern: /^[a-zа-яё\s]+$/iu,
    minLength: 2,
    maxLength: 255,
    messages: {
      tooShort: 'Слишком короткое название',
      tooLong: 'Слишком длинное название',
      invalid: 'Использование недопустимых символов',
      noVendorName: 'Необходимо добавить название',
    }
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
      sameAsNow: 'Введите новый номер телефона'
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
      tooShort: 'Введен некорректный CVV',
      tooLong: 'Введен некорректный CVV',
      invalid: 'Введен некорректный CVV',
      novalidDate: 'Введите cvv'
    }
  },
  cardname: {
    pattern: /^[a-z\s/-]+$/iu,
    minLength: 4,
    maxLength: 16,
    messages: {
      tooShort: 'Проверьте имя владельца карты',
      tooLong: 'Проверьте имя владельца карты',
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
      nobik: 'Необходимо ввести БИК',
      sameAsNow: 'Введите новое значение'
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
      noogrnip: 'Необходимо ввести ОГРНИП',
      sameAsNow: 'Введите новое значение'
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
      noaccount: 'Необходимо ввести расчетный счет',
      sameAsNow: 'Введите новое значение'
    }
  },
  link: {
    pattern: /^https?:\/\/[\w\-\.\/~:\?\#\[\]@!$&'\(\)\*\+,;=]+[\-\.\/~:\?\#\[\]@!$&'\(\)\*\+,;=]{1}[\w\-\.\/~:\?\#\[\]@!$&'\(\)\*\+,;=]+[#\/]?$/,
    messages: {
      invalid: 'Введите ссылку'
    }
  },
  price: {
    pattern: /^\d+$/,
    maxLength: 6,
    messages: {
      invalid: 'Необходимо ввести только цифры',
      tooLong: 'Слишком большое число',
      noPrice: 'Заполните это поле'
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
  minLength: {
    value: VALIDATION_SETTINGS.email.minLength,
    message: VALIDATION_SETTINGS.email.messages.tooShort,
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
  minLength: {
    value: VALIDATION_SETTINGS.INN.minLength,
    message: VALIDATION_SETTINGS.INN.messages.tooShort,
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
  minLength: {
    value: VALIDATION_SETTINGS.email.minLength,
    message: VALIDATION_SETTINGS.email.messages.tooShort,
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
  minLength: {
    value: VALIDATION_SETTINGS.bik.minLength,
    message: VALIDATION_SETTINGS.bik.messages.tooShort,
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
  minLength: {
    value: VALIDATION_SETTINGS.ogrnip.minLength,
    message: VALIDATION_SETTINGS.ogrnip.messages.tooShort,
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
  minLength: {
    value: VALIDATION_SETTINGS.account.minLength,
    message: VALIDATION_SETTINGS.account.messages.tooShort,
  },
};
export const LINK_VALIDATION_CONFIG = {
  pattern: {
    value: VALIDATION_SETTINGS.link.pattern,
    message: VALIDATION_SETTINGS.link.messages.invalid,
  }
}
export const PRICE_VALIDATION_CONFIG ={
  required: {
    value: true,
    message: VALIDATION_SETTINGS.price.messages.noPrice,
  },
  pattern: {
    value: VALIDATION_SETTINGS.price.pattern,
    message: VALIDATION_SETTINGS.price.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.price.maxLength,
    message: VALIDATION_SETTINGS.price.messages.tooLong,
  },
};
export const VENDORNAME_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.vendorname.messages.noVendorName,
  },
  pattern: {
    value: VALIDATION_SETTINGS.vendorname.pattern,
    message: VALIDATION_SETTINGS.vendorname.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.vendorname.maxLength,
    message: VALIDATION_SETTINGS.vendorname.messages.tooLong,
  },
  minLength: {
    value: VALIDATION_SETTINGS.vendorname.minLength,
    message: VALIDATION_SETTINGS.vendorname.messages.tooShort,
  },
};
export const VENDORDESCRIPTION_VALIDATION_CONFIG = {
  required: {
    value: true,
    message: VALIDATION_SETTINGS.vendordescription.messages.noVendorDescription,
  },
  pattern: {
    value: VALIDATION_SETTINGS.vendordescription.pattern,
    message: VALIDATION_SETTINGS.vendordescription.messages.invalid,
  },
  maxLength: {
    value: VALIDATION_SETTINGS.vendordescription.maxLength,
    message: VALIDATION_SETTINGS.vendordescription.messages.tooLong,
  },
  minLength: {
    value: VALIDATION_SETTINGS.vendordescription.minLength,
    message: VALIDATION_SETTINGS.vendordescription.messages.tooShort,
  },
};
export const CARD_REQUIRED_FIELDS = {
  required: {
    value: true,
    message: 'Необходимо заполнить это поле'
  }
}
export const CHOOSE_ROLE: {
  id: number;
  title: string;
}[] = [
  { id: 1, title: 'Я покупатель' },
  { id: 2, title: 'Я продавец' }
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
  { name: 'Офисные приложения', img: OfficeApps, pathName: 'office-apps', id: 1 },
  { name: 'Системное ПО', img: SystemApps, pathName: 'system-apps', id: 2 },
  { name: 'Мультимедиа', img: Multimedia, pathName: 'media-apps', id: 3 },
  { name: 'Конвекторы', img: Convectors, pathName: 'convectors', id: 4 },
  { name: 'Архиваторы', img: Archivators, pathName: 'archivers', id: 5 },
  { name: 'Безопасность', img: Security, pathName: 'security', id: 6 },
  { name: 'Интернет', img: Internet, pathName: 'internet', id: 7 },
  { name: 'ERP & CRM', img: ERPCRM, pathName: 'erp-crm', id: 8 },
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
  seller: string;
  data: string;
  isDownloaded: boolean;
  number: number;
}[] = [
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
    name: 'Adobe Photoshop',
    brand: 'Adobe',
    seller: 'Продавец',
    data: '01/10/2023',
    isDownloaded: false,
    number: 123456789,
  },
  {
    id: 2,
    img: 'data:image/png;base64,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',
    name: 'Adobe Acrobat',
    brand: 'Adobe',
    seller: 'Продавец',
    data: '01/10/2023',
    isDownloaded: false,
    number: 123456789,
  },
  {
    id: 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
    name: 'Adobe Illustrator',
    brand: 'Adobe',
    seller: 'Продавец',
    data: '01/10/2023',
    isDownloaded: true,
    number: 123456789,
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
      text: 'Программы для безопасности вашего бизнеса по выгодным ценам',
      img: SliderSecurity,
      link: '/catalog/security'
    },
    {
      text: 'Самые продвинутые решения для вашего офиса от Microsoft',
      img: SliderMicrosoft,
      link: '/producers/2'
    },
    {
      text: 'Новая версия Adobe Photoshop 2024 с использованием нейросети уже на сайте!',
      img: SliderPhotoshop,
      link: '/product/3'
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
    name: 'Жалобы',
    link: 'appeal',
  },
  {
    id: 7,
    name: 'Отчеты продаж',
    link: 'sales',
  },
  {
    id: 8,
    name: 'Банковские реквизиты',
    link: 'bank-details',
  },
  {
    id: 9,
    name: 'Данные профиля',
    link: 'settings',
  },
  {
    id: 10,
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
];

export const COMMON_PASSWORDS = [
  'Password1@',
  'Welcome123!',
  'SecurePass12#',
  'StrongPassword9$',
  'SecretCode2022@',
  'SuperSecure!23',
  '12345678Ab@',
  'P@ssw0rd2021!',
  '!Qwerty12345',
  'Qwerty123@',
  'Asdfgh123!',
  'Zxcvbn123@',
  'Qwerty!123',
  'Asdfgh!123',
  'Zxcvbn!123'
]
