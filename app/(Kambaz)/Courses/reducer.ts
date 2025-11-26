import { createSlice } from "@reduxjs/toolkit";
import { Course, courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

export interface CoursesType {
    courses: Course[];
};

const initialState = {
    courses: [] as Course[]
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }: { payload: Course }) => {
            const newCourse = { ...course, _id: uuidv4() };
            state.courses = [...state.courses, newCourse] as any;
        },

        deleteCourse: (state, { payload: courseId }: { payload: string }) => {
            state.courses = state.courses.filter((course: Course) => course._id != courseId);
        },

        updateCourse: (state, { payload: course }: { payload: Course }) => {
            state.courses = state.courses.map((c: Course) => (
                c._id === course._id ? course : c
            )) as Course[];
        },

        setCourses: (state, { payload: courses }: { payload: Course[] }) => {
            state.courses = courses;
        }
    }
});

export const { addNewCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;