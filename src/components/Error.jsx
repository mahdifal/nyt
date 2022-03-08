const Error = ({ title }) => {
  return (
    <div className="alert alert-danger mt-2" role="alert">
      {title}
    </div>
  );
};

export default Error;
