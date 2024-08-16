import React from "react";
import styled from "@emotion/styled";
import { IWTagProps } from "@/contracts/IWTagProps";
import Link from "next/link";

// Styled component
const StyledTag = styled.div<{
	type: "circle-sm" | "circle-md" | "pill";
	bordered?: boolean;
	clickable?: boolean;
}>`
	width: ${({ type }) =>
		type === "pill" ? "7.5rem" : type === "circle-sm" ? "2rem" : "3rem"};
	height: ${({ type }) =>
		type === "pill" ? "2.5rem" : type === "circle-sm" ? "2rem" : "3rem"};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	border-radius: ${({ type }) => (type === "pill" ? "50px" : "50%")};
	border: ${({ bordered }) => (bordered ? "1px solid #ccc" : "none")};
	background-color: dodgerblue;
	color: white;
	font-family: monospace;
	padding: ${({ type }) => (type === "pill" ? "0 0.5rem" : "0")};
	transition: background-color 0.3s;

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
	href,
	type,
	bordered = false,
	clickable = false,
}) => {

	const handleClick = () => {
		if (clickable && href) {
			window.open(href, "_blank", "noopener,noreferrer");
		}
	};

	return clickable && href ? (
    <StyledTag
			type={type}
			bordered={bordered}
			clickable={clickable}
			onClick={handleClick}
		>
      <Link href={href} passHref>
        {icon}
        {type === "pill" && label && <span>{label}</span>}
      </Link>
		</StyledTag>
	) : (
    <StyledTag
			type={type}
			bordered={bordered}
			clickable={clickable}
			onClick={handleClick}
		>
      {icon}
      {type === "pill" && label && <span>{label}</span>}
		</StyledTag>
	);
};

export default WTag;
