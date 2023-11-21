import styles from './PersonalSettings.module.scss';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PersonalSettingsData from '../PersonalSettingsData/PersonalSettingsData';
import PersonalSettingsPassword from '../PersonalSettingsPassword/PersonalSettingsPassword';

const PersonalSettings: React.FC = () => {
  return (
    <>
      <section className={styles.personalSettings}>
        <h2 className={styles.personalSettings__title}>Настройки</h2>
        <p className={styles.personalSettings__subtitle}>
          Заполните данные профиля
        </p>
        <nav className={styles.personalSettings__titles}>
          <Link to="changeData" className={styles.personalSettings__data}>
            Данные профиля
          </Link>
          <Link to="changePassword" className={styles.personalSettings__data}>
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
