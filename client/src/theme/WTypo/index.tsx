import React from "react";
import styled from "@emotion/styled";
import { IWTypoProps } from "@/contracts/IWTypoProps";
import { Typography } from "@mui/material";
import Link from "next/link";

const StyledTypo = styled(Typography)<{ component?: string, type?: string; color?: string, bold?: string }>`
	font-size: ${(props) => getFontStyles(props.type).fontSize};
	font-family: ${(props) => getFontStyles(props.type).fontFamily};
	color: ${(props) => props.color || "black"};
	line-height: ${(props) =>  props.type === "main-lg" ? 1.25 : props.type === "sub-xl" ? 1.4 : props.type === "sub-lg" ? "30px" : "normal"};
	font-weight: ${(props) => props.bold || "normal"};
	cursor: ${(props) => props.type === 'arrow-link' && "pointer"};

	@media (max-width: 900px) {
    font-size: ${(props) => props.type === "main-lg" ? "47px" : props.type === "sub-xl" ? "29px" : getFontStyles(props.type).fontSize};
  }

	@media (max-width: 768px) {
    font-size: ${(props) => props.type === "main-lg" ? "44px" : props.type === "sub-xl" ? "29px" : getFontStyles(props.type).fontSize};
  }

	@media (max-width: 475px) {
		text-align: ${(props) => props.type === "main-md" && "center"}; 	
		font-weight: ${(props) => props.type === "main-md" && "550"}; 	
    font-size: ${(props) => props.component === "Faq" && props.type === "sub-lg" && "16px"};
    font-size: ${(props) => props.component === "Faq" && props.type === "sub-md" && "16px"};
  }
`;

const StyledLink = styled(Link)<{ component?: string, color?: string, type?: string }>`
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
			return { fontSize: "52px", fontFamily: "'Caveat', cursive" };
		case "main-md":
			return { fontSize: "32px", fontFamily: "'Caveat', cursive" };
		case "sub-xl":
			return { fontSize: "32px" };
		case "sub-lg":
			return { fontSize: "20px" };
		case "sub-sm":
			return { fontSize: "14px" };
		case "sub-md":
		case "link":
		case "arrow-link":
		default:
			return { fontSize: "16px" };
	}
};

const index: React.FC<IWTypoProps> = ({ Component, label, type, targetBlank, color, url, bold, style }) => {
	return (
		<div>
			{type === "link" && url ? (
				<StyledTypo variant="body1" component={Component} type={type} color={color} bold={bold} style={style}>
					<StyledLink href={url} component={Component} type={type} color={color} target={targetBlank ? "_blank" : ""}>
						{label}
					</StyledLink>
				</StyledTypo>
			) : type === "arrow-link" && url ? (
				<StyledTypo variant="body1" component={Component} type={type} color={color} bold={bold} style={style}>
					<StyledLink href={url} component={Component} type={type} color={color} target={targetBlank ? "_blank" : ""}>
						{label}
					</StyledLink>
				</StyledTypo>
			) : (
				<StyledTypo variant="body1" component={Component} type={type} color={color} bold={bold} style={style}>
					{label}
				</StyledTypo>
			)}
		</div>
	);
};

export default index;
