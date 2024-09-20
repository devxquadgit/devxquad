import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import { IFeatureLayoutProps } from "@/contracts/IFeatureLayoutProps";
import Info from '@/layouts/Info';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  padding-bottom: 40px;

  @media (max-width: 425px) {
    margin-top: 80px;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top:7rem;
  max-width: calc(100% - 30rem);

  @media (max-width: 1024px) {
    max-width: calc(100% - 19rem);
  }

  @media (max-width: 900px) {
    margin-top: 0;
    max-width: calc(100% - 19rem);
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 6rem);
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const StyledFeatureMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


const ContainerDiv = styled.div`
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

const index: React.FC<IFeatureLayoutProps> = () => {

  return (
    <StyledDiv>
      <StyledFeatureMain>
        <StyledHeading>
          <WTypo
            label="SERVICES"
            type="sub-sm"
            color="rgba(184, 11, 10, 1)"
          />
          <WTypo
            label="We provide client-centric services"
            type="main-md"
            color="#1e293b"
          />
          <WTypo
            label="Maximize your website's capabilities and reach its full potential with our services."
            type="sub-lg"
            color="#64748b"
            style={{ textAlign: 'center' }}
          />
        </StyledHeading>
        <ContainerDiv>
          <Info render="Service"/>
        </ContainerDiv> 
      </StyledFeatureMain>
    </StyledDiv>
  );
};

export default index;
