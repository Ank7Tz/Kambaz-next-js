import { createSlice } from "@reduxjs/toolkit"
import { User } from "../Database";

export interface AccountType {
    currentUser: User;
}

const initialState = {
    currentUser: null
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { setCurrentUser } = accountSlice.actions;

export default accountSlice.reducer;