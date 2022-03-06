import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/searchSlice";

function SearchPagination({ searchTerm, totalPageCount }) {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  return (
    <div>
      {totalPageCount > 0 && (
        <>
          <button
            onClick={() => {
              dispatch(fetchSearch({ searchTerm, page: page - 1 }));
              setPage((prev) => prev - 1);
            }}
            disabled={page === 0}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(fetchSearch({ searchTerm, page: page + 1 }));
              setPage((page) => page + 1);
            }}
            disabled={page === totalPageCount}
          >
            +
          </button>
        </>
      )}
    </div>
  );
}

export default SearchPagination;
