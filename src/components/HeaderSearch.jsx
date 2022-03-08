import { Row, Col } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <Row className="justify-content-md-center bg-dark mb-5">
      <Col xs lg="4">
        <div className="my-2">
          <p className="text-light text-center">
            "The New York Times" article search application
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default HeaderSearch;
