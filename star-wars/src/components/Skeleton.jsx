import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export const Skeleton = () => {
  return (
    <div className="backdrop">
      <Loader type="Puff" color="#00BFFF" height={50} width={50} />
    </div>
  );
};
export const SmallLoader = ({ height, width, text }) => (
  <div className="loader">
    <Loader
      type="Puff"
      color="#15ffc3"
      height={height ? height : 20}
      width={width ? width : 20}
    />
    {text ? text : ""}
  </div>
);
