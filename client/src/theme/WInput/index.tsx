import React from 'react';
import { IWInputProps } from '@/contracts/IWInputProps';
import styled from "@emotion/styled";

const StyledInput = styled.input<{ type?:string }>`
  border-radius: 50px;
  outline: none;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  width: ${(props) => props.width || 'auto'};
`;

const index: React.FC<IWInputProps> = ({ type, value, onChange, placeholder, style }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default index;
