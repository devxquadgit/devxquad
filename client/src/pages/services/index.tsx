import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import { IFeatureLayoutProps } from "@/contracts/IFeatureLayoutProps";

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
  margin-bottom: 80px;
  max-width: calc(100% - 30rem);

  @media (max-width: 1024px) {
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
      </StyledFeatureMain>
    </StyledDiv>
  );
};

export default index;
