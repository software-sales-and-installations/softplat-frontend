import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePublicProductQuery } from '../../utils/api/publicProductApi.tsx';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo.tsx';
import Complaints from '../../components/Product/Complaints/Complaints.tsx';
import SellerComplaintsForm from '../../components/Product/SellerComplaintsForm/SellerComplaintsForm.tsx';

import styles from './SellerComplaintsPage.module.scss';


export const SellerComplaintsPage: FC = () => {
  const { id } = useParams();

  const { data: product} = usePublicProductQuery(id, {skip: id === undefined});

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs pageName='Карточка' />
      </div>
      <ProductInfo product={product} id={product?.image?.id.toString()} />
      {product?.id && <Complaints id={product?.id.toString()} isAdmin={false}/>}
      <SellerComplaintsForm />
    </div>
  );
};
