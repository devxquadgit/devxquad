import React, { useState } from "react";
import styled from "@emotion/styled";
import WTypo from "@/theme/WTypo";
import WButton from "@/theme/WButton";
import { IFeatureLayoutProps } from "@/contracts/IFeatureLayoutProps";
import WInput from '@/theme/WInput';
import Img from '@/assets/landing/img9.png';
import Newsletter from '@/layouts/Newsletter'

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  padding-bottom: 40px;

  @media (max-width: 425px) {
    margin-top: 80px;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top:7rem;
  max-width: calc(100% - 30rem);

  @media (max-width: 1024px) {
    max-width: calc(100% - 19rem);
  }

  @media (max-width: 900px) {
    margin-top: 0;
    max-width: calc(100% - 19rem);
  }

  @media (max-width: 768px) {
    max-width: calc(100% - 6rem);
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const StyledContactMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


const ContainerDiv = styled.div`
  --bs-gutter-x: 2.5rem;
  --bs-gutter-y: 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--bs-gutter-x)* .5);
  padding-right: calc(var(--bs-gutter-x)* .5);
  width: 100%;
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  
  @media (max-width: 767px) {
    max-width: 540px;
  }
`;

const StyledFormContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 80px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledForm = styled.div`
  display: flex;
  box-shadow: 0 0.125rem 0.25rem rgba(2,6,23,.075);
  padding: 1.5rem;
  width: 45%;
  gap: 2rem;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 60%;
  }
  
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

const StyledFormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const StyledFormInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;


const StyledImageMain = styled.div`
	width: "57%";
	padding-left: "8.3%";
	padding-right: "0";

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

const index: React.FC<IFeatureLayoutProps> = () => {

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledDiv>
      <StyledContactMain>
        <StyledHeading>
          <WTypo
            label="SAY HI"
            type="sub-sm"
            color="rgba(184, 11, 10, 1)"
          />
          <WTypo
            label="CONTACT US"
            type="main-md"
            color="#1e293b"
          />
          <WTypo
            label="Please reach out to us if you have questions about our enterprise offerings, or anything else."
            type="sub-lg"
            color="#64748b"
            style={{ textAlign: 'center' }}
          />
        </StyledHeading>
        <ContainerDiv>
          <StyledFormContainer>
          <StyledForm>
            <StyledFormRow>
              <StyledFormInput>
                <WTypo
                  label="First Name"
                  type="sub-sm"
                  color="#64748b"
                  style={{ marginBottom: '0.5rem' }}
                />
                <WInput
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="John"
                  style={{height: '38px', width: '100%'}}
                  
                />
              </StyledFormInput>
              <StyledFormInput>
                <WTypo
                  label="Last Name"
                  type="sub-sm"
                  color="#64748b"
                  style={{ marginBottom: '0.5rem' }}
                />
                <WInput
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  style={{height: '38px', width: '100%'}}
                />
              </StyledFormInput>
            </StyledFormRow>
            <StyledFormRow>
              <StyledFormInput>
                <WTypo
                  label="Email"
                  type="sub-sm"
                  color="#64748b"
                  style={{ marginBottom: '0.5rem' }}
                />
                <WInput
                  type="email"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  style={{height: '38px', width: '100%'}}
                />
              </StyledFormInput>
            </StyledFormRow>
            <StyledFormRow>
              <StyledFormInput>
                <WTypo
                  label="Company Name"
                  type="sub-sm"
                  color="#64748b"
                  style={{ marginBottom: '0.5rem' }}
                />
                <WInput
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  // placeholder="johndoe@example.com"
                  style={{height: '38px', width: '100%'}}
                />
              </StyledFormInput>
            </StyledFormRow>
            <StyledFormRow>
              <StyledFormInput>
                <WTypo
                  label="Phone"
                  type="sub-sm"
                  color="#64748b"
                  style={{ marginBottom: '0.5rem' }}
                />
                <WInput
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  // placeholder="johndoe@example.com"
                  style={{height: '38px', width: '100%'}}
                />
              </StyledFormInput>
            </StyledFormRow>
            <StyledFormRow>
              <StyledFormInput>
                <WTypo
                  label="Message"
                  type="sub-sm"
                  color="#64748b"
                  style={{ marginBottom: '0.5rem' }}
                />
                <WInput
                  type="textarea"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Write to us"
                  style={{height: '38px', width: '100%', resize: 'vertical'}}
                />
              </StyledFormInput>
            </StyledFormRow>
            <StyledFormRow>
            <WButton
              label="Contact us"
              bgcolor="#b80b0a"
              textColor="white"
              width="115px"
              rounded
              // onClick={() => router.push('contactus')}
            />
            </StyledFormRow>
          </StyledForm>
          <StyledImageMain>
            <img
              src={Img.src}
              width="100%"
              alt="Landing Image"
            />
          </StyledImageMain>
          </StyledFormContainer>
        </ContainerDiv> 
        <ContainerDiv>
          <Newsletter />
        </ContainerDiv>
      </StyledContactMain>
    </StyledDiv>
  );
};

export default index;
