import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePublicProductQuery } from '../../utils/api/publicProductApi.tsx';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo.tsx';
import ProductButtons from '../../components/Product/ProductButtons/ProductButtons.tsx';
import Reviews from '../../components/Product/Reviews/Reviews.tsx';
import Similar from '../../components/Product/Similar/Similar.tsx';
// import { Tooltip } from '../../components/Tooltip/Tooltip';

import styles from './ProductPage.module.scss';


export const ProductPage: FC = () => {
  const { id } = useParams();
  const role = localStorage.getItem('role')
  // const [tooltipText, setTooltipText] = useState('');

  const { data: product, isError: productError} = usePublicProductQuery(id);

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs product={product} />
      </div>
      <ProductInfo product={product} id={product?.image?.id.toString()}>
        {product && (role==='ADMIN'|| role==='SELLER'? null :<ProductButtons card={product} error={productError} id={product?.id.toString()} instPrice={product?.installationPrice}/>)}
      </ProductInfo>
      {product?.id && <Reviews id={product?.id.toString()} name={product?.name}/>}
      {product?.id && <Similar id={product?.id.toString()}/>}
      {/*      <div*/}
      {/*        className={style.product__question}*/}
      {/*        onMouseEnter={() =>*/}
      {/*          setTooltipText(*/}
      {/*            'Наш специалист установит ПО на ваше устройство в удобное время',*/}
      {/*          )*/}
      {/*        }*/}
      {/*        onMouseLeave={() => setTooltipText('')}*/}
      {/*      >*/}
      {/*        ?*/}
      {/*      </div>*/}
      {/*      {tooltipText && <Tooltip text={tooltipText} />}*/}
    </div>
  );
};
