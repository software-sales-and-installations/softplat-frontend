import PersonalFavorites from '../../components/PersonalFavorites/PersonalFavorites';
import PersonalPurchases from '../../components/PersonalPurchases/PersonalPurchases';
import PersonalTitles from '../../components/PersonalTitles/PersonalTitles';
import styles from './Personal.module.scss';
import { Routes, Route } from 'react-router-dom';
import MuiBreadcrumbs from '../../components/MuiBreadcrumbs/MuiBreadcrumbs';
 
type Props = {};

const Personal: React.FC = (props: Props) => {
  return (
    <section className={styles.personal}>
      <div className={styles.personal__titles}>
        <MuiBreadcrumbs />
        <PersonalTitles />
      </div>
      <Routes>
        <Route path="/personal/purchases" element={<PersonalPurchases />} />
        <Route path="/personal/favorites" element={<PersonalFavorites />} />
      </Routes>
    </section>
  );
};

export default Personal;
