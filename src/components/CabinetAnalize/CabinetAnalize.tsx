import { useState, useEffect, useRef } from 'react';
import styles from './CabinetAnalize.module.scss';
import { Calendar } from '../Calendar/Calendar';
/* import 'react-calendar/dist/Calendar.css'; */
import '../../styles/static/css/global.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../../UI/Button/Button';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import { ALL_SELLERS } from '../../utils/constants';
import SellersList from '../SellersList/SellersList';
import { SELECT_SELLERS } from '../../utils/constants';

const CabinetAnalize: React.FC = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [showCurrentDate, setShowCurrentDate] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [profit, setProfit] = useState(0);

  // Функция для расчета общей стоимости продуктов
  const calculateTotalPrice = () => {
    const sum = ALL_SELLERS.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(sum);
  };

  const calculateTotalProfit = () => {
    const sum = ALL_SELLERS.reduce((acc, product) => acc + product.profit, 0);
    setProfit(sum);
  };

  const selectDateRange = (date: Date | null) => {
    if (selectedStartDate && selectedEndDate) {
      setSelectedStartDate(null);
      setSelectedEndDate(null);
      setShowCurrentDate(true);
    } else {
      setSelectedStartDate(date);
      setShowCurrentDate(false);
    }
  };

  const updateSelectedRange = (startDate: Date, endDate: Date) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const handleOkButtonClick = () => {
    setCalendarVisible(false);
  };

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalProfit();
  }, [ALL_SELLERS]);

  return (
    <section className={styles.cabinetAnalize}>
      {/*       <h2 className={styles.cabinetAnalize__title}>Отчеты продаж</h2>
      <p className={styles.cabinetAnalize__subtitle}>
        Здесь отображаются отчеты динамики продаж. Вы можете ознакомиться с
        детализацией отчета за выбранный период времени, а также выгрузить отчет
        по продажам
      </p>
 */}
      <label className={styles.label}>Выберите период</label>
      <div className={styles.period}>
        <div>
          <input
            className={styles.field}
            type="date"
            ref={inputRef}
            onClick={() => setCalendarVisible(!calendarVisible)}
            value={
              selectedStartDate && selectedEndDate
                ? `${selectedStartDate.toLocaleDateString()} - ${selectedEndDate.toLocaleDateString()}`
                : showCurrentDate && selectedStartDate
                ? selectedStartDate.toLocaleDateString()
                : ''
            }
          />
          {calendarVisible && (
            <Calendar
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              selectDateRange={selectDateRange}
              setSelectedStartDate={setSelectedStartDate}
              setSelectedEndDate={setSelectedEndDate}
              handleOkButtonClick={handleOkButtonClick}
              updateSelectedRange={updateSelectedRange}
            />
          )}
        </div>
        <div className={styles.dropDown}>
          <DropDown
            type={SelectorType.SELLERS}
            options={SELECT_SELLERS}
            classNamePrefix="custom-select"
          />
        </div>
        <div className={styles.cabinetAnalize__button_form}>
          <Button type="submit" mode="primary">
            Сформировать
          </Button>
        </div>
      </div>
      <div className={styles.cabinetAnalize__subheadings}>
        <p className={styles.cabinetAnalize__subheading}>№</p>
        <p className={styles.cabinetAnalize__subheading}>Дата</p>
        <p className={styles.cabinetAnalize__subheading}>Название</p>
        <p className={styles.cabinetAnalize__subheading}>Артикул</p>
        <p className={styles.cabinetAnalize__subheading}>Продавец</p>
        <p className={styles.cabinetAnalize__subheading_got}>Купили</p>
        <p className={styles.cabinetAnalize__subheading}>Сумма</p>
        <p className={styles.cabinetAnalize__subheading}>Выручка</p>
      </div>
      <ul className={styles.cabinetAnalize__list}>
        {ALL_SELLERS.map(i => (
          <li key={i.id}>
            <SellersList
              id={i.id}
              data={i.data}
              name={i.name}
              vendor={i.vendor}
              seller={i.seller}
              amount={i.amount}
              price={i.price}
              profit={i.profit}
            />
          </li>
        ))}
      </ul>
      <div className={styles.cabinetAnalize__sum}>
        <p className={styles.cabinetAnalize__total_text}>Итого</p>
        <div className={styles.cabinetAnalize__total}>
          <div className={styles.cabinetAnalize__total_price}>{totalPrice}</div>
          <div className={styles.cabinetAnalize__total_profit}>{profit}</div>
        </div>
      </div>
      <div className={styles.cabinetAnalize__button_unload}>
        <Button type="submit" mode="primary">
          Выгрузить
        </Button>
      </div>
    </section>
  );
};

export default CabinetAnalize;
