import ArticleResult from "../components/ArticleResult";
import useSingleArticle from "../hooks/useSingleArticle";

function SingleArticle() {
  const [docs, date] = useSingleArticle();

  return (
    <div>
      <ArticleResult docs={docs} date={date} />
    </div>
  );
}

export default SingleArticle;
