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

// Redirects

// If we go to any invalid route like '/xyz', the home component will be rendered.
// because the path '/xyz' will match with the path '/'.
// But this is not the desired behaviour we want to redirect the user to a
// not found page.

// Apply the exact attribute to display the home page only when the user is at
// the root of the website.
// Now the Home component will not be rendered.

// But we want to redirect the user to a different url like '/not-found'
// import Redirect component from the react-router-dom
// With this component we can redirect the user to a different url.
// At the end of the last Route add <Redirect to="/not-found" />
// If we get to this point that means none of the Routes matched. The user will be
// redirected to "/not-found" and to display a message to the user at this url,
// we need to register a new route with this path and a component.
// <Route path="/not-found" component={ NotFound} />

// Sometimes we want to move the resources in our url from one url to another route
// we can use the Redirect component to achieve this.
// eg. <Redirect from="/messages" to="/posts" /> if the use goes to '/messages' it
// will automatically redirect to '/posts'.
