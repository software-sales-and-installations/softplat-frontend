import styles from './Admin.module.scss';
import {FC} from 'react';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import { AdminCards } from '../../components/AdminCards/AdminCards';

export const Admin: FC = () =>{
    return (
    <section className={styles.admin}>
        <div className={styles.admin__titles}>
          <CabinetMenu />
        </div>
        <Routes>
          <Route path="/products" element={<AdminCards />} />
        </Routes>
    </section>
    )
}
