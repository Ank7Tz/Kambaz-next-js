import { configureStore } from "@reduxjs/toolkit";
import coursesReducer, { CoursesType } from "./Courses/reducer";
import modulesReducer, { ModulesType } from "./Courses/[cid]/Modules/reducer";

export interface AppRootState {
    coursesReducer: CoursesType;
    modulesReducer: ModulesType;
};

const store = configureStore({
    reducer: { coursesReducer, modulesReducer },
});

// export type RootState = ReturnType<typeof store.getState>;
export default store;