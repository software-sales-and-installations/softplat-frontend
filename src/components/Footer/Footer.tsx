import { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './Footer.module.scss';

import { BsTelegram } from 'react-icons/bs';
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
                <svg
                  className={style.footer__socialIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="white"
                >
                  <g clip-path="url(#clip0_547_4058)">
                    <path d="M17.7083 0C7.92817 0 0 7.92807 0 17.7081C0 27.4881 7.92817 35.4162 17.7083 35.4162C27.4885 35.4162 35.4167 27.4881 35.4167 17.7081C35.4167 7.92807 27.4885 0 17.7083 0ZM24.5187 19.9788C24.5187 19.9788 26.0847 21.5246 26.4703 22.2421C26.4813 22.2569 26.4869 22.2716 26.4906 22.279C26.6474 22.5428 26.6842 22.7475 26.6068 22.9006C26.4776 23.1552 26.0349 23.2806 25.8837 23.2917H23.1168C22.9249 23.2917 22.5228 23.2419 22.0358 22.9062C21.6614 22.6442 21.2924 22.2145 20.9327 21.7957C20.3959 21.1723 19.9311 20.6336 19.4626 20.6336C19.4031 20.6335 19.3439 20.6429 19.2873 20.6613C18.9332 20.7757 18.4794 21.2811 18.4794 22.6276C18.4794 23.0482 18.1474 23.2899 17.9131 23.2899H16.6458C16.2142 23.2899 13.9656 23.1386 11.9734 21.0376C9.53483 18.4644 7.33974 13.3032 7.32129 13.2553C7.18294 12.9214 7.46886 12.7425 7.7806 12.7425H10.5752C10.9478 12.7425 11.0696 12.9693 11.1544 13.1704C11.254 13.4047 11.6192 14.3362 12.2188 15.3839C13.1909 17.092 13.7867 17.7856 14.2644 17.7856C14.354 17.7845 14.442 17.7617 14.5208 17.7192C15.1443 17.3724 15.0281 15.1497 15.0004 14.6885C15.0004 14.6018 14.9986 13.6943 14.6795 13.2589C14.4507 12.9435 14.0615 12.8236 13.8254 12.7794C13.921 12.6475 14.0469 12.5406 14.1925 12.4676C14.6204 12.2536 15.3915 12.2223 16.157 12.2223H16.5831C17.4132 12.2334 17.6272 12.2868 17.9278 12.3625C18.5366 12.5082 18.5495 12.9011 18.496 14.2458C18.4794 14.6276 18.4628 15.0593 18.4628 15.5684C18.4628 15.6791 18.4572 15.7971 18.4572 15.9225C18.4388 16.6069 18.4167 17.3835 18.9 17.7026C18.963 17.7421 19.0358 17.7632 19.1102 17.7634C19.2781 17.7634 19.7835 17.7634 21.1522 15.4153C21.5744 14.6595 21.9412 13.8741 22.2498 13.0653C22.2775 13.0173 22.3586 12.8697 22.4545 12.8126C22.5253 12.7765 22.6038 12.7581 22.6833 12.7591H25.9685C26.3264 12.7591 26.5717 12.8126 26.6178 12.9509C26.699 13.1704 26.6031 13.84 25.1034 15.8709L24.4338 16.7545C23.0743 18.5363 23.0743 18.6267 24.5187 19.9788Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_547_4058">
                      <rect width="35.4167" height="35.4167" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
