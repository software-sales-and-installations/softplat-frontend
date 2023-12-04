import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Breadcrumbs.module.scss';
import { CATALOGUE_NAMES, TITLES_FOR_BREADCRUMBS } from '../../utils/constants';
import { IBreadcrumbsProps } from './BreadcrumbsTypes';
const Breadcrumbs: FC<IBreadcrumbsProps> = ({ pageName, vendor }) => {
  const location = useLocation();
  const isPageCart = location.pathname === '/cart';
  const isPageProduct = location.pathname.includes('/product/');

  if (!isPageCart) {
    if (pageName) {
      localStorage.setItem('pageName', pageName);
    } else {
      localStorage.removeItem('pageName');
    }

    if (vendor) {
      localStorage.setItem('productVendor', JSON.stringify(vendor));
    } else {
      localStorage.removeItem('productVendor');
    }
  }

  let currentLink = '';

  console.log(localStorage.getItem('pageName'));

  const crumbs =
    localStorage.getItem('urlPath') &&
    (isPageCart || isPageProduct
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

        if (CATALOGUE_NAMES.find(item => item.pathName === crumb)) {
          return (
            <div className={style.breadcrumbs__crumb} key={crumb}>
              <Link to={currentLink}>
                {CATALOGUE_NAMES.find(item => item.pathName === crumb)?.name}
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
      {isPageCart && (
        <>
          {localStorage.getItem('pageName') && (
            <div className={style.breadcrumbs__crumb}>
              <Link to={currentLink}>{localStorage.getItem('pageName')}</Link>
            </div>
          )}
          {localStorage.getItem('productVendor') && (
            <div className={style.breadcrumbs__crumb}>
              <Link
                to={`/producers/${
                  JSON.parse(localStorage.getItem('productVendor')!).id
                }`}
              >
                {JSON.parse(localStorage.getItem('productVendor')!).name}
              </Link>
            </div>
          )}
          <div className={style.breadcrumbs__crumb}>
            <p>Корзина</p>
          </div>
        </>
      )}
      {isPageProduct && vendor && (
        <div className={style.breadcrumbs__crumb}>
          <p>{vendor.name}</p>
        </div>
      )}
    </div>
  );
};
export default Breadcrumbs;
