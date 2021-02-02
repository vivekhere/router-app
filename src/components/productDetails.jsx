import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // this.props.history.push("/products");
    // this will add a new path "/products" in the history
    // When we click the save button, we will back the /products page.
    // But when we click the back button in browser we will be back to the
    // previous page.

    this.props.history.replace("/products");
    // this method will replace the current url in the history with '/products'
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
