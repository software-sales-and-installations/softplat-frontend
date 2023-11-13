import styles from './Crumb.module.scss';
import {FC} from 'react';
import { useLocation, useNavigate, useResolvedPath } from 'react-router-dom';
import { ICrumbs } from './CrumbsType';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { TITLE_FOR_BREADCRUMBS } from '../../../../utils/constants';


export const Crumb: FC<ICrumbs> = ({classname, path, url, title, state}) =>{
    const navigate = useNavigate();

    
    return(
        <>{
            state.lastIndexOf(url)===(state.length-1) ?
            (<>rrr</>):
            (<span>
                <Link to={`/${url}`}>kjhgfd</Link>
                {'>'}
            </span>)
        }
        
            
        </>
    )
}

