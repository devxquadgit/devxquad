import React from 'react';
import styled from '@emotion/styled';
import WTypo from '@/theme/WTypo';
import Adbhut from '@/assets/adbhut.jpeg';
import Image from 'next/image';
import { ICard2Props } from '@/contracts/ICard2Props';

const StyledCardMain = styled.div`
  margin: 2.5rem 0;
  padding: 0 24px;
`;

const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: .75rem;
  padding: 32px 0;
  max-width: 14rem;
  width: 14rem;
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

const index: React.FC<ICard2Props> = ({ Img, Name, Desc, style }) => {
  return (
    <StyledCardMain>
      <StyledCard>
        <StyledAvatar>
          <Image alt="Sample1" src={Adbhut} width={80}/>
        </StyledAvatar>
        <WTypo
          label={Name}
          type="sub-md"
          color="#64748b"
          style={{ marginBottom: '.2rem', lineHeight: '1.5' }}
        />
        <WTypo
          label={Desc}
          type="sub-sm"
          color="#64748b"
        />
      </StyledCard>
    </StyledCardMain>
  )
}

export default index;