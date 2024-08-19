import React from "react";
import styled from "@emotion/styled";
import { IWTagProps } from "@/contracts/IWTagProps";
import Link from "next/link";

// Styled component
const StyledTag = styled.div<{
	type: "circle-sm" | "circle-md" | "circle-lg" | "pill";
	bordered?: boolean;
	clickable?: boolean;
	bgcolor?: string;
}>`
	width: ${({ type }) =>
		type === "pill" ? "7.5rem" : type === "circle-sm" ? "2rem" : type === "circle-lg" ? "54px" : "3rem"};
	height: ${({ type }) =>
		type === "pill" ? "2.5rem" : type === "circle-sm" ? "2rem" : type === "circle-lg" ? "54px" : "3rem"};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${({ type }) => (type === "pill" ? "50px" : "50%")};
	border: ${({ bordered }) => (bordered ? "1px solid #ccc" : "none")};
	background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "transparent")};;
	color: white;
	font-family: monospace;
	padding: ${({ type }) => (type === "pill" ? "0 0.5rem" : "0")};
	transition: background-color 0.3s;
	user-select: none;

	&:hover {
		background-color: ${({ clickable }) =>
			clickable ? "#f0f0f0" : "dodgerblue"};
		cursor: ${({ clickable }) =>
			clickable ? "pointer" : "normal"};
	}

	svg {
		margin-right: ${({ type, children }) =>
			type === "pill" && children ? "8px" : "0"};
	}
`;

const WTag: React.FC<IWTagProps> = ({
	icon,
	label,
	url,
	type,
	bordered = false,
	clickable = false,
	bgcolor,
	style
}) => {

	return clickable && url ? (
    <StyledTag
			type={type}
			bordered={bordered}
			clickable={clickable}
			bgcolor={bgcolor}
			style={style}
		>
      <Link href={url} target="_blank">
        {icon}
        {type === "pill" && label && <span>{label}</span>}
      </Link>
		</StyledTag>
	) : (
    <StyledTag
			type={type}
			bordered={bordered}
			clickable={clickable}
			bgcolor={bgcolor}
			style={style}
		>
      {icon}
      {type === "pill" && label && <span>{label}</span>}
		</StyledTag>
	);
};

export default WTag;
