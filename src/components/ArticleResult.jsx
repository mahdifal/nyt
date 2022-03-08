import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Loading from "./Loading";
import Error from "./Error";
import { convertISOtoHuman } from "../utils/timeService";
import { useDispatch } from "react-redux";
import { clearArticle } from "../redux/articleSlice";

function ArticleResult({ data }) {
  const dispatch = useDispatch();

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        {data.errorMessage && <Error title="Something went Wrong!" />}
        {data.fetching && <Loading />}
        {data.singleArticle?.docs && (
          <>
            <h4 className="mb-4">
              <Link
                to="/"
                className="btn btn-light"
                onClick={() => dispatch(clearArticle())}
              >
                <Icon name="left-circle" />
                Go to result page
              </Link>
            </h4>
            <h3>{data.singleArticle?.docs[0].abstract}</h3>
            <p className="fst-italic">
              {convertISOtoHuman(data.singleArticle?.docs[0].pub_date, "de-DE")}
            </p>
            <p>{data.singleArticle?.docs[0].lead_paragraph}</p>
          </>
        )}
      </Col>
    </Row>
  );
}

export default ArticleResult;
