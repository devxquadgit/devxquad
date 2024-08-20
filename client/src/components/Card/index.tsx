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
`;

const index: React.FC<ICardProps> = ({ SVG, Heading, Desc }) => {
	return (
    <StyledTagDiv>
      <StyledTag>
        <WTag
          icon={<SVG />}
          type="circle-lg"
          bordered
          style={{marginBottom: '32px', color: '#B80B0A', backgroundColor: 'rgba(184, 11, 10, 0.1)', borderColor: '#e4a1a1'}}
        />
        <div>
          <WTypo
            label={Heading}
            type="sub-lg"
            color="#1e293b"
            style={{marginBottom: "8px"}}
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
