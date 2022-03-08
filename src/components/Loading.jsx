import Icon from "./Icon";

const Loading = () => {
  return (
    <div className="h-100 w-100">
      <div className="d-flex justify-content-center">
        <Icon name="spin1" spin size="4" />
      </div>
    </div>
  );
};

export default Loading;
