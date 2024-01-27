import { useState } from 'react';

import ComplaintOneCard from '../ComplaintOneCard/ComplaintOneCard.tsx';
import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { useComplaintProductAdminQuery, useComplaintProductSellerQuery } from '../../../utils/api/complaintApi.tsx';
import Preloader from '../../Preloader/Preloader.tsx';

import styles from './Complaints.module.scss';

interface IReviewProps {
  id: string | undefined;
  isAdmin: boolean;
}

  const Complaints = ({id, isAdmin}:IReviewProps) => {
  const [count, setCount] = useState(3)

  const {data: complaintsAdmin , isLoading: isLoadingAdmin, error: errorAdmin} = useComplaintProductAdminQuery({productId: id, minId: '0', pageSize: count.toString()}, {skip: !isAdmin});
  const {data: complaintsSeller , isLoading: isLoadingSeller, error: errorSeller} = useComplaintProductSellerQuery({productId: id, minId: '0', pageSize: count.toString()}, {skip: isAdmin});

  const complaints = complaintsAdmin || complaintsSeller
  const isLoading = isLoadingAdmin || isLoadingSeller
  const error = errorAdmin || errorSeller
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
          <ComplaintOneCard key={'complaint' + complaint.id} id={Number(complaint.id)} author={complaint.buyer.name} text={complaint.reason} isAdmin={isAdmin}/>
        ))
      )}
      { complaints?.complaints.length! > 3 && count <= complaints?.totalComplaints! && <Button onClick={handleMoreClick} buttonType='link' extClassName={styles.reviews__more}>Все жалобы</Button>}
    </section>
</>
);
};

export default Complaints;
