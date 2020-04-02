import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./containers/main";

export default class ReactApp {
  constructor() {
    this.element = document.getElementById("root");
    this.render();
  }

  render() {
    ReactDOM.render(
      <Provider store={store}>
        <Main />
      </Provider>,
      this.element
    );
  }
}
