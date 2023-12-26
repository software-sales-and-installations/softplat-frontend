import { FC, useState } from 'react';
import styles from './HeaderSearchForm.module.scss';
import { GrSearch } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export const HeaderSearchForm: FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchValue.length) {
      navigate('/search', { replace: true, state: searchValue });
      localStorage.setItem('searchValue', searchValue);
    }
  };
  return (
    <form className={styles.form} onSubmit={e => handleSearch(e)}>
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
