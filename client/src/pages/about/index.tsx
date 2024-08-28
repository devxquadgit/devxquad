import React from 'react';
import Styled from '@emotion/styled';
import Feature from '@/layouts/Feature'
import Info from '@/layouts/Info'
import Newsletter from '@/layouts/Newsletter';


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


function index() {
  return (
    <div>

      {/* <ContainerDiv>
        <Feature />
      </ContainerDiv> */}
      <ContainerDiv>
        <Info />
      </ContainerDiv>
      <ContainerDiv>
        <Newsletter />
      </ContainerDiv>

    </div>
  );
}

export default index;