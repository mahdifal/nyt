const Error = ({ title }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {title}
    </div>
  );
};

export default Error;
