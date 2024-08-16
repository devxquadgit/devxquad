import React from "react";
import styled from "@emotion/styled";
import { IWTypoProps } from "@/contracts/IWTypoProps";
import { Typography } from "@mui/material";
import Link from "next/link";

const StyledTypo = styled(Typography)<{ type?: string; color?: string }>`
	@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	font-size: ${(props) => getFontStyles(props.type).fontSize};
	font-family: ${(props) => getFontStyles(props.type).fontFamily};
	color: ${(props) => props.color || "black"};
`;

const StyledLink = styled(Link)<{ color?: string, type?: string }>`
	color: ${(props) => props.color || "black"};
	text-decoration: none;
	position: relative;

  ${(props) =>
    props.type === "arrow-link" &&
    `
    &:after {
      content: '→';
      position: absolute;
      right: -20px;
      transition: right 0.3s ease, opacity 0.3s ease;
    }
    
    &:hover:after {
      right: -25px;
    }
  `}
`;

const getFontStyles = (
	type?: string
): { fontSize?: string; fontFamily?: string } => {
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
		case "link":
			return { fontSize: "16px" };
		case "arrow-link":
			return { fontSize: "16px" };
		default:
			return { fontSize: "16px" };
	}
};

const index: React.FC<IWTypoProps> = ({ label, type, color, url }) => {
	return (
		<div>
			{type === "link" && url ? (
				<StyledTypo variant="body1" type={type} color={color}>
					<StyledLink href={url} type={type} color={color} target="_blank">
						{label}
					</StyledLink>
				</StyledTypo>
			) : type === "arrow-link" && url ? (
				<StyledTypo variant="body1" type={type} color={color}>
					<StyledLink href={url} type={type} color={color} target="_blank">
						{label}
					</StyledLink>
				</StyledTypo>
			) : (
				<StyledTypo variant="body1" type={type} color={color}>
					{label}
				</StyledTypo>
			)}
		</div>
	);
};

export default index;
