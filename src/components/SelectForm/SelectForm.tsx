import { FC } from 'react';
import styles from './Selectform.module.scss';
import DropDown from '../../UI/DropDown/DropDown';
import { SELECT_OPTIONS } from '../../utils/constants';

const onChoose = () => {};

// type Props = {};

const SelectForm: FC = () => {
  return (
    <div className={styles.form}>
      <DropDown options={SELECT_OPTIONS} onChoose={onChoose} />
      <DropDown options={SELECT_OPTIONS} onChoose={onChoose} />
      <DropDown options={SELECT_OPTIONS} onChoose={onChoose} />
    </div>
  );
};

export default SelectForm;
