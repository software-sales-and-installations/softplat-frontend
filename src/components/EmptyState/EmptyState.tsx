import React from 'react';
import styles from './EmptyState.module.scss';
import { Button } from '../../UIStorybook/Button/Button';
import { useNavigate } from 'react-router-dom';
import { EmptyStateProps } from './EmptyStateTypes';

const EmptyState: React.FC<EmptyStateProps> = ({
  children,
  navigateTo,
  buttonText,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.button}>
        <Button
          buttonType="primary"
          actionType="button"
          width="290px"
          height="55px"
          onClick={() => navigate(navigateTo)}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default EmptyState;
