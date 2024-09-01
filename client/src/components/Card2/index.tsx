import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import WTypo from '@/theme/WTypo';
import Adbhut from '@/assets/adbhut.jpeg';
import Image from 'next/image';

const StyledCardMain = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: .75rem;
  padding: 32px 24px;
  max-width: 14rem;
  width: 100%;
`;

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const index = () => {
  return (
    <StyledCardMain>
      <StyledAvatar>
        <Image alt="Remy Sharp" src={Adbhut} width={80}/>
      </StyledAvatar>
      <WTypo
        label="Adbhut"
        type="sub-md"
        color="#64748b"
        style={{ marginBottom: '.2rem', lineHeight: '1.5' }}
      />
      <WTypo
        label="Full Stack Developer"
        type="sub-sm"
        color="#64748b"
        // style={{ maxWidth: '30rem', lineHeight: '1.5' }}
      />
    </StyledCardMain>
  )
}

export default index;