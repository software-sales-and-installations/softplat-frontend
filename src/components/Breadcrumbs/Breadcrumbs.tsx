import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Breadcrumbs.module.scss';
import {
  CATALOGUE_NAMES,
  TITLES_FOR_BREADCRUMBS,
  adminMenuItems,
  personalMenuItems,
  sellerMenuItems,
} from '../../utils/constants';
import { IBreadcrumbsProps } from './BreadcrumbsTypes';

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ pageName, product }) => {
  const location = useLocation();
  const isPageCart = location.pathname === '/cart';
  const isPageProduct = location.pathname.includes('/product/');
  const isPageSeller = location.pathname.includes('/seller-page');

  if (!isPageCart && !isPageSeller) {
    if (pageName) {
      localStorage.setItem('pageName', pageName);
    } else {
      localStorage.removeItem('pageName');
    }

    if (product) {
      localStorage.setItem('product', JSON.stringify(product));
    } else {
      localStorage.removeItem('product');
    }
  }

  let currentLink = '';

  const crumbs =
    localStorage.getItem('urlPath') &&
    (isPageCart || isPageProduct || isPageSeller
      ? localStorage.getItem('urlPath')!
      : location.pathname
    )
      .split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        currentLink += `/${crumb}`;

        if (TITLES_FOR_BREADCRUMBS[crumb]) {
          return (
            <div className={style.breadcrumbs__crumb} key={crumb}>
              <Link to={currentLink}>{TITLES_FOR_BREADCRUMBS[crumb]}</Link>
            </div>
          );
        }

        if (
          !isPageProduct &&
          !isPageSeller &&
          CATALOGUE_NAMES.find(item => item.pathName === crumb)
        ) {
          return (
            <div className={style.breadcrumbs__crumb} key={crumb}>
              <Link to={currentLink}>
                {CATALOGUE_NAMES.find(item => item.pathName === crumb)?.name}
              </Link>
            </div>
          );
        }

        if (
          isPageProduct &&
          localStorage.getItem('urlPath')!.includes('producers/') &&
          localStorage.getItem('product')
        ) {
          return (
            <div className={style.breadcrumbs__crumb} key={crumb}>
              <Link
                to={`/producers/${
                  JSON.parse(localStorage.getItem('product')!).vendor.id
                }`}
              >
                {JSON.parse(localStorage.getItem('product')!).vendor.name}
              </Link>
            </div>
          );
        }

        if (
          (isPageProduct || isPageSeller) &&
          localStorage
            .getItem('urlPath')!
            .includes(
              `catalog/${
                CATALOGUE_NAMES.find(item => item.pathName === crumb)?.pathName
              }`,
            ) &&
          localStorage.getItem('product')
        ) {
          return (
            <div className={style.breadcrumbs__crumb} key={crumb}>
              <Link
                to={`/catalog/${
                  CATALOGUE_NAMES.find(
                    name =>
                      name.id ===
                      JSON.parse(localStorage.getItem('product')!).category.id,
                  )?.pathName
                }`}
              >
                {
                  CATALOGUE_NAMES.find(
                    name =>
                      name.id ===
                      JSON.parse(localStorage.getItem('product')!).category.id,
                  )?.name
                }
              </Link>
            </div>
          );
        }

        if (
          personalMenuItems.find(item => item.link === crumb) ||
          sellerMenuItems.find(item => item.link === crumb) ||
          adminMenuItems.find(item => item.link === crumb)
        ) {
          return (
            <div className={style.breadcrumbs__crumb} key={crumb}>
              <Link to={currentLink}>
                {
                  (
                    personalMenuItems.find(item => item.link === crumb) ||
                    sellerMenuItems.find(item => item.link === crumb) ||
                    adminMenuItems.find(item => item.link === crumb)
                  )?.name
                }
              </Link>
            </div>
          );
        }

        return;
      });

  return (
    <div className={style.breadcrumbs}>
      <div className={style.breadcrumbs__crumb}>
        <Link to="/">Главная</Link>
      </div>
      {crumbs}
      {pageName && (
        <div className={style.breadcrumbs__crumb}>
          <p>{pageName}</p>
        </div>
      )}
      {(isPageCart || isPageSeller) && (
        <>
          {localStorage.getItem('pageName') && (
            <div className={style.breadcrumbs__crumb}>
              <Link to={currentLink}>{localStorage.getItem('pageName')}</Link>
            </div>
          )}
          {localStorage.getItem('urlPath')!.includes('producers/') &&
            localStorage.getItem('product') && (
              <div className={style.breadcrumbs__crumb}>
                <Link
                  to={`/producers/${
                    JSON.parse(localStorage.getItem('product')!).vendor.id
                  }`}
                >
                  {JSON.parse(localStorage.getItem('product')!).vendor.name}
                </Link>
              </div>
            )}
          {localStorage.getItem('product') && (
            <div className={style.breadcrumbs__crumb}>
              <Link
                to={`/product/${
                  JSON.parse(localStorage.getItem('product')!).id
                }`}
              >
                {JSON.parse(localStorage.getItem('product')!).name}
              </Link>
            </div>
          )}
          {isPageSeller ? (
            <div className={style.breadcrumbs__crumb}>
              <p>{JSON.parse(localStorage.getItem('product')!).seller.name}</p>
            </div>
          ) : (
            <>
              {localStorage.getItem('isSellerVisited')! && (
                <div className={style.breadcrumbs__crumb}>
                  <Link
                    to={`/seller-page/${
                      JSON.parse(localStorage.getItem('product')!).seller.id
                    }`}
                  >
                    {JSON.parse(localStorage.getItem('product')!).seller.name}
                  </Link>
                </div>
              )}
              <div className={style.breadcrumbs__crumb}>
                <p>Корзина</p>
              </div>
            </>
          )}
        </>
      )}
      {isPageProduct && product && (
        <div className={style.breadcrumbs__crumb}>
          <p>{product.name}</p>
        </div>
      )}
    </div>
  );
};
export default Breadcrumbs;
