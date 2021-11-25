import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/Main/App/App";
import { setupStore } from "./services/store";
import { Provider } from "react-redux";

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
