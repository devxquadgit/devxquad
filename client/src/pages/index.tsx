import React from 'react';
import Styled from '@emotion/styled';

import Hero from '@/layouts/Hero'
import Feature from '@/layouts/Feature'
import Info from '@/layouts/Info'
import Newsletter from '@/layouts/Newsletter'
import Footer from '@/components/Footer'
import Faq from '@/layouts/Faq';

import WButton from '../theme/WButton';
import WTypo from '../theme/WTypo';
import WTag from '@/theme/WTag';
import TwitterIcon from '../assets/twitter.svg';


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
  
  @media (max-width: 767px) {
    max-width: 540px;
  }
`;

const MarginDiv = Styled.div<{ margin?: string }>`
  margin-top: ${({ margin }) => (margin ? margin : "1rem")};
`;

function index() {
  return (
    <div>
      <ContainerDiv>
        <MarginDiv margin='7rem'>
          <Hero />
        </MarginDiv> 
      </ContainerDiv>
      <ContainerDiv>
        <Feature render="Landing"/>
      </ContainerDiv>
      <ContainerDiv>
        <Info render="Landing"/>
      </ContainerDiv>
      
      {/* Testing */}
      <ContainerDiv>
        <Faq />
      </ContainerDiv>
      {/* Testing */}
      
      <ContainerDiv>
        <Newsletter />
      </ContainerDiv>

      {/* For Temporary Time */}
      {/* <ContainerDiv>
        <Footer />
      </ContainerDiv> */}
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