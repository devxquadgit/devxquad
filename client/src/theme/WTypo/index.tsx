import React from 'react';
import styles from './WTypo.module.scss';

import { IWTypoProps } from '@/contracts/IWTypoProps';

const Typography: React.FC<IWTypoProps> = ({ variant, children, className }) => {
  const Tag = variant;

  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
};

export default Typography;
