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
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Query String parameters

// Even though we learned how to define optional parameters, generally optional
// parameters are something we need to avoid.
// When we are dealing with optional parameters, instead of including them in the
// Route we should include them in the query string.
// Query String is somthing that we append to a url using '?'. Here, we can have
// 0 or more parameters. eg. posts?sortBy=newest&approved=true

// Query string parameters are in the location object. The search property in the
// location object is our entire query string.

// Now, we do not want to manually read this string, parse it and extract it.
// There is an npm package 'query-string' that does the job.

// Install this package and let's go to the posts component.
