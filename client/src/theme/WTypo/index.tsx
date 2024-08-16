import React from "react";
import styled from "@emotion/styled";
import { IWTypoProps } from "@/contracts/IWTypoProps";
import { Typography } from "@mui/material";

const StyledTypo = styled(Typography)<{ type?: string }>`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	font-size: ${(props) => getFontStyles(props.type).fontSize};
	font-family: ${(props) => getFontStyles(props.type).fontFamily};
`;

const getFontStyles = (
	type?: string
): { fontSize: string; fontFamily?: string } => {
	switch (type) {
		case "main-lg":
			return { fontSize: "50px", fontFamily: "'Caveat', cursive" };
		case "main-md":
			return { fontSize: "32px", fontFamily: "'Caveat', cursive" };
		case "sub-lg":
			return { fontSize: "20px" };
		case "sub-md":
			return { fontSize: "16px" };
		case "sub-sm":
			return { fontSize: "14px" };
		default:
			return { fontSize: "16px" };
	}
};

const index: React.FC<IWTypoProps> = ({ label, type, color }) => {
	return (
		<div>
			<StyledTypo variant="body1" type={type} color={color}>
				{label}
			</StyledTypo>
		</div>
	);
};

export default index;
