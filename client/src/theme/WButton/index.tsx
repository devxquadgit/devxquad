import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { IWButtonProps } from '@/contracts/IWButtonProps';

const StyledButton = styled(Button)<{ width?: string; bgcolor?: string; textColor?: string; rounded?: boolean }>`
  padding: 0.5rem 1rem;
  height: 42px;
  text-transform: none;
  border-radius: ${(props) => (props.rounded ? '50px' : '0.25rem')}; // Apply 50px radius if rounded
  outline: none;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) => props.bgcolor || '#3b82f6'};
  color: ${(props) => props.textColor || 'white'};
  width: ${(props) => props.width || 'auto'};

  &:hover {
    background-color: ${(props) => props.bgcolor || '#2563eb'};
  }
`;

const index: React.FC<IWButtonProps> = ({
  label,
  width,
  bgcolor,
  textColor,
  rounded = false,
  submit = false,
  loading = false,
  onClick,
  style
}) => {
  return (
    <div>
      <StyledButton
        variant="contained"
        width={width}
        bgcolor={bgcolor}
        textColor={textColor}
        rounded={rounded}
        style={style}
        type={submit ? 'submit' : 'button'}
        onClick={!submit ? onClick : undefined}
        disabled={loading}
      >
        {loading ? 'Loading...' : label}
      </StyledButton>
    </div>
  );
};

export default index;
