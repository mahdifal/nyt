import { Link } from "react-router-dom";

const ResultsList = ({ docs }) => {
  return (
    <div>
      <h1>ResultsList</h1>
      {docs?.map((item) => (
        <div key={item._id}>
          <h3>
            <Link to={`${item._id}`}>{item.abstract}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
