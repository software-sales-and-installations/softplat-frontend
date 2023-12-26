import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

import { addDays, format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { ru } from 'date-fns/locale';

import { useAppDispatch } from '../../services/redux/store';
import { endDate, startDate } from './CalendarSlice';

import styles from './Calendar.module.scss';

type TRange = {
   startDate?: Date | undefined;
   endDate?: Date | undefined;
   key?: string | undefined;
}

// type TRange = {
//   startDate: Date;
//   endDate: Date;
//   key: string;
// }


const Calendar = () => {
  const dispatch = useAppDispatch();
  const [range, setRange] = useState<TRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [open, setOpen] = useState(false)
  const refOutside = useRef(null)

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true)
    // document.addEventListener("click", hideOnClickOutside, true)
  }, [])

    const hideOnEscape = (e: KeyboardEvent) => {
    if(e.key === "Escape") {
      setOpen(false)
    }
    }

    // const hideOnClickOutside = (e) => {
    // if(refOutside.current && !refOutside.current.contains(e.target)) {
    //   setOpen(false)
    // }
    // }
useEffect(()=>{
  console.log(range[0].startDate?.toString())
  dispatch(startDate(range[0].startDate?.toString()))
  dispatch(endDate(range[0].endDate?.toString()))
},[range])
  return (
    <div className={styles.calendar}>
    <div className={styles.calendar__inputContainer}><label className={styles.calendar__label} htmlFor='date'>Выберите период</label>
    <div className={styles.calendar__containerForInput}>
      <input
      value={`${format(range[0].startDate || 0, "dd/MM/yyyy")}  - ${format(range[0].endDate || 0, "dd/MM/yyyy")}`}
      readOnly
      className={styles.calendar__input}
      id='date'
      />
      <button onClick={() => setOpen(!open)} className={styles.calendar__btn} type='button'/>
      </div>
      </div>
<div ref={refOutside}>
  {open &&
    <DateRange
    className={styles.calendar__range}
      onChange={item => setRange([item.selection])}
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      months={1}
      ranges={range}
      direction="horizontal"
      locale={ru}
      rangeColors={['#55505C', '#E8ECED', '#55505C']}
    />  }
  </div>
    </div>
  )
};

export default Calendar;
