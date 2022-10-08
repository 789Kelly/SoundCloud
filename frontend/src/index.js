import React from "react";

import "./index.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import { ModalProvider2 } from "./context/Modal2";
// import { ModalProvider3 } from "./context/Modal3";
import { restoreCSRF, csrfFetch } from "./store/csrf";
// imported Modal Provider
import configureStore from "./store";
import * as sessionActions from "./store/session";
import "./fonts/Overpass/Overpass-VariableFont_wght.ttf";
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      {/* <ModalProvider3> */}
      <ModalProvider2>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </ModalProvider2>
      {/* </ModalProvider3> */}
    </Provider>
  );
}
//added ModalProvider context
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
