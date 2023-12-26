import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePublicProductQuery } from '../../utils/api/publicProductApi.tsx';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo.tsx';
import ProductModerationForm from '../../components/Product/ProductModerationForm/ProductModerationForm.tsx';

import styles from './ModerationPage.module.scss';


export const ModerationPage: FC = () => {
  const { id } = useParams();

  const { data: product} = usePublicProductQuery(id);

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs pageName='Карточка' />
      </div>
      <ProductInfo product={product} id={product?.image?.id.toString()}>
        <ProductModerationForm />
      </ProductInfo>
    </div>
  );
};
