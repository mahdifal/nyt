import useBusiness from "../hooks/useBusiness";
import ResultsList from "../components/ResultsList";
import SearchInput from "../components/SearchInput";
import SearchPagination from "../components/SearchPagination";

const SearchArticle = () => {
  const [debouncedChangeHandler, docs, totalPageCount, searchTerm] =
    useBusiness();

  return (
    <div>
      <SearchInput onChangeHandler={debouncedChangeHandler} />
      <ResultsList docs={docs} />
      <SearchPagination
        searchTerm={searchTerm}
        totalPageCount={totalPageCount}
      />
    </div>
  );
};

export default SearchArticle;
