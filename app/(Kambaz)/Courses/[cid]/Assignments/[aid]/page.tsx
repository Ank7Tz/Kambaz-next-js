"use client";
import { useSelector } from "react-redux";
import AssignmentEditor from "./Editor";
import { AppRootState } from "@/app/(Kambaz)/store";
import AssignmentDisplay from "./Display";

export default function AssignmentsPage() {
    const {currentUser} = useSelector((state: AppRootState) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY";
    return (
        <div id="wd-assignment" className="">
            {isFaculty ? <AssignmentEditor /> : <AssignmentDisplay />}
        </div>
    )
}