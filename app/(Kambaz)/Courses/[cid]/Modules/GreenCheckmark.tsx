import { FaCheckCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="me-3 pe-3 position-relative">
      <FaCheckCircle
        style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5"
      />
    </span>
  );
}
