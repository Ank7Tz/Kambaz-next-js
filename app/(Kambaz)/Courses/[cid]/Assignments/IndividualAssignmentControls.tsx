import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function IndividualAssignmentControls() {
  return (
    <div className="pt-2">
      <GreenCheckmark />
      <IoEllipsisVertical className="ms-4 fs-4" />
    </div>
  );
}
