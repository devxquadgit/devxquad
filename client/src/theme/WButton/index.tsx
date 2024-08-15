import React from 'react';
import styles from './WButton.module.scss';

import { IWButtonProps } from '@/contracts/IWButtonProps';

const Button: React.FC<IWButtonProps> = ({ children, onClick, type = 'button', variant = 'primary', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
