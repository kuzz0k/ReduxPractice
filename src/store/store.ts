import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/UserSlice"
import { postApi } from "../services/PostService"

export const store = configureStore({
  reducer: {
    userReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
