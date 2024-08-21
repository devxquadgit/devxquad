import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import infoData from "./infoData";
import WTag from "@/theme/WTag";
import TickIcon from '@/assets/icons/tick.svg';
import { IInfoLayoutProps } from "@/contracts/IInfoLayoutProps";

const StyledDiv = styled.div`
  --bs-gutter-x: 2rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  margin-bottom: 80px;
  width: 40.5%;
`;

const StyledImageMain = styled.div`
  width: 57%;
  padding-left: 8.3%;
  margin: 0 1rem;
`;

const StyledPoints = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;
`;


const index: React.FC<IInfoLayoutProps> = ({ index }) => {
  const data = infoData[index];

  return (
    <StyledDiv>
      <StyledHeading>
        <WTypo
          label={data.Topic}
          type="sub-sm"
          color="rgba(184, 11, 10, 1)"
        />
        <WTypo
          label={data.Heading}
          type="main-md"
          color="#1e293b"
        />
        <WTypo
          label={data.Desc}
          type="sub-lg"
          color="#64748b"
        />
				{data.Points && (
					data.Points.map((point:string) => (
						<StyledPoints>
							<WTag
								icon={<TickIcon/>}
								type="circle-sm"
								style={{
									color: 'green',
									width: '20px',
									height: '20px',
								}}
							/>
							<WTypo
								label={point}
								type="sub-md"
								color="#64748b"
							/>
						</StyledPoints>
					))
				)}
        {data.Url && (
          <WTypo
            label="Learn More"
            type="arrow-link"
            color="#b80b0a"
            // onClick={() => window.location.href = data.Url}
          />
        )}
      </StyledHeading>
      <StyledImageMain>
        <img src={data.Image} width="100%" alt="Landing Image" />
      </StyledImageMain>
    </StyledDiv>
  );
};

export default index;
