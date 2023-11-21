import PersonalFavorites from '../../components/PersonalFavorites/PersonalFavorites';
import PersonalPurchases from '../../components/PersonalPurchases/PersonalPurchases';
import PersonalSettings from '../../components/PersonalSettings/PersonalSettings';
import PersonalTitles from '../../components/PersonalTitles/PersonalTitles';
import styles from './Personal.module.scss';
import { Routes, Route } from 'react-router-dom';
import MuiBreadcrumbs from '../../components/MuiBreadcrumbs/MuiBreadcrumbs';

const Personal: React.FC = () => {
  return (
    <section className={styles.personal}>
      <div className={styles.personal__titles}>
        <MuiBreadcrumbs />
        <PersonalTitles />
      </div>
      <Routes>
        <Route path="/purchases" element={<PersonalPurchases />} />
        <Route path="/favorites" element={<PersonalFavorites />} />
        <Route path="/settings/*" element={<PersonalSettings />} />
      </Routes>
    </section>
  );
};

export default Personal;
