import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import Card from '@/components/Card';
import featureData from './featureData';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  padding-bottom: 40px;
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
`;

const StyledFeatureMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledFeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    margin: 0 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    margin: 0 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Index = () => {
  return (
    <StyledDiv>
      <StyledFeatureMain>
        <StyledHeading>
          <WTypo
            label="FEATURES"
            type="sub-sm"
            color="rgba(184, 11, 10, 1)"
          />
          <WTypo
            label="Features to make you stand out"
            type="main-md"
            color="#1e293b"
          />
          <WTypo
            label="Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when."
            type="sub-lg"
            color="#64748b"
            style={{ textAlign: 'center' }}
          />
        </StyledHeading>
        <StyledFeatureCards>
          {featureData.map(({ SVG, Heading, Desc }) => {
            return (
              <Card
                Component="Feature"
                key={Heading}
                SVG={SVG}
                Heading={Heading}
                Desc={Desc}
                style={{
                  padding: '0 24px'
                }}
              />
            )
          })}
        </StyledFeatureCards>
      </StyledFeatureMain>
    </StyledDiv>
  );
};

export default Index;
