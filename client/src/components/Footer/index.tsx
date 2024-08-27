import React, { useState } from 'react';
import Styled from '@emotion/styled';
import Logo from '@/assets/logo/logo.svg';
import WTypo from '@/theme/WTypo';
import WTag from '@/theme/WTag';
import footerData from './footerData';

const StyledFooter = Styled.div`
  margin-top: 100px;  
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    margin-top: 80px;
  }
`;

const StyledTop = Styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 850px) {
    gap: 2rem;
    justify-content: space-evenly;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const StyledInfo = Styled.div`
  width: 45%;
   
  @media (max-width: 850px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const StyledLinks = Styled.div`
  padding-left: 8.3%;
  width: 55%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    padding-left: 5%;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const StyledCollapsedLinks = Styled.div`
  display: none;
  
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledLinkContainer = Styled.div``;

const StyledBottom = Styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const StyledCopyright = Styled.div``;

const StyledSocialMedia = Styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoWrapper = Styled(Logo)`
  width: 80px;
  height: 48px;
  margin-bottom: 24px;
`;


const LinksItemContainer = Styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 8px;
`;

const StyledCategory = Styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 0;
  transition: color 0.3s ease;
  color: ${props => (props.isOpen ? '#b80b0a' : '#000')};
`;

const ToggleIcon = Styled.span<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
  transition: transform 0.5s ease;
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const StyledCatLink = Styled.div<{ isOpen: boolean }>`
  max-height: ${props => (props.isOpen ? '200px' : '0')};
  overflow: hidden;
  padding-right: 80px;
  transition: max-height 0.5s ease, padding 0.5s ease;
`;

const Index: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <StyledFooter>
      <StyledTop>
        <StyledInfo>
          <LogoWrapper />
          <WTypo
            label={footerData.subheadingText}
            type="sub-md"
            color="#64748b"
            style={{ maxWidth: '30rem', lineHeight: '1.5' }}
          />
        </StyledInfo>
        <>
          <StyledLinks>
            {footerData.subheadings.map((subheading, index) => (
              <StyledLinkContainer key={index}>
                <WTypo
                  label={subheading.title}
                  type="sub-md"
                  color="#1E293B"
                  bold="550"
                  style={{ marginBottom: '24px', lineHeight: '1.5' }}
                />
                {subheading.links.map((link, idx) => (
                  <WTypo
                    key={idx}
                    label={link.slug}
                    type="link"
                    color="#64748B"
                    url={link.url}
                    style={{ marginBottom: '14px' }}
                  />
                ))}
              </StyledLinkContainer>
            ))}
          </StyledLinks>
          <StyledCollapsedLinks>
            {footerData.subheadings.map((subheading, index) => (
              <LinksItemContainer key={index}>
                <StyledCategory isOpen={openIndex === index} onClick={() => toggleFAQ(index)}>
                  <WTypo
                    label={subheading.title}
                    type="sub-md"
                    color="#1E293B"
                    bold="550"
                  />
                  <ToggleIcon isOpen={openIndex === index}>+</ToggleIcon>
                </StyledCategory>
                <StyledCatLink isOpen={openIndex === index}>
                  {subheading.links.map((link, idx) => (
                    <WTypo
                      key={idx}
                      label={link.slug}
                      type="link"
                      color="#64748B"
                      url={link.url}
                      style={{ marginBottom: '14px' }}
                    />
                  ))}
                </StyledCatLink>
              </LinksItemContainer>
            ))}
          </StyledCollapsedLinks>
        </>
      </StyledTop>
      <StyledBottom>
        <StyledCopyright>
          <WTypo
            label={footerData.copyrightText}
            type="sub-sm"
            color="#64748b"
            style={{ maxWidth: '30rem', lineHeight: '1.5' }}
          />
        </StyledCopyright>
        <StyledSocialMedia>
        {footerData.socialMedia.map((item, index) => (
            <WTag
              key={index}
              icon={<item.svg />}
              type="circle-md"
              bordered
              clickable
              style={{ color: '#64748B' }}
              url={item.url}
              linkStyle={{height: '16px'}}
            />
          ))}
        </StyledSocialMedia>
      </StyledBottom>
    </StyledFooter>
  );
};

export default Index;
