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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18.1243 0C8.34418 0 0.416016 7.92807 0.416016 17.7081C0.416016 27.4881 8.34418 35.4162 18.1243 35.4162C27.9045 35.4162 35.8327 27.4881 35.8327 17.7081C35.8327 7.92807 27.9045 0 18.1243 0ZM24.9347 19.9788C24.9347 19.9788 26.5008 21.5246 26.8863 22.2421C26.8974 22.2569 26.9029 22.2716 26.9066 22.279C27.0634 22.5428 27.1003 22.7475 27.0228 22.9006C26.8937 23.1552 26.451 23.2806 26.2997 23.2917H23.5328C23.3409 23.2917 22.9388 23.2419 22.4518 22.9062C22.0774 22.6442 21.7084 22.2145 21.3487 21.7957C20.812 21.1723 20.3471 20.6336 19.8786 20.6336C19.8191 20.6335 19.7599 20.6429 19.7033 20.6613C19.3492 20.7757 18.8954 21.2811 18.8954 22.6276C18.8954 23.0482 18.5634 23.2899 18.3291 23.2899H17.0618C16.6302 23.2899 14.3816 23.1386 12.3894 21.0376C9.95085 18.4644 7.75575 13.3032 7.7373 13.2553C7.59896 12.9214 7.88487 12.7425 8.19661 12.7425H10.9912C11.3638 12.7425 11.4856 12.9693 11.5704 13.1704C11.67 13.4047 12.0353 14.3362 12.6348 15.3839C13.6069 17.092 14.2027 17.7856 14.6804 17.7856C14.77 17.7845 14.858 17.7617 14.9368 17.7192C15.5603 17.3724 15.4441 15.1497 15.4164 14.6885C15.4164 14.6018 15.4146 13.6943 15.0955 13.2589C14.8668 12.9435 14.4775 12.8236 14.2414 12.7794C14.337 12.6475 14.4629 12.5406 14.6085 12.4676C15.0365 12.2536 15.8075 12.2223 16.573 12.2223H16.9991C17.8292 12.2334 18.0432 12.2868 18.3439 12.3625C18.9526 12.5082 18.9655 12.9011 18.912 14.2458C18.8954 14.6276 18.8788 15.0593 18.8788 15.5684C18.8788 15.6791 18.8733 15.7971 18.8733 15.9225C18.8548 16.6069 18.8327 17.3835 19.316 17.7026C19.379 17.7421 19.4519 17.7632 19.5263 17.7634C19.6941 17.7634 20.1995 17.7634 21.5683 15.4153C21.9904 14.6595 22.3572 13.8741 22.6658 13.0653C22.6935 13.0173 22.7746 12.8697 22.8706 12.8126C22.9413 12.7765 23.0198 12.7581 23.0993 12.7591H26.3845C26.7424 12.7591 26.9877 12.8126 27.0339 12.9509C27.115 13.1704 27.0191 13.84 25.5194 15.8709L24.8498 16.7545C23.4903 18.5363 23.4903 18.6267 24.9347 19.9788Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
