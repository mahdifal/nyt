import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SearchArticle from "./containers/SearchArticle";
import SingleArticle from "./containers/SingleArticle";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchArticle />} />
          <Route path="//nyt://:name/:id" element={<SingleArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
