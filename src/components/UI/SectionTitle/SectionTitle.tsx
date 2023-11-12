import { FC } from 'react';

import styles from './SectionTitle.module.scss';

interface ISectionTitle {
	title: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
	return <h2 className={styles.title}>{title}</h2>;
};

export default SectionTitle;
