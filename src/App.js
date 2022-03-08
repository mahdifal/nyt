import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import store from "./redux/store";

const SearchArticle = lazy(() => import("./containers/SearchArticle"));
const SingleArticle = lazy(() => import("./containers/SingleArticle"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SearchArticle />} />
          <Route path="//nyt://:name/:id" element={<SingleArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
