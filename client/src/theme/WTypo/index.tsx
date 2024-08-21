import React from "react";
import styled from "@emotion/styled";
import { IWTypoProps } from "@/contracts/IWTypoProps";
import { Typography } from "@mui/material";
import Link from "next/link";

const StyledTypo = styled(Typography)<{ type?: string; color?: string, bold?: string }>`
	font-size: ${(props) => getFontStyles(props.type).fontSize};
	font-family: ${(props) => getFontStyles(props.type).fontFamily};
	color: ${(props) => props.color || "black"};
	line-height: ${(props) =>  props.type === "main-lg" ? 1.25 : props.type === "sub-xl" ? 1.4 : props.type === "sub-lg" ? "30px" : "normal"};
	font-weight: ${(props) => props.bold || "normal"};
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
): { fontSize?: string; fontFamily?: string, bold?:string } => {
	switch (type) {
		case "main-lg":
			return { fontSize: "52px", fontFamily: "'Caveat', cursive" };
		case "main-md":
			return { fontSize: "32px", fontFamily: "'Caveat', cursive" };
		case "sub-xl":
			return { fontSize: "32px" };
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

const index: React.FC<IWTypoProps> = ({ label, type, color, url, bold, style }) => {
	return (
		<div>
			{type === "link" && url ? (
				<StyledTypo variant="body1" type={type} color={color} bold={bold} style={style}>
					<StyledLink href={url} type={type} color={color} target="_blank">
						{label}
					</StyledLink>
				</StyledTypo>
			) : type === "arrow-link" && url ? (
				<StyledTypo variant="body1" type={type} color={color} bold={bold} style={style}>
					<StyledLink href={url} type={type} color={color} target="_blank">
						{label}
					</StyledLink>
				</StyledTypo>
			) : (
				<StyledTypo variant="body1" type={type} color={color} bold={bold} style={style}>
					{label}
				</StyledTypo>
			)}
		</div>
	);
};

export default index;
