import styles from './PersonalSettings.module.scss';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PersonalSettingsData from '../PersonalSettingsData/PersonalSettingsData';
import PersonalSettingsPassword from '../PersonalSettingsPassword/PersonalSettingsPassword';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const PersonalSettings: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <section className={styles.personalSettings}>
        <h2 className={styles.personalSettings__title}>Настройки</h2>
        <p className={styles.personalSettings__subtitle}>
          Заполните данные профиля
        </p>
        <nav className={styles.personalSettings__titles}>
          <Link
            to="changeData"
            className={classNames(
              styles.personalSettings__data,
              location.pathname === '/personal/settings/changeData'
                ? styles.personalSettings__data_aktive
                : '',
            )}
          >
            Данные профиля
          </Link>
          <Link
            to="changePassword"
            className={classNames(
              styles.personalSettings__data,
              location.pathname === '/personal/settings/changePassword'
                ? styles.personalSettings__data_aktive
                : '',
            )}
          >
            Смена пароля
          </Link>
        </nav>
        <Routes>
          <Route path="/changeData" element={<PersonalSettingsData />} />
          <Route
            path="/changePassword"
            element={<PersonalSettingsPassword />}
          />
        </Routes>
      </section>
    </>
  );
};

export default PersonalSettings;
