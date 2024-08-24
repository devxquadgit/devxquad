import { useState } from 'react';
import styled from '@emotion/styled';
import faqData from './faqData';
import { IFaqProps } from '@/contracts/IFaqProps';
import WTypo from '@/theme/WTypo'


const StyledFaqMain = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    margin-top: 80px;
  }
`;

const StyledFaq = styled.div`
  max-width: 950px;
`;

const StyledFaqHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 50px;
`;

const FAQItemContainer = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 15px;
`;

const StyledQuestion = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 30px;
  transition: color 0.3s ease;
  color: ${props => (props.isOpen ? '#b80b0a' : '#000')};

  @media (max-width: 425px) {
    padding: 10px;
  }
`;

const StyledAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => (props.isOpen ? '200px' : '0')};
  overflow: hidden;
  padding-left: 30px;
  padding-right: 80px;
  transition: max-height 0.3s ease, padding 0.3s ease;
  
  @media (max-width: 425px) {
    padding-left: 10px;
  }
`;

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 30px;
  transition: transform 0.5s ease;
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};

  @media (max-width: 425px) {
    font-size: 22px;
  }
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <StyledFaqMain>
      <StyledFaq>  
        <StyledFaqHeading>
          <WTypo
            label="ASK"
            type="sub-sm"
            color="rgba(184, 11, 10, 1)"
          />
          <WTypo
            label="Frequently asked questions"
            type="main-md"
            color="#1e293b"
          />
        </StyledFaqHeading>
        {faqData.map((item: IFaqProps, index: number) => (
          <FAQItemContainer key={index}>
            <StyledQuestion isOpen={openIndex === index} onClick={() => toggleFAQ(index)}>
              <WTypo
                Component="Faq"
                label={item.question}
                type="sub-lg"
                color={openIndex === index ? '#b80b0a' : '#000'}
              />
              <ToggleIcon isOpen={openIndex === index}>+</ToggleIcon>
            </StyledQuestion>
            <StyledAnswer isOpen={openIndex === index}>
              <WTypo
                Component="Faq"
                label={item.answer}
                type="sub-md"
                color="#000"
                style={{lineHeight: '1.6', margin: '1rem 0'}}
              />
            </StyledAnswer>
          </FAQItemContainer>
        ))}
      </StyledFaq> 
    </StyledFaqMain>
  );
};

export default FAQ;
