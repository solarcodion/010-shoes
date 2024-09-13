import { styled } from "styled-components";
import { device } from "utils/device";
import productImg1 from "assets/images/top-view.jpg";
import productImg2 from "assets/images/detail.jpg";
import productImg3 from "assets/images/detail2.jpg";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.colors.bg};
  @media ${device.tablet} {
    padding: 74px 28px;
    overflow: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 14px;
  max-width: 1400px;

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 800px;
  object-fit: contain;
`;

const SneakerGallery = () => {
  return (
    <Root className="full">
      <Container>
        <ProductImage src={productImg1} alt="product-image1" />
        <ProductImage src={productImg2} alt="product-image2" />
        <ProductImage src={productImg3} alt="product-image3" />
      </Container>
    </Root>
  );
};

export default SneakerGallery;
