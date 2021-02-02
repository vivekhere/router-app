import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;

// import query-string
// use the parse method and pass location.search as an argument
// this will return an object.
// The values generated after parsing the query string are always string. So if
// we want to work with numbers or booleans we need to parse them accordingly.
