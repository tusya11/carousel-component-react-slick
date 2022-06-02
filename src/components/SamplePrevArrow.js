import { BsArrowLeft } from "react-icons/bs";
import "../App.css";

export const SamplePrevArrow = ({ onClick }) => (
  <div className="arrow arrow-left" onClick={onClick}>
    <BsArrowLeft />
  </div>
);
