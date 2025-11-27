import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export default function ModulesControlsButtons({
  moduleId,
  editModule,
  deleteModule,
  isFaculty,
}: {
  moduleId: string;
  editModule: (moduleId: string) => void;
  deleteModule: (moduleId: string) => void;
  isFaculty: boolean;
}) {
  const dispatch = useDispatch();
  return (
    <div className="float-end">
      {isFaculty && (
        <FaPencil
          className="text-primary me-3"
          onClick={() => {
            editModule(moduleId);
          }}
        />
      )}
      {isFaculty && (
        <FaTrash
          className="text-danger me-3 mb-1"
          onClick={() => {
            deleteModule(moduleId);
          }}
        />
      )}
      <GreenCheckmark />
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
