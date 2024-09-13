import { PageMarker, PageText, Text } from "components/basic";
import { styled } from "styled-components";
import { device } from "utils/device";

const Root = styled.div`
  padding: 130px 80px;
  display: flex;
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
  margin-top: 100px;
  @media ${device.mobile} {
    margin-top: 40px;
  }
`;

const Press = () => {
  return (
    <Root className="full">
      <Container>
        <PageMarker>Press</PageMarker>
        <PageText style={{ maxWidth: "500px" }}>
          Take a look at what others say about out sneakers.
        </PageText>
        <Text style={{ maxWidth: "1000px", marginTop: "40px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Text>
      </Container>
    </Root>
  );
};

export default Press;
