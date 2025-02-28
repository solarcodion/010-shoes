import { PageTitle, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import shoesImg from "assets/images/sneaker-intro-3.png";
import { FlexBox } from "components/basic/Box";

const Root = styled.div`
  padding: 130px 0 130px 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
  @media ${device.tablet} {
    padding: 94px 58px;
    overflow: auto;
  }
  @media ${device.mobile} {
    padding: 94px 28px;
    overflow: auto;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  flex-grow: 1;
  height: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: -webkit-fill-available;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 30vw;
  align-self: center;

  & .left-title {
    margin-top: 36px;
  }

  & .left-text {
    margin-top: 56px;
  }

  @media ${device.tablet} {
    width: 100%;
    min-width: unset;

    & .left-title {
      margin-top: 16px;
    }

    & .left-text {
      margin-top: 34px;
    }
  }
`;

const Img = styled.img`
  width: 90%;
  max-height: 80%;
  object-fit: contain;
`;

const SneakerDesc = () => {
  return (
    <Root className="full">
      <Container>
        <Left>
          <PageTitle className="left-title">
            Made for Creators,
            <br />
            Built for the Future.
          </PageTitle>
          <Text className="left-text">
            The 010 OG Sneaker isn’t just a digital asset—it’s designed for
            creators, innovators, and trendsetters. As a holder, you can redeem
            your NFT for a handcrafted, Italian-made sneaker in your size while
            unlocking exclusive crypto-native perks.
            <br />
            <br />
            Crafted from the finest materials yet fully customizable, the 010
            OG blends top-tier craftsmanship with creative freedom. Choose your
            colors, refine materials, and make it yours - because visionaries
            don’t follow trends, they set them.
            <br />
            <br />
            And this is just the beginning. 010 is teaming up with big names for
            exclusive collaborations.
            <br />
            <br />
            Create the way. Stay ahead.
          </Text>
        </Left>
        <FlexBox
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
        >
          <Img src={shoesImg} alt="" />
        </FlexBox>
      </Container>
    </Root>
  );
};

export default SneakerDesc;
