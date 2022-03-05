import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { fetchSearch } from "../redux/searchSlice";

const SearchArticle = () => {
  const dispatch = useDispatch();

  const postList = useSelector(({ search: { searchList } }) => searchList);

  const changeHandler = (event) => {
    dispatch(fetchSearch({ value: event.target.value }));
  };
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 800), []);

  return (
    <div>
      <h1>Search List</h1>
      <input
        type="text"
        onChange={debouncedChangeHandler}
        placeholder="Search a article ..."
      />
      {postList?.map((item) => (
        <div key={item._id}>{item.abstract}</div>
      ))}
    </div>
  );
};

export default SearchArticle;
