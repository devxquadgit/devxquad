import React from 'react';
import Styled from '@emotion/styled';
import Logo from '@/assets/logo/logo.svg';
import WTypo from '@/theme/WTypo';
import WTag from '@/theme/WTag';
import footerData from './footerData';

const StyledFooter = Styled.div`
  margin-top: 100px;  
  display: flex;
  flex-direction: column;
`;

const StyledTop = Styled.div`
  width: 100%;
  display: flex;
`;

const StyledInfo = Styled.div`
  width: 45%;
`;

const StyledLinks = Styled.div`
  padding-left: 8.3%;
  width: 55%;
  display: flex;
  justify-content: space-around;
`;

const StyledLinkContainer = Styled.div``;

const StyledBottom = Styled.div`
  margin-top: 48px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Index: React.FC = () => {
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
