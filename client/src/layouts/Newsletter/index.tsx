import React, { useState } from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo"
import WButton from "@/theme/WButton"
import WInput from '@/theme/WInput'

const StyledNewsletterDiv = styled.div`
  margin-top: 100px;
  border-radius: 0.75rem;
  padding: 80px 48px;
	display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #FFDD66, #FFB902 47.92%, #E6A200);
  
  & p {
    text-align: center;
  }
`;

const StyledForm = styled.div`
  margin-top: 32px;
	display: flex;
  gap: 0.8rem;
`;

const SubHeadingWrapper = styled.div`
	@media (max-width: 900px) {
    max-width: 37rem;
  }
`;

const index = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

	return (
		<StyledNewsletterDiv>
			<WTypo
				label="Get connected and be the first to know ⚡️"
				type="sub-xl"
				color="#050038"
        style={{fontWeight: '600', letterSpacing: '-.03em', marginBottom: '4px'}}
			/>
      <SubHeadingWrapper>

        <WTypo
          label="Exciting updates are on the way! 🚀 Sign up for our newsletter, and we'll keep you posted with new stuff. 📧"
          type="sub-md"
          color="#050038"
        />
      </SubHeadingWrapper>
      <StyledForm>
        <WInput
          type="email"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your email"
          style={{height: '38px', textAlign: 'center', width: '20rem'}}
        />
        <WButton
          label="Subscribe"
          bgcolor="#0f172a"
          textColor="white"
          width="115px"
          rounded
          style={{height: '38px'}}
          onClick={() => console.log('Button clicked!')}
        /> 
      </StyledForm>
		</StyledNewsletterDiv>
	);
};

export default index;
