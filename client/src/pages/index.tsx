import React from 'react';
import WButton from '../theme/WButton';
import WTypo from '../theme/WTypo';
import WTag from '@/theme/WTag';
import TwitterIcon from '../assets/twitter.svg';

import Navbar from '@/components/Navbar'
import Hero from '@/layouts/Hero'
import Feature from '@/layouts/Feature'
import Styled from '@emotion/styled';

const ContainerDiv = Styled.div`
  --bs-gutter-x: 2.5rem;
  --bs-gutter-y: 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--bs-gutter-x)* .5);
  padding-right: calc(var(--bs-gutter-x)* .5);
  width: 100%;
  
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const MarginDiv = Styled.div`
  padding: 1rem;
`;

function index() {
  return (
    <div>
      <Navbar />
      <ContainerDiv>
        <Hero />
      </ContainerDiv>
      <MarginDiv />
      <ContainerDiv>
        <Feature />
      </ContainerDiv>
      {/* <WButton
        label="Contact us"
        bgcolor="#b80b0a"
        textColor="white"
        width="115px"
        rounded
        onClick={() => console.log('Button clicked!')}
      /> */}
      {/* <WTypo label="link" type="arrow-link" url='https://www.google.com' color="red" /> */}
      {/* <div>
        <WTag
          icon={<TwitterIcon width={22} height={22}/>}
          href="https://twitter.com/example" 
          type="circle-md"
          bordered
          clickable
        />
        <WTag
          icon={<TwitterIcon width={22} height={22}/>}
          label="Twitter"
          href="https://twitter.com/example"
          type="pill"
          bordered
        />
      </div> */}
    </div>
  );
}

export default index;