import React from 'react';
import styles from './SellerSales.module.scss';
import Calendar from '../Calendar/Calendar.tsx';
import { StatsTable } from '../StatsTable/StatsTable';
import { Button } from '../../UI/Button/Button.tsx';
import { useState } from 'react';

const SellerSales: React.FC = () => {
  const [statsTable, setStatsTable] = useState(false)
  return (
    <section className={styles.sales}>
      <div className={styles.containerForCalendar}><Calendar />
      <div className={styles.containerForCalendar__btn}><Button onClick={()=>setStatsTable(!statsTable)} mode='primary' type='button'>Сформировать</Button></div>
      </div>
      {statsTable?<StatsTable/>:null}
    </section>
  );
};

export default SellerSales;
