import { FC, useState } from 'react';
import styles from './HeaderSearchForm.module.scss';
import { GrSearch } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store';
import { fetchAllCards } from '../../services/redux/slices/cards/cards';

export const HeaderSearchForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e:any) => {
    e.preventDefault()
    if (searchValue.length) {
      dispatch(fetchAllCards());
      navigate('/search', {replace: true, state: searchValue});
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
