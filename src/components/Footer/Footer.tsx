import React from 'react';
import { FC } from 'react';

import style from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
<div className={style.footer__content}>

      <div className={style.footer__logo}>
        <div className={style.footer__logo}></div>
      </div>
      <ul className={style.footer__column}>
            <li className={style.footer__item}>
              <a href="каталог.html" className={style.footer__link}>
                Каталог
              </a>
            </li>
            <li className={style.footer__item}>
              <a href="производители.html" className={style.footer__link}>
                Производители
              </a>
            </li>
            <li className={style.footer__item}>
              <a href="faq.html" className={style.footer__link}>
                FAQ
              </a>
            </li>
            <li className={style.footer__item}>
              <a href="контакты.html" className={style.footer__link}>
                Контакты
              </a>
            </li>
      </ul>
      <ul className={style.footer__column}>
      <li className={style.footer__item}>
              <a href="условия.html" className={style.footer__link}>
                Условия пользования
              </a>
            </li>
            <li className={style.footer__item}>
              <a href="политика.html" className={style.footer__link}>
                Политика конфиденциальности
              </a>
            </li>
      </ul>
      <div className="footer__column footer__column-links">
        <div className="footer__social-icons">
          <a href="#" className="footer__social-icon">
            <img src="facebook.png" alt="Facebook" />
          </a>
          <a href="#" className="footer__social-icon">
            <img src="twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>

</div>
    </footer>
  );
};
