import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// Programmatic navigation

// There are times when we want to redirect a user when they click a button or
// submit a form.
// For example - In the '/products' page we have 3 products. In one of the products,
// we have a save button. When the user clicks this button we want to take the user
// back to the products page.
// This is called 'Programmatic navigtion'.

// The history object has a bunch of usefull methods for navigation such as
// - goBack(), goForward(), push(), replace(), etc.
// The difference between the push and replace is that the push will add a new
// address to the browser history so we can click the back button and go back to
// where you were. But replace basically replaces the current address so you
// will not have history.

// Now, to implement programmatic navigation let's go to our productDetails page.
