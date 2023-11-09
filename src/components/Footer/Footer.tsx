import React from 'react';
import { FC } from 'react';

import style from './Footer.module.scss';


import {BsTelegram} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.footer__logo}>
          <div className={style.footer__logo}></div>
        </div>
        <ul className={style.footer__column}>
          <li className={style.footer__item}>
            <a href="#" className={style.footer__link}>
              Каталог
            </a>
          </li>
          <li className={style.footer__item}>
            <a href="#" className={style.footer__link}>
              Производители
            </a>
          </li>
          <li className={style.footer__item}>
            <a href="#" className={style.footer__link}>
              FAQ
            </a>
          </li>
          <li className={style.footer__item}>
            <a href="#" className={style.footer__link}>
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
        <div className={style.footer__column}>
          <div className={style.footer__socialIcons}>
            <p className={style.footer__socialMedia}>Мы в социальных сетях</p>
            <a href="#">
            <BsTelegram className={style.footer__socialIcon}/>
            </a>
            <a href="#">
              <SlSocialVkontakte className={style.footer__socialIcon}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
