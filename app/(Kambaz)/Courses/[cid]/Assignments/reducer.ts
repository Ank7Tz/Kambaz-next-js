import { createSlice } from "@reduxjs/toolkit";
import { Assignment, assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

export interface AssignemntsType {
    assignments: Assignment[];
}

const initialState = {
    assignments: assignments
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        createAssignment: (state, { payload: assignment }: { payload: Assignment }) => {
            const newAssignment = { ...assignment, _id: uuidv4() };
            state.assignments = [...state.assignments, newAssignment];
        },

        updateAssignment: (state, { payload: assignment }: { payload: Assignment }) => {
            state.assignments = state.assignments.map((assign: Assignment) => (
                assign._id === assignment._id ? assignment : assign
            ));
        },

        removeAssignment: (state, { payload: assignmentId }: { payload: string }) => {
            state.assignments = state.assignments.filter((assign: Assignment) => assign._id != assignmentId);
        }
    }
});

export const { createAssignment, updateAssignment, removeAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;