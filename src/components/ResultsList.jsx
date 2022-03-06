import React from "react";

const ResultsList = ({ docs }) => {
  return (
    <div>
      <h1>ResultsList</h1>
      {docs?.map((item) => (
        <div key={item._id}>{item.abstract}</div>
      ))}
    </div>
  );
};

export default ResultsList;
