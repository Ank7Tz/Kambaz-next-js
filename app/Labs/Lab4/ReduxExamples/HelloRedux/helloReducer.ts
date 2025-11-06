import { createSlice } from "@reduxjs/toolkit";

export interface HelloState {
    message: string;
}

const initialState = {
    message: "Hello World",
};
const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},
});
export default helloSlice.reducer;