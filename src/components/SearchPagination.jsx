import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/searchSlice";
import Icon from "./Icon";

function SearchPagination({ searchTerm, totalPageCount }) {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  return (
    <div>
      {totalPageCount > 0 && (
        <Row>
          <Col className="d-flex justify-content-start">
            <button
              onClick={() => {
                dispatch(fetchSearch({ searchTerm, page: page - 1 }));
                setPage((prev) => prev - 1);
              }}
              disabled={page === 0}
              className="btn btn-light"
            >
              <Icon name="left-circle" />
              Prev Page
            </button>
          </Col>
          <Col className="d-flex justify-content-end">
            <button
              onClick={() => {
                dispatch(fetchSearch({ searchTerm, page: page + 1 }));
                setPage((page) => page + 1);
              }}
              disabled={page === totalPageCount}
              className="btn btn-light"
            >
              Next Page
              <Icon name="right-circle" />
            </button>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default SearchPagination;
