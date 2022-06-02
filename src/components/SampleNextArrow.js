import { BsArrowRight } from "react-icons/bs";
import "../App.css";

export const SampleNextArrow = ({ onClick }) => (
  <div className="arrow arrow-right" onClick={onClick}>
    <BsArrowRight />
  </div>
);
