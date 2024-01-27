import { FC, useState } from 'react';
import styles from './VendorInfo.module.scss';
import { VendorInfoProps } from './VendorInfoTypes';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import CONST_IMG from '../../images/underfined-image.jpg';
import { API_BASE_URL } from '../../utils/constants.ts';

const VendorInfo: FC<VendorInfoProps> = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isShortText = description.length < 280 ? true : false;
  const resultText = isExpanded && !isShortText
    ? description?.slice(0, 280).concat('...')
    : description;
  const btnText = isExpanded ? 'показать' : 'скрыть';
  const btnIcon = isExpanded ? <BsChevronDown /> : <BsChevronUp />;
  return (
    <div className={styles.vendorInfo}>
      <img
        className={styles.vendorInfo__img}
        src={image?.id? `${API_BASE_URL}/image/${image?.id}`:CONST_IMG}
        alt="Логотип поставщика"
      />
      <div className={styles.vendorInfo__infoContainer}>
        <h2 className={styles.vendorInfo__title}>{title}</h2>
        <p className={styles.vendorInfo__description}>{resultText}</p>
        <button
          className={styles.vendorInfo__showMoreBtn}
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* {btnText} {btnIcon} */}
          {!isShortText && btnText}
          {!isShortText && btnIcon}
        </button>
      </div>
    </div>
  );
};

export default VendorInfo;
