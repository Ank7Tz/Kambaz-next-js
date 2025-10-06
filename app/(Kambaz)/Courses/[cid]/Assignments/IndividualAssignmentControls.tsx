import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

export default function IndividualAssignmentControls() {
  return (
    <div className="pt-2">
      <span className="me-3 pe-2 position-relative">
        <FaCheckCircle
          style={{ top: "2px" }}
          className="text-success me-1 position-absolute fs-5"
        />
      </span>
      <IoEllipsisVertical className="ms-3 fs-4 position-relative float-right" />
    </div>
  );
}
