import { configureStore } from "@reduxjs/toolkit";
import themingSlice from "./theming-slice";

const store = configureStore ({
    reducer: {
        theme: themingSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;