const Icon = ({ name = "search", size = 1, color = "#000", spin }) => {
  const style = {
    fontSize: `${size}rem`,
    color: `${color}`,
  };

  return (
    <>
      {spin ? (
        <span style={style} className={`icon-${name} animate-spin`}></span>
      ) : (
        <span style={style} className={`icon-${name}`}></span>
      )}
    </>
  );
};

export default Icon;
