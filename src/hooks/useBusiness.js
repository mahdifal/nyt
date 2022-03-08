import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { fetchSearch } from "../redux/searchSlice";

function useBusiness() {
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state);

  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
    dispatch(fetchSearch({ searchTerm: event.target.value }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  const {
    search: {
      searchList: { docs, meta },
    },
  } = searchResults;

  const totalPageCount = Math.ceil(meta?.hits / 10);

  return [
    debouncedChangeHandler,
    docs,
    totalPageCount,
    searchTerm,
    searchResults,
  ];
}

export default useBusiness;
