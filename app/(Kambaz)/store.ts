import { configureStore } from "@reduxjs/toolkit";
import coursesReducer, { CoursesType } from "./Courses/reducer";
import modulesReducer, { ModulesType } from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import { AccountType } from "./Account/reducer";
import assignmentReducer, { AssignemntsType } from "./Courses/[cid]/Assignments/reducer";
import enrollmentReducer, { EnrollmentsType } from "./enrollmentsReducer";

export interface AppRootState {
    coursesReducer: CoursesType;
    modulesReducer: ModulesType;
    accountReducer: AccountType;
    assignmentReducer: AssignemntsType;
    enrollmentReducer: EnrollmentsType;
};

const store = configureStore({
    reducer: {
        coursesReducer,
        modulesReducer,
        accountReducer,
        assignmentReducer,
        enrollmentReducer,
    },
});

// export type RootState = ReturnType<typeof store.getState>;
export default store;