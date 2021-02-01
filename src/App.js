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
            <Route path="/posts/:year/:month" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Route parameters

// There are times when we need to pass parameters to our Routes.
// eg. in the list of products depending on what product I select we should see
// a different product id in the url. That's a route parameter.

// How to pass and retrieve route parameter :
// Define a new Route for the productsDetails page like this
// <Route path="/products/:id" />
// To define a parameter we need to prefix that parameter with a colon.

// We can also define multiple parameters like this
// <Route path="/posts/:year/:month" component={Posts} />

// Now set the component for the Route like
// <Route path="/products/:id" component={ProductDetails} />

// Since this route is more specfic then the "/products" route we have put it first.
