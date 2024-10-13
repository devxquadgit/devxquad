import React from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import WTag from "@/theme/WTag";
import WButton from "@/theme/WButton";
import Img from "@/assets/landing/img1.png";
import CreditCardIcon from '@/assets/icons/creditcard.svg';
import MoneyIcon from '@/assets/icons/money.svg';
import { useRouter } from "next/router";

const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	margin: 3rem 0;

  @media (max-width: 900px) {
		align-items: center;
    flex-direction: column;
  }
`;

const StyledContent = styled.div`
	width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;

	@media (max-width: 900px) {
		width: 100%;
    max-width: 720px;
  }

	@media (max-width: 475px) {
    padding: 0;
  }
`;

const StyledImageMain = styled.div`
	width: 55%;
	border: 1px solid rgb(226, 232, 240);
	padding: 1.5rem;
	border-radius: 1rem;
	background-color: #f8fafc;

	@media (max-width: 1024px) {
		height: 100%;
    align-self: center;
  }

	@media (max-width: 900px) {
		margin-top: 2rem;
		width: 100%;
    max-width: 680px;
  }
`;

const StyledImage = styled.img`
	border-radius: 1rem;
	border: 1px solid #e2e8f0;
	box-shadow: 0 0.5rem 1rem rgba(2, 6, 23, 0.15);
`;

const StyledBadge = styled.div`
  display: inline-block;
  margin-bottom: 24px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e4a1a1;

	@media (max-width: 900px) {
		align-self: center;
  }
  
  & div p{
    font-weight: 700;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

	@media (max-width: 900px) {
		text-align: center;
  }
`;

const StyledTagDiv = styled.div`
	margin: 2.5rem 0;
	display: flex;
	gap: 24px;

	@media (max-width: 475px) {
		justify-content: center;
		width: 100%;
	}
`;

const StyledTag = styled.div`
    display: flex;
		align-items: center;
		gap: 8px;
`;

const ButtonWrapper = styled.div`
  @media (max-width: 900px) {
		width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const index = () => {

	const router = useRouter()

	return (
		<StyledDiv>
			<StyledContent>
				<StyledBadge>
					<WTypo
						label="New: Our Live collaborative just landed"
						type="sub-sm"
						color="rgba(184, 11, 10, 1)"
            bold="700"
					/>
				</StyledBadge>
				<StyledHeading>
					<WTypo
						label="Empowering Your Business with Seamless Solutions"
						type="main-lg"
						color="#1e293b"
            bold="700"
					/>
					<WTypo
						label="Let us handle your software, marketing, and servers—so you can focus on what you do best. Partner with us and watch your business excel effortlessly."
						type="sub-lg"
						color="#64748b"
					/>
				</StyledHeading>
				<ButtonWrapper>
					<WButton
						label="Get Quote"
						bgcolor="#b80b0a"
						textColor="white"
						// width="115px"
						rounded
						onClick={() => router.push('contactus')}
					/>
				</ButtonWrapper>
				{/* <StyledTagDiv>
					<StyledTag>
						<WTag
							icon={<CreditCardIcon/>}
							type="circle-sm"
							bordered
						/>
						<WTypo
							label="No credit card required"
							type="sub-sm"
							color="#64748b"
						/>
					</StyledTag>
					<StyledTag>
						<WTag
							icon={<MoneyIcon/>}
							type="circle-sm"
							bordered
						/>
						<WTypo
							label="Free until upgrade"
							type="sub-sm"
							color="#64748b"
						/>
					</StyledTag>
				</StyledTagDiv> */}
			</StyledContent>
			<StyledImageMain>
				<StyledImage src={Img.src} width="100%" alt="Landing Image" />
			</StyledImageMain>
		</StyledDiv>
	);
};

export default index;
