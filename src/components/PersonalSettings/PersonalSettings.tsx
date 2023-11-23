import styles from './PersonalSettings.module.scss';
import {useState} from 'react';
import classNames from 'classnames';
import PersonalSettingsData from '../PersonalSettingsData/PersonalSettingsData';
import PersonalSettingsPassword from '../PersonalSettingsPassword/PersonalSettingsPassword';

const PersonalSettings: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState('data')
  return (
    <>
      <section className={styles.personalSettings}>
        <h2 className={styles.personalSettings__title}>Настройки</h2>
        <p className={styles.personalSettings__subtitle}>
          Заполните данные профиля
        </p>
        <nav className={styles.personalSettings__titles}>
          <button
            type='button'
            onClick={()=>setActiveBtn('data')}
            className={classNames(
              styles.personalSettings__data,
              activeBtn === 'data'
                ? styles.personalSettings__data_aktive
                : '',
            )}
          >
            Данные профиля
          </button>
          <button
            onClick={()=>setActiveBtn('password')}
            type='button'
            className={classNames(
              styles.personalSettings__data,
              activeBtn === 'password'
                ? styles.personalSettings__data_aktive
                : '',
            )}
          >
            Смена пароля
          </button>
        </nav>
        {activeBtn==='data' ? <PersonalSettingsData /> : <PersonalSettingsPassword />}
      </section>
    </>
  );
};

export default PersonalSettings;
