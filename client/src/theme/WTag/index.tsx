import React from 'react';
import styles from './WTag.module.scss';

import { IWTagProps } from '@/contracts/IWTagProps';

const Tag: React.FC<IWTagProps> = ({ label, variant = 'default', className }) => {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${className}`}>
      {label}
    </span>
  );
};

export default Tag;
