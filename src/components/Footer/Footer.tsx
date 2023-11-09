import React from 'react';
import { FC } from 'react';

import style from './Footer.module.scss';

import { BsTelegram } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FOOTER_LINKS } from '../../utils/constants';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.footer__logo}>{/* */}</div>

        <ul className={style.footer__column}>
          {FOOTER_LINKS.slice(0, 4).map(link => (
            <li className={style.footer__item} key={link.id}>
              <a href="#" className={style.footer__link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className={style.footer__column}>
          {FOOTER_LINKS.slice(4, 6).map(link => (
            <li className={style.footer__item} key={link.id}>
              <a href="#" className={style.footer__link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className={style.footer__column}>
          <div className={style.footer__socialBLock}>
            <p className={style.footer__socialMedia}>Мы в соцсетях:</p>
            <ul className={style.footer__socialIcons}>
              <li>
                <a href="#">
                  <BsTelegram className={style.footer__socialIcon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <SlSocialVkontakte className={style.footer__socialIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
