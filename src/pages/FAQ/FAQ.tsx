import { FC } from 'react';
import { FAQ_INFO } from '../../utils/constants';
import styles from './FAQ.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

export const FAQ: FC = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <h1 className={styles.faq__title}>FAQ</h1>
      <ul className={styles.faq__list}>
        {FAQ_INFO.map(i => {
          return (
            <li key={i.id} className={styles.faq__listItem}>
              <h2 className={styles.faq__subtitle}>{i.question}</h2>
              {i.answer.map((item)=>{
                return(
                  <div key={item.id} className={styles.faq__containerForAnswer}>
                    <p className={styles.faq__answer}>{item.text}</p>
                    {i.link? <Link to ={i.link} className={styles.faq__link}>{i.textlink}</Link> : null}
                  </div>
                )
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
