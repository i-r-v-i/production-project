import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema, Profile } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,

};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {

    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
