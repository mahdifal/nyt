import { Container, Row, Col } from "react-bootstrap";
import useBusiness from "../hooks/useBusiness";
import ResultsList from "../components/ResultsList";
import SearchInput from "../components/SearchInput";
import SearchPagination from "../components/SearchPagination";
import HeaderSearch from "../components/HeaderSearch";

const SearchArticle = () => {
  const [
    debouncedChangeHandler,
    docs,
    totalPageCount,
    searchTerm,
    searchResults,
  ] = useBusiness();

  return (
    <>
      <HeaderSearch />
      <Container className="">
        <SearchInput onChangeHandler={debouncedChangeHandler} />
        <ResultsList docs={docs} data={searchResults} />
        <Row className="justify-content-md-center mt-3">
          <Col xs lg="8">
            <SearchPagination
              searchTerm={searchTerm}
              totalPageCount={totalPageCount}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchArticle;
