import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        path: '',
        title: '',
        isBeta: false,
    },
    reducers: {
        updatePagePath: (state, action) => {
            state.page.path = action.payload.path
        },
        updatePageTitle: (state, action) => {
            state.page.title = action.payload.title
        },
        updateBetaBadge: (state, action) => {
            state.page.isBeta = action.payload.isBeta
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            HYDRATE, (state, action) => {
                console.log('HYDRATE page update', action.payload);

                return {
                    ...state,
                    ...action.payload.path,
                    ...action.payload.title,
                    ...action.payload.isBeta,
                };
            },
        )
    },
})

export const setPageTitle = (title) => async (dispatch) => {
    dispatch(pageSlice.actions.updatePageTitle({ title }))
}

export const setBetaBadge = () => async (dispatch) => {
    dispatch(pageSlice.actions.updateBetaBadge())
}

export const {
    updatePagePath,
    updatePageTitle,
    updateBetaBadge,
} = pageSlice.actions

export default pageSlice.reducer