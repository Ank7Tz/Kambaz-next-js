import { configureStore } from "@reduxjs/toolkit";
import helloReducer, { HelloState } from "./ReduxExamples/HelloRedux/helloReducer";
import counterReducer, { CounterState } from "./ReduxExamples/CounterRedux/counterReducer";
import addReducer, { AddState } from "./ReduxExamples/AddRedux/addReducer";
import todoReducer, { TodoState } from "./ReduxExamples/todos/todosReducer";

export interface RootState {
    helloReducer: HelloState,
    counterReducer: CounterState,
    addReducer: AddState,
    todoReducer: TodoState,
}

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todoReducer,
    }
});

export default store;