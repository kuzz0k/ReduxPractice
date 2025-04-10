import axios from "axios"
import { IUser } from "../../types/IUser"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: string }>(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('Something went wrong')
    }
  }
)

