import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import WTag from "@/theme/WTag";
import { ICardProps } from "@/contracts/ICardProps"; 

const StyledTagDiv = styled.div`
  margin: 2.5rem 0;
  display: flex;
  gap: 24px;
`;

const StyledTag = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

const index: React.FC<ICardProps> = ({ SVG, Heading, Desc }) => {
	return (
    <StyledTagDiv>
      <StyledTag>
        <WTag
          icon={SVG}
          type="circle-md"
          bordered
        />
        <div>
          <WTypo
            label={Heading}
            type="sub-lg"
            color="#1e293b"
          />
          <WTypo
            label={Desc}
            type="sub-md"
            color="#64748b"
          />
        </div>
      </StyledTag>
    </StyledTagDiv>
	);
};

export default index;
