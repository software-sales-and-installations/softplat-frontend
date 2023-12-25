import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePublicProductQuery } from '../../utils/api/publicProductApi.tsx';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo.tsx';
import AdminComplaintsForm from '../../components/Product/AdminComplaintsForm/AdminComplaintsForm.tsx';
import Complaints from '../../components/Product/Complaints/Complaints.tsx';

import styles from './AdminComplaintsPage.module.scss';


export const AdminComplaintsPage: FC = () => {
  const { id } = useParams();

  const { data: product} = usePublicProductQuery(id);

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs pageName='Карточка' />
      </div>
      <ProductInfo product={product} id={product?.image?.id.toString()} />
      {product?.id && <Complaints id={product?.id.toString()} name={product?.name}/>}
      <AdminComplaintsForm />
    </div>
  );
};
