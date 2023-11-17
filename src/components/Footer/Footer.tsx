import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './Footer.module.scss';

import { BsTelegram } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FOOTER_LINKS } from '../../utils/constants';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <Link to="/">
          {' '}
          <img className={style.footer__logo} />
        </Link>

        <ul className={style.footer__column}>
          {FOOTER_LINKS.slice(0, 4).map(link => (
            <li className={style.footer__item} key={link.id}>
              <Link to={link.link} className={style.footer__link}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={style.footer__column}>
          {FOOTER_LINKS.slice(4, 6).map(link => (
            <li className={style.footer__item} key={link.id}>
              <Link to={link.link} className={style.footer__link}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.footer__socialBLock}>
          <p className={style.footer__socialMedia}>Мы в соцсетях:</p>
          <ul className={style.footer__socialIcons}>
            <li>
              <Link to={''}>
                <BsTelegram className={style.footer__socialIcon} />
              </Link>
            </li>
            <li>
              <Link to={''}>
                <SlSocialVkontakte className={style.footer__socialIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
