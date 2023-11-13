import styles from './Breadcrumbs.module.scss';
import {FC, useEffect} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';


import { Crumb } from './Crumb/Crumb';
// const isContainRoute = (state: any, route:string) => state.some(({ url }:any) => url === route);

const Breadcrumbs: FC = () => {
    const {pathname} = useLocation();
    const state = pathname.split('/')
    console.log(state)
    if (pathname){
    return (
        <nav className={styles.breadcrumbs}>
            {state.map((crumb:any) =>{
             return (
                <Crumb {...crumb} key={crumb.url} url={crumb} state={state}/>
             )
            })}
        </nav>
    )}
    return null
}

// const pushState = (title:string) => { 
//     const { state, pathname } = useLocation();
//     const navigate = useNavigate();
//     const url = window.location.href;
//     useEffect(() => {
//         if (state && !isContainRoute(state, url)) {
//           navigate(pathname, { state: [...state, { path: pathname, url, title:title }], replace: true });
//         }
//       },
//       [pathname, state, url, title]
//     );
//   }

export { Breadcrumbs};


