import { Provider } from "react-redux";
import { App } from "./components/App";
import { store } from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
