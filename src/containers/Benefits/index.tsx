import { PageTitle } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import benefitImg from "assets/images/benefit-placeholder.png";
import BenefitCard from "./BenefitCard";
import useStore from "hooks/useStore";
import { Carousel } from "components/Carousel";
import { useCallback, useState } from "react";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${device.tablet} {
    padding: 94px 58px;
    justify-content: space-around;
    height: 100vh;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
    justify-content: space-around;
  }
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 14px;
  grid-row-gap: 60px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 10%;
  max-width: 1200px;

  @media ${device.tablet} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SliderContainer = styled.div`
  overflow: hidden;
  margin-top: 50px;
  @media ${device.mobileS} {
    width: 300px;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;

  @media ${device.tablet} {
    gap: 60px;
  }
`;

const Benefits = () => {
  const { store } = useStore();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCarousel = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <Root className="full">
      <PageTitle>Benefits</PageTitle>
      {store.isTablet ? (
        <SliderContainer>
          <Carousel
            selectedIndex={selectedIndex}
            onClick={handleCarousel}
            arrows
            childStyle={{
              minWidth: "100%",
            }}
            option={{}}
          >
            {new Array(4).fill(1).map((v, i) => {
              return (
                <MobileContainer key={`benefit-carousel-${i}`}>
                  <BenefitCard
                    img={benefitImg}
                    text="Our love for sneakers grew over the years and so did our expectations."
                  />
                  <BenefitCard
                    img={benefitImg}
                    text="Our love for sneakers grew over the years and so did our expectations."
                  />
                </MobileContainer>
              );
            })}
          </Carousel>
        </SliderContainer>
      ) : (
        <Container>
          {new Array(8).fill(1).map((v, i) => {
            return (
              <BenefitCard
                key={`benefit-${i}`}
                img={benefitImg}
                text="Our love for sneakers grew over the years and so did our expectations."
              />
            );
          })}
        </Container>
      )}
    </Root>
  );
};

export default Benefits;
