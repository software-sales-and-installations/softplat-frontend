import PersonalFavorites from '../../components/PersonalFavorites/PersonalFavorites';
import PersonalPurchases from '../../components/PersonalPurchases/PersonalPurchases';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import styles from './Personal.module.scss';
import { Routes, Route } from 'react-router-dom';
import PersonalSettings from '../../components/PersonalSettings/PersonalSettings';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Personal: React.FC = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.personal}>
        <div className={styles.personal__titles}>
          <CabinetMenu mode="user" />
        </div>
        <Routes>
          <Route
            path="/purchases"
            element={
              // <PersonalPurchases />
              <h2>Мои покупки</h2>
            }
          />
          <Route
            path="/favorites"
            element={
              // <PersonalFavorites />
              <h2>Избранное</h2>
            }
          />
          <Route
            path="/settings"
            element={
              // <PersonalSettings />
              <h2>Данные профиля</h2>
            }
          />
          <Route
            path="/password"
            element={
              // Компонент смены пароля
              <h2>Смена пароля</h2>
            }
          />
        </Routes>
      </section>
    </>
  );
};

export default Personal;
