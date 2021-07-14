import styled from "styled-components";
import Title from "./styledElements/Title";
import Lead from "./styledElements/Lead";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import Feature from "./Feature";
import { featuresData } from "../data";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}

  .section-lead {
    width: 50%;
    margin-bottom: 5rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    align-items: center;
  }
`;

function Features() {
  return (
    <section style={{ backgroundColor: "var(--veryLightGray)" }}>
      <Container>
        <div className="section-title">
          <Title>Why choose Easybank?</Title>
          <Lead className="section-lead">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </Lead>
        </div>
        <div className="features">
          {featuresData.map((feature) => (
            <Feature
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
