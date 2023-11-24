import { FC, useState } from 'react';
import styles from './HeaderSearchForm.module.scss';
import { GrSearch } from 'react-icons/gr';
import { useAppSelector } from '../../services/redux/store';

export const HeaderSearchForm: FC = () => {
    const cards = useAppSelector(state => state.cards.cards)
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {};
  return (
    <form className={styles.form}>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type="text"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        <GrSearch className={styles.button__search} />
      </button>
    </form>
  );
};
