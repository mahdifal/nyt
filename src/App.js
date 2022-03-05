import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SearchArticle from "./containers/SearchArticle";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchArticle />
      </div>
    </Provider>
  );
}

export default App;
