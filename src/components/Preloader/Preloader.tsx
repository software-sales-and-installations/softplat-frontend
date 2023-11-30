import {FC} from 'react'
import styles from './Preloader.module.scss'

const Preloader: FC = () => {
  return (
    <p className={styles.preloader}>Идет загрузка...</p>
  )
}

export default Preloader
