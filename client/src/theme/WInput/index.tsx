import React from 'react';
import { IWInputProps } from '@/contracts/IWInputProps';
import styled from "@emotion/styled";

const StyledInput = styled.input<{ type?:string, rounded?:boolean }>`
  border-radius: ${(props) => props.rounded ? '50px' : '8px'};
  outline: none;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  width: ${(props) => props.width || 'auto'};
`;

const StyledTextAreaInput = styled.textarea<{ type?:string, rounded?:boolean }>`
  border-radius: ${(props) => props.rounded ? '50px' : '8px'};
  outline: none;
  border: 1px solid #e2e8f0;
  color: #64748b;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  resize: vertical;
  font-family: Arial;
`;

const index: React.FC<IWInputProps> = ({ type, name, value, onChange, rounded, placeholder, style }) => {
  return (
    type !== 'textarea' ? 
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      rounded={rounded}
    /> :
    <StyledTextAreaInput
      type={type}
      name={name}
      value={value}
      rows={4}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      rounded={rounded}
    />
  );
};

export default index;
