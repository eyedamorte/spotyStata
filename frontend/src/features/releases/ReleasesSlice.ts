import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ReleasesStateType } from './ReleasesTypes'
import { instance } from "../../httpInstance"

const ReducerName = 'releases'


const InitialState: ReleasesStateType = {
  releases: [],
  isPending: false
}

export const getReleasesThunk = createAsyncThunk(`${ReducerName}/getReleases`, async ({ id }: { id: string }) => { 
  const response = await instance.get(
    `/releases`, {
      params: {
        id: id,
      }
    }
  )
  return response.data
})


export const releasesSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getReleasesThunk.pending, (state, action) => {
      state.isPending = true
    })
    builder.addCase(getReleasesThunk.fulfilled, (state, action) => {
      state.releases = action.payload
      state.isPending = false
    })
    builder.addCase(getReleasesThunk.rejected, (state, action) => {
      state.isPending = false
    })
  }
})

export default releasesSlice.reducer