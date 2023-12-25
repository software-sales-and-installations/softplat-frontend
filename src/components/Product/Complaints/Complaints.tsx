import { useState } from 'react';

import ComplaintOneCard from '../ComplaintOneCard/ComplaintOneCard.tsx';
import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { useComplaintProductQuery } from '../../../utils/api/complaintApi.tsx';
import Preloader from '../../Preloader/Preloader.tsx';

import styles from './Complaints.module.scss';

interface IReviewProps {
  id: string | undefined;
  name: string | undefined;
}

  const Complaints = ({id}:IReviewProps) => {
  const [count, setCount] = useState(2)
  const {data: complaints , isLoading, error} = useComplaintProductQuery({productId: id, minId: '0', pageSize: count.toString()});


  const handleMoreClick = () => {
    setCount( count + (complaints?.totalComplaints || 0))
  }

  return (
    <>
      <section className={styles.complaints}>
      <div>
        <div className={styles.complaints__headerContainer}>
          <p className={styles.complaints__header}>Жалобы</p>
        </div>
      </div>
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p>Произошла ошибка</p>
      ) : (
        complaints?.complaints?.map((complaint: { id: string; buyer: { name: string; }; reason: string; }) => (
          <ComplaintOneCard key={'complaint' + complaint.id} id={Number(complaint.id)} author={complaint.buyer.name} text={complaint.reason}/>
        ))
      )}
      { complaints?.complaints.length! > 2 && count <= complaints?.totalComplaints! && <Button onClick={handleMoreClick} buttonType='link' extClassName={styles.reviews__more}>Все отзывы</Button>}
    </section>
</>
);
};

export default Complaints;
