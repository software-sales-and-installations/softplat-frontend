import { AccordionButton } from '../../UI/AccordionButton/AccordionButton';
import { FC } from 'react';
import { FAQ_INFO } from '../../utils/constants';
import styles from './FAQ.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export const FAQ: FC = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <h1 className={styles.title}>FAQ</h1>
      <ul className={styles.list}>
        {FAQ_INFO.map(i => {
          return (
            <li key={i.id} className={styles.list__item}>
              <AccordionButton question={i.question} answer={i.answer} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
