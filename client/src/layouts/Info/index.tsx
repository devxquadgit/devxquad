import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import infoData from "./infoData";
import WTag from "@/theme/WTag";
import TickIcon from "@/assets/icons/tick.svg";

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	margin-top: 100px;

	@media (max-width: 767px) {
		flex-direction: column;
	}

	@media (max-width: 550px) {
		margin-top: 60px;
	}

	@media (max-width: 425px) {
		margin-top: 50px;
	}
`;

const StyledHeading = styled.div<{ isEven: boolean }>`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	width: ${({ isEven }) => (isEven ? "40.5%" : "42.5%")};
	order: ${({ isEven }) => (isEven ? "0" : "1")};

	@media (max-width: 1024px) {
		width: 42.5%;
	}

	@media (max-width: 767px) {
		order: 0;
		width: 100%;
	}
`;

const StyledImageMain = styled.div<{ isEven: boolean }>`
	width: ${({ isEven }) => (isEven ? "57%" : "55%")};
	padding-left: ${({ isEven }) => (isEven ? "8.3%" : "0")};
	padding-right: ${({ isEven }) => (isEven ? "0" : "6.2%")};

	& img {
		max-width: 624px;
	}

	@media (max-width: 1024px) {
		margin: 0;
	}
	
	@media (max-width: 767px) {
		padding: 0;
		padding-top: 2rem;
		width: 100%;
	}
`;

const StyledPoints = styled.div`
	display: flex;
	align-items: center;
	gap: 0.3rem;
`;

const StyledPointsMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 32px;
`;

interface InfoLayoutProps {
	render: string;
}

const InfoLayout: React.FC<InfoLayoutProps> = ({ render }) => {

	const section = infoData.find((section) => section.render === render);

	if (!section) {
		return null;
	}

	return (
		<>
			{section.data.map((data, index) => {
				const isEvenIndex = index % 2 === 0;

				return (
					<StyledDiv key={index}>
						<StyledHeading isEven={isEvenIndex}>
							<WTypo
								label={data.Topic}
								type="sub-sm"
								color="rgba(184, 11, 10, 1)"
							/>
							<WTypo
								label={data.Heading}
								type="main-md"
								color="#1e293b"
								style={{
									marginTop: "24px",
									marginBottom: "1rem",
								}}
							/>
							<WTypo
								label={data.Desc}
								type="sub-lg"
								color="#64748b"
								style={{ marginBottom: "32px" }}
							/>
							{data.Points && (
								<StyledPointsMain>
									{data.Points.map((point: string, idx) => (
										<StyledPoints key={idx}>
											<WTag
												icon={<TickIcon />}
												type="circle-sm"
												style={{
													color: "green",
													width: "20px",
													height: "20px",
												}}
											/>
											<WTypo
												label={point}
												type="sub-md"
												color="#64748b"
											/>
										</StyledPoints>
									))}
								</StyledPointsMain>
							)}
							{data.Url && (
								<WTypo
									label="Learn More"
									type="arrow-link"
									color="#b80b0a"
								/>
							)}
						</StyledHeading>
						<StyledImageMain isEven={isEvenIndex}>
							<img
								src={data.Image}
								width="100%"
								alt="Landing Image"
							/>
						</StyledImageMain>
					</StyledDiv>
				);
			})}
		</>
	);
};

export default InfoLayout;
