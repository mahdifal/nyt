import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../redux/articleSlice";

const useSingleArticle = () => {
  const { name, id } = useParams();
  const urlID = `nyt://${name}/${id}`;

  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticle(urlID));
  }, [dispatch, urlID]);

  const {
    singleArticle: { docs },
  } = article;

  const date = new Date(docs[0].pub_date);

  return [docs, date];
};

export default useSingleArticle;
