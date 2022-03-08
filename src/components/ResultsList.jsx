import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";

const ResultsList = ({ docs, data }) => {
  const { errorMessage, fetchSearchs } = data.search;
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        {docs?.length && <h3 className="mt-3">Results</h3>}
        {errorMessage && <Error title="Something went Wrong!" />}
        {fetchSearchs && <Loading />}
        {/* {true && <Loading />} */}
        {docs?.map((item) => (
          <div key={item._id}>
            <div className="list-group">
              <Link
                to={`${item._id}`}
                className="list-group-item list-group-item-action text-truncate"
              >
                {item.abstract}
              </Link>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default ResultsList;
