import React from 'react';
import styled from '@emotion/styled';
import Logo from '@/assets/logo/logo.svg';
import Menu from '@/assets/icons/menu.svg';
import WTypo from '@/theme/WTypo';
import WButton from '@/theme/WButton';
import Eyes from '@/components/Eyes'
import { useGlobalStore } from '@/store';
import { useRouter } from 'next/router';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 60px;
  width: 100%;
  border-bottom: 1px solid #f1f5f9;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(2, 6, 23, 0.075);

  @media (max-width: 900px) {
    display: none;
  }

`;

const StyledNavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const LogoWrapper = styled(Logo)`
  width: 80px;
  height: 48px;
`;

const MenuWrapper = styled(Menu)`
  width: 30px;
  height: 30px;
  color: #1e293b;
`;

const StyledSpan = styled.span`
  cursor: pointer;
`;

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 60px;
    width: 100%;
    border-bottom: 1px solid #f1f5f9;
    background-color: #fff;
    box-shadow: 0 0.125rem 0.25rem rgba(2, 6, 23, 0.075);
  }

  @media (max-width: 475px) {
    padding: 0.5rem 30px;
  }
`;

const navLinks = [
  { label: 'Projects', url: '/projects' },
  { label: 'Services', url: '/services' },
];

const navLinks2 = [
  { label: 'About Us', url: '/about' },
  { label: 'Our Team', url: '/team' },
];

const index = () => {

  const router = useRouter()

  const Update = {
		Global: {
			isSidebarOpen: useGlobalStore((State) => State.setIsSidebarOpen)
		}
	};

  return (
    <>
      <StyledNav>
        <StyledSpan onClick={() => router.push('/')}>
          <LogoWrapper />
        </StyledSpan>
        <StyledNavLinks>
          {navLinks.map(({ label, url }) => (
            <WTypo key={label} label={label} type="link" url={url} color="#64748b" />
          ))}
          <Eyes />
          {navLinks2.map(({ label, url }) => (
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
      <StyledMenu>
        <LogoWrapper />
        <span onClick={() => Update.Global.isSidebarOpen(true)}>
          <MenuWrapper />
        </span>
      </StyledMenu>  
    </>
  );
};

export default index;
