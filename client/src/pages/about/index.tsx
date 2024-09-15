import React from 'react';
import Styled from '@emotion/styled';
import Feature from '@/layouts/Feature'
import Info from '@/layouts/Info'
import Newsletter from '@/layouts/Newsletter';
import Team from '@/layouts/Team'

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

      {/* <ContainerDiv>
        <Feature />
      </ContainerDiv> */}
      <ContainerDiv>
        <MarginDiv margin='7rem'>
          <Info render='About' />
        </MarginDiv>
      </ContainerDiv>
      <ContainerDiv>
        <Feature render='About' />
      </ContainerDiv>
      <ContainerDiv>
        <Team render='About'/>
      </ContainerDiv>
      <ContainerDiv>
        <Newsletter />
      </ContainerDiv>

    </div>
  );
}

export default index;