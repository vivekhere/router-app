import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
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

// Inorder to render the id of the product in the heading we will use the
// match prop like - {this.props.match.params.id}
// If we have mulitiple parameters the params object will have those properties
// named accordingly.

// But as we click on any of the product we have a complete page reload.
// This is because we are using the anchor tag in the products component.
// Inorder to prevent full page reload replace the "a" tag with the "Link" tag
// imported from the "react-router-dom". Also replace "href" with "to".
