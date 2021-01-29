import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

// Unlike frameworks like Angular, in React we do not have the concept of routing
// because react is a simple light weight library and not a complete framework.
// It is only responsible for rendering the view nothing more.

// So, to add routing to our application we need to install a library called
// react-router-dom -> npm i react-router-dom

// BrowserRouter
// On the top import BrowserRouter
// This component wraps the history object in browsers and passes it down to
// component tree. So anywhere in our component tree we can use the history object.

// Next we want to register the routes that basically means we tell react what
// component to render based on the given url. For that go to App.js
