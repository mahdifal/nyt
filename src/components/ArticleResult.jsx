import { Link } from "react-router-dom";

function ArticleResult({ docs, date }) {
  return (
    <>
      {typeof docs === "undefined" ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>{docs[0].abstract}</h1>
          <h3>
            <Link to="/">Go to result page</Link>
          </h3>
          <p>{date.toLocaleDateString("de-DE")}</p>
          <p>{docs[0].lead_paragraph}</p>
        </>
      )}
    </>
  );
}

export default ArticleResult;
