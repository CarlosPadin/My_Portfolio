import { createSlice } from '@reduxjs/toolkit';

const themingSlice = createSlice({ 
    name: 'theming',
    initialState: { mode: true},    //true=light false=dark
    reducers: {
        toggleTheme (state) {
            state.mode = !state.mode;
        },
    }
});

export const themingActions = themingSlice.actions;

export default themingSlice;