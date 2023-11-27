import {FC} from 'react';
import styles from './Seller.module.scss';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import SellerCabinetContent from '../../components/SellerCabinetContent/SellerCabinetContent';

export const Seller: FC = () =>{
    return (
        <section className={styles.seller}>
        <div className={styles.seller__titles}>
          <CabinetMenu />
        </div>
        <Routes>
          <Route path="/products" element={<SellerCabinetContent />} />
        </Routes>
      </section>
    )
}
