import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import Card2 from '@/components/Card2';
import teamData from './teamData';
import { ITeamLayoutProps } from "@/contracts/ITeamLayoutProps";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;

  @media (max-width: 425px) {
    margin-top: 80px;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 60px;
  max-width: calc(100% - 30rem);
  text-align: center;

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

const StyledFeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1180px) {
    margin: 0 2rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 570px) {
    margin: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const index: React.FC<ITeamLayoutProps> = ({render}) => {

  const section = teamData.find((section) => section.render === render);

	if (!section) {
		return null;
	}

  return (
    <StyledDiv>
      <StyledFeatureMain>
        <StyledHeading>
          <WTypo
            label={section.topic}
            type="sub-sm"
            color="rgba(184, 11, 10, 1)"
          />
          <WTypo
            label={section.heading}
            type="main-md"
            color="#1e293b"
          />
          {/* <WTypo
            label={section.subheading}
            type="sub-lg"
            color="#64748b"
            style={{ textAlign: 'center' }}
          /> */}
        </StyledHeading>
        <StyledFeatureCards>
          {section.data.map(({ Img, Name, Desc }) => {
            return (
              <Card2
                key={Name}
                Img={Img}
                Name={Name}
                Desc={Desc}
              />
            )
          })}
        </StyledFeatureCards>
      </StyledFeatureMain>
    </StyledDiv>
  );
};

export default index;
