import { GoPlus } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControls() {
    return (
        <div className="float-end">
            <span className="fs-5 border border-black rounded-pill p-2 me-2">40% of Total</span>
            <GoPlus className="fs-5"/>
            <IoEllipsisVertical className="fs-5" />
        </div>
    );
}