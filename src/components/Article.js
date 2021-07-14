import styled from "styled-components";
import { headingStyles, textStyles } from "../abstracts/Mixins";

const Container = styled.a`
  cursor: pointer;

  &:hover,
  &:focus {
    .article-title {
      color: var(--limeGreen);
    }
  }

  .article-body {
    padding: 0.5rem;
  }

  .article-img {
    width: 100%;
    height: 20rem;
  }

  .article-author {
    ${textStyles}
    color: var(--grayishBlue);
    font-size: 1.2rem;
  }

  .article-title {
    ${headingStyles}
    color: var(--darkBlue);
    font-size: var(--xxs);
    padding: 1rem 0;
    transition: var(--mainTransition);
  }

  .article-desc {
    ${textStyles}
    font-size: 1.4rem;
    color: var(--grayishBlue);
  }
`;

function Article({ image, author, title, description }) {
  return (
    <article>
      <Container>
        <img className="article-img" src={image} alt={title} />
        <div className="article-body">
          <small className="article-author">{author}</small>
          <h5 className="article-title">{title}</h5>
          <p className="article-desc">{description}</p>
        </div>
      </Container>
    </article>
  );
}

export default Article;
