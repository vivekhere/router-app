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

// The matching algorithm that the Route component uses checks to see if the current
// url starts with the path specified if so then the component passed will be rendered.
// That means if we go to /products/something the component will still be rendered.
// Since, the path for home is "/" and the path for other components starts with "/"
// the Home component will also be rendered when we go to other components.

// To solve this probem
// One solution is to add exact in the Home Route.
// The other solution is to use the Switch component.
// On the top import Switch component and wrap all the routes with a switch.
// The Switch will render the first child that matches the location.
// With switch we no longer need 'exact'.
// We should order our routes from the most specific one's to the most generic one's.
