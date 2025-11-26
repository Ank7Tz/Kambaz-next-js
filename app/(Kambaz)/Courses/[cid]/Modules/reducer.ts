import { v4 as uuidv4 } from "uuid";
import { Module, modules } from "../../../Database";
import { createSlice } from "@reduxjs/toolkit";

export interface ModulesType {
    modules: Module[];
};

const initialState = {
    modules: [] as Module[],
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, { payload: modules }: {payload: Module[]}) => {
            state.modules = modules;
        },

        addModule: (state, { payload: module }: { payload: Module }) => {
            const newModule: Module = {
                _id: uuidv4(),
                lessons: [],
                name: module.name,
                course: module.course,
            };
            state.modules = [...state.modules, newModule];
        },

        deleteModule: (state, { payload: moduleId }: { payload: string }) => {
            state.modules = state.modules.filter((module) => module._id !== moduleId);
        },

        updateModule: (state, { payload: module }: { payload: Module }) => {
            state.modules = state.modules.map((m: Module) => m._id === module._id ? module : m);
        },

        editModule: (state, { payload: moduleId }: { payload: string }) => {
            state.modules = state.modules.map((m: Module) => m._id === moduleId ? { ...m, editing: true } : m);
        }
    }
});

export const { addModule, deleteModule, updateModule, editModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;