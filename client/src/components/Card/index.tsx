import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import WTag from "@/theme/WTag";
import { ICardProps } from "@/contracts/ICardProps"; 

const StyledTagDiv = styled.div<{ component?: string }>`
  margin: 2.5rem 0;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
  	margin: ${(props) => props.component === "Feature" ? "1.2rem 0" : "2.5rem 0"};
  }
`;

const StyledTag = styled.div<{ component?: string }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
  	align-items: ${(props) => props.component === "Feature" ? "center" : "flex-start"};
  	text-align: ${(props) => props.component === "Feature" ? "center" : "left"};
  }
`;

const index: React.FC<ICardProps> = ({ Component, SVG, Heading, Desc, style }) => {
	return (
    <StyledTagDiv style={style} component={Component}>
      <StyledTag component={Component}>
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
