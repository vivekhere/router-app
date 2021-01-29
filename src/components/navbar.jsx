import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;

// Even though we have implemented routing, we still have few problems
// When the App component loads, a file named bundle.js is downloaded which
// contains all the js code of our component tree.
// Whenever we click on any of the links in the navigation bar new http requests
// are made on the server and the bundle.js file is downloaded again.
// We don't want to download the bundle.js file everytime we click on a link.

// Example Gmail :
// Gmail is super fast. As you click on an email you quickly see the contents
// of your email. The entire page is not reloaded.
// We refer applications build this way as Single Page Applications or SPAs.

// In single page applications when the user navigates from one page to another
// instead of reloading the entire page with all it's assets, we should only
// update what we have in the content area.

// So inorder to fix this issue of full reload,
// on the top import Link from react-router-dom
// and replace the anchor "a" with "Link" and replace the "href" with "to".
// Now when we click on the links we are not going to see new requests because
// the content of the components are in bundle.js. All our components are part
// of the bundle that are downloaded ahead of time when our applications loads.
// So there is no need to redownload this component whenever the user navigates.
