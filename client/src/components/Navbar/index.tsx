import React from 'react';
import styled from '@emotion/styled';
import Logo from '@/assets/logo/logo.svg';
import WTypo from '@/theme/WTypo';
import WButton from '@/theme/WButton';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 60px;
  width: 100%;
  border-bottom: 1px solid #f1f5f9;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(2, 6, 23, 0.075);
`;

const StyledNavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const LogoWrapper = styled(Logo)`
  width: 80px;
  height: 48px;
`;

const navLinks = [
  { label: 'Projects', url: 'https://www.google.com' },
  { label: 'Services', url: 'https://www.google.com' },
  { label: 'About Us', url: 'https://www.google.com' },
  { label: 'Our Team', url: 'https://www.google.com' },
];

const Index: React.FC = () => {
  return (
    <StyledNav>
      <LogoWrapper />
      <StyledNavLinks>
        {navLinks.map(({ label, url }) => (
          <WTypo key={label} label={label} type="link" url={url} color="#64748b" />
        ))}
      </StyledNavLinks>
      <WButton
        label="Contact us"
        bgcolor="#b80b0a"
        textColor="white"
        width="115px"
        rounded
        onClick={() => console.log('Button clicked!')}
      />
    </StyledNav>
  );
};

export default Index;