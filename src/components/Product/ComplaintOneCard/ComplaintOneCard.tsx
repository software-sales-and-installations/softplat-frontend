import styles from './ComplaintOneCard.module.scss'
import {Button} from '../../../UIStorybook/Button/Button.tsx';

interface IReviewOneCardProps {
  author: string;
  text: string;
  id: number;
  isAdmin: boolean;
}

const ComplaintOneCard = ({author, text, id, isAdmin}:IReviewOneCardProps) => {


  const handleDecline = () => {
  console.log('decline')
  }

  return (
    <section className={styles.complaint}>
      <div className={styles.complaint__body}>
        <h2 className={styles.complaint__name}>{author}</h2>
        <p className={styles.complaint__id}>Id {id}</p>
      <p className={styles.complaint__text}>{text}</p>
      </div>
      {isAdmin && <Button
      buttonType='link'
      extClassName={styles.complaint__button}
      onClick={handleDecline}
    >Отклонить</Button>}
    </section>
  );
};

export default ComplaintOneCard;
