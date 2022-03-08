import { Row, Col } from "react-bootstrap";
import Icon from "./Icon";

function SearchInput({ onChangeHandler }) {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              onChange={onChangeHandler}
              placeholder="Search articles ..."
              className="form-control"
            />
            <div className="search-icon-position">
              <Icon name="search" color="#6c757d" size="1.5" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SearchInput;
