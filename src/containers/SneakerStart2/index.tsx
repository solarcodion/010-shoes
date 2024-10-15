import { PageMarker } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";
import oxImg from "assets/images/sneaker-intro-1.png";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${device.tablet} {
    padding: 74px 28px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 70%;
`;

const LogoBg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  z-index: -1;
  @media ${device.mobile} {
    width: 90%;
  }
`;

const PageText = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};

  @media ${device.mobile} {
    font-size: 22px;
  }
`;

const SneakerStart2 = () => {
  return (
    <Root className="full">
      <LogoBg src={oxImg} alt="logo" />
      <Container>
        <PageMarker>Made with love</PageMarker>
        <PageText>
          Our Blancs are a love letter to modern sneakers and made of the finest
          materials.
          <br /> You can either exchange it for a real pair of high-quality
          Italian made sneakers in your size or enjoy benefits in the crypto
          world.
        </PageText>
      </Container>
    </Root>
  );
};

export default SneakerStart2;
