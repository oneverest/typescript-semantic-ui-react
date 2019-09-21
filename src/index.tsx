import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-less/semantic.less";
import * as serviceWorker from "./serviceWorker";
import { App } from "./app";
import { Router } from "react-router-dom";
import history from "./ahistory";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const reactRoot = document.getElementById("root");
reactRoot &&
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    reactRoot
  );

// ReactDOM.render(<ReactQuill />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
