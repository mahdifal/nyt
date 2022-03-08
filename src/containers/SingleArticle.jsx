import { Container } from "react-bootstrap";
import ArticleResult from "../components/ArticleResult";
import HeaderSearch from "../components/HeaderSearch";
import useSingleArticle from "../hooks/useSingleArticle";

function SingleArticle() {
  const article = useSingleArticle();
  return (
    <>
      <HeaderSearch />
      <Container>
        <ArticleResult data={article} />
      </Container>
    </>
  );
}

export default SingleArticle;
