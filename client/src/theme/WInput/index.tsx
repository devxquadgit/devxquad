import React from 'react';
import styles from './WInput.module.scss';

import { IWInputProps } from '@/contracts/IWInputProps';

const InputField: React.FC<IWInputProps> = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default InputField;
