import { createSlice } from "@reduxjs/toolkit";
import { Enrollment, enrollments } from "./Database";

export interface EnrollmentsType {
    enrollments: Enrollment[];
};

const initialState = {
    enrollments: enrollments
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        AddEnrollment: (state, { payload: enrollment }: { payload: Enrollment }) => {
            state.enrollments = [...state.enrollments, enrollment];
        },

        RemoveEnrollment: (state, { payload: {
            courseId,
            userId
        } }: { payload: {
            courseId: string;
            userId: string;
        } }) => {
            state.enrollments = state.enrollments.filter((e: Enrollment) => !(e.user === userId && e.course === courseId));
        }
    }
});

export const { AddEnrollment, RemoveEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;