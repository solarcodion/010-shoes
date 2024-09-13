import Accordion from "components/Accordion";
import { styled } from "styled-components";
import { device } from "utils/device";

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

const StyledAccordion = styled(Accordion)`
  width: 100%;
  max-width: 700px;
`;

const Faq = () => {
  return (
    <Root className="full">
      <StyledAccordion
        data={MOCK.map((d, index) => {
          return {
            ...d,
            title: (
              <span>
                Q 0{index + 1}
                <span style={{ marginLeft: 16 }}>{d.title}</span>
              </span>
            ),
          };
        })}
      />
    </Root>
  );
};

export default Faq;

const MOCK = [
  {
    id: 1,
    title: "This is question 1 in our FAQ",
    content:
      "This is the answer to question x. We had enough of paying high-end prices for produced shoes somewhere on the other side of the planet, damaging the environment and ruining the unique experience.",
  },
  {
    id: 2,
    title: "This is question 2 in our FAQ",
    content:
      "This is the answer to question x. We had enough of paying high-end prices for produced shoes somewhere on the other side of the planet, damaging the environment and ruining the unique experience.",
  },
  {
    id: 3,
    title: "This is question 3 in our FAQ",
    content:
      "This is the answer to question x. We had enough of paying high-end prices for produced shoes somewhere on the other side of the planet, damaging the environment and ruining the unique experience.",
  },
  {
    id: 4,
    title: "This is question 4 in our FAQ",
    content:
      "This is the answer to question x. We had enough of paying high-end prices for produced shoes somewhere on the other side of the planet, damaging the environment and ruining the unique experience.",
  },
  {
    id: 5,
    title: "This is question 5 in our FAQ",
    content:
      "This is the answer to question x. We had enough of paying high-end prices for produced shoes somewhere on the other side of the planet, damaging the environment and ruining the unique experience.",
  },
];
