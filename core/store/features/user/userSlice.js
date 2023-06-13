import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        updateUser: (state, action) => {
            return action.payload.user
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            HYDRATE, (state, action) => {
                console.log('HYDRATE user update', action.payload);

                return {
                    ...state,
                    ...action.payload.user,
                };
            },
        )
    },
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer