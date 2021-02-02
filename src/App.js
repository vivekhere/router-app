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

// Optional Parameters

// When we define parameters in our route by default those parameters are required.
// In the posts path there are 2 parametes year and month.
// If we do not specify anyone or both of the parameters like '/posts/2018' or
// simply '/posts', the path will not match and hence it will continue the search
// and eventually will match with the Home route and render the Home component.

// But suppose if we want to pass only one parameter and not all, in this case we
// can the parameters optional.
// To make the parameter optional, simply append a '?' to the parameters that you
// want to be optional.

// This is a part of regualr expression in js. In regular expressions or regex,
// when we append a '?' that means that expression is optional.
