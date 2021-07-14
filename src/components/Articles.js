import styled from "styled-components";
import Title from "./styledElements/Title";
import Article from "./Article";
import { articlesData } from "../data";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}

  .section-title {
    margin-bottom: 5rem;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    align-items: center;
  }
`;

function Articles() {
  return (
    <section style={{ backgroundColor: "var(--white)" }}>
      <Container>
        <div className="section-title">
          <Title>Latest Articles</Title>
        </div>
        <div className="articles">
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
