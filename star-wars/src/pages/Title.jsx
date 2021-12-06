export const Title = ({ text, information }) => {
  return (
    <h2 className="title">
      {text}
      <span className="active">{information.name}</span>
    </h2>
  );
};
