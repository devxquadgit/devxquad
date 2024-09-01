import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import WTypo from '@/theme/WTypo';

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
  margin-bottom: 1.5rem;
`;

const index = () => {
  return (
    <StyledCardMain>
      <StyledAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 75, height: 75 }}/>
      </StyledAvatar>
      <WTypo
        label="he do this that"
        type="sub-md"
        color="#64748b"
        style={{ marginBottom: '.2rem', lineHeight: '1.5' }}
      />
      <WTypo
        label="he do this that"
        type="sub-sm"
        color="#64748b"
        // style={{ maxWidth: '30rem', lineHeight: '1.5' }}
      />
    </StyledCardMain>
  )
}

export default index;