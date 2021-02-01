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
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
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

// We know that the Route component passes 3 additional props to the component.
// If you want to pass additional props to the component instead of the
// component attribute we should use the render attribute.
// We set this to an arrow function and return the Products component in which
// we can pass any additional props like sortBy="newest".
// But you won't have access to those 3 props.
// To fix this problem we need to pass props as an argument and React will
// automatically inject those props in the Products component.
// Now, we need to pass all those props in addition to the customs props
// using a special syntax in jsx { ...props }.
// With this syntax all the properties of the props object will be listed just
// like the custom props.
