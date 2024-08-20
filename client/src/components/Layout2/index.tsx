import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import Card from '@/components/Card';
import featuresData from './featuresData';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin: 3rem 0;
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: calc(100% - 30rem);
`;

const StyledHeadingMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Index = () => {
  return (
    <StyledDiv>
      <StyledHeadingMain>
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
        {featuresData.map(({ SVG, Heading, Desc }) => {
					return (
						<Card
							key={Heading}
							SVG={SVG}
							Heading={Heading}
							Desc={Desc}
						/>
					)
				})}
      </StyledHeadingMain>
    </StyledDiv>
  );
};

export default Index;
