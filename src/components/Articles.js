import styled from "styled-components";
import Title from "./styledElements/Title";
import Article from "./Article";
import { articlesData } from "../data";
import { maxWidthLg, sectionSpacingMd } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  .section-title {
    margin-bottom: 5rem;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    align-items: center;

    ${Responsive.xl`
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    `}

    ${Responsive.sm`
    grid-template-columns: 1fr; 
    `}
  }
`;

function Articles() {
  return (
    <section style={{ backgroundColor: "var(--white)" }}>
      <Container>
        <div className="section-title">
          <Title>Latest Articles</Title>
        </div>
        <div className="articles" data-aos="fade-up">
          {articlesData.map((article) => (
            <Article
              key={article.id}
              image={article.image}
              author={article.author}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Articles;
