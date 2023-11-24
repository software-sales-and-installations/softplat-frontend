import { FC } from 'react';
import styles from './Selectform.module.scss';
import DropDown from '../../UI/DropDown/DropDown';
import { SELECT_OPTIONS } from '../../utils/constants';


// type Props = {};

const SelectForm: FC = () => {
  return (
    <div className={styles.form}>
      <DropDown options={SELECT_OPTIONS} />
    </div>
  );
};

export default SelectForm;
