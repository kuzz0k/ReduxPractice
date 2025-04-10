import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/IUser"
import { fetchUsers } from "./ActionCreator"

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false
          state.users = action.payload
          state.error = ""
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ?? 'Unknown error'
      })
  },
})

export default userSlice.reducer