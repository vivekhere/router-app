import React from "react";

const Posts = ({ match }) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;

// match has been destructured from the props object
// match.params.year will get the year property from the url
// match.params.month will get the month property from the url
