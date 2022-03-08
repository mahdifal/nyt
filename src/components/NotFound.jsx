import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center my-5">
          <h1>Whoops!</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h3 className="align-self-center">404 Page Not Found ):</h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center my-5">
          <Link to="/" className="btn btn-light">
            <Icon name="left-circle" />
            Go Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
