import Slider from '../../components/Slider/Slider.tsx';
import styles from './contacts.module.scss';
import contactsMap from '../../images/contactsMap.svg';
import { Link } from 'react-router-dom';
import { BsTelegram } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';

const Contacts = () => {
  return (
    <section>
      <Slider />
      <div className={styles.contacts__container}>
        <ul className={styles.contacts__titles}>
          <li className={styles.contacts__item}><h1 className={styles.contacts__title}> Контакты</h1></li>
          <li><h2  className={styles.contacts__sunbtitle}> Адрес офиса:</h2>
            <p className={styles.contacts__text}>Россия, Москва, Молодогвардейская улица, д.61 стр.36</p></li>
          <li className={styles.contacts__item}><h2 className={styles.contacts__sunbtitle}> Режим работы офиса</h2>
            <p className={styles.contacts__text}>пн-вс.: 10:00-18:00</p></li>
          <li className={styles.contacts__item}><h2 className={styles.contacts__sunbtitle}> Телефон </h2>
            <p className={styles.contacts__text}>+7 (499) 123-45-67</p></li>
          <li className={styles.contacts__item}>
            <div className={styles.contacts__socials}>
              <h2 className={styles.contacts__sunbtitle}> Мы в социальных сетях</h2>
              <Link to={''}>
                <BsTelegram className={styles.contacts__social_icon} />
              </Link>
              <Link to={''}>
                <SlSocialVkontakte className={styles.contacts__social_icon} />
              </Link>
                </div>
          </li>
        </ul>
        <img className={styles.contcats__map} src={contactsMap} alt='Карта с адресом' />
      </div>
    </section>
  );
};

export default Contacts;
