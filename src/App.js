import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Route Props
// The Route component passes the props history, location and match.
// Essentially, the Route component is a wrapper around the component that we pass.
// If the path matches, it will render the component and it will automatically
// inject the 3 props history, location and match.

// We use history prop to work with the history object in browser and with that
// we can send the user to a different page.

// location prop which represents where the app is now.

// match prop which contains information about how this url match the path that
// we set in our route.

// To know more about their objects and properties visit:
// https://reactrouter.com/web/api/
