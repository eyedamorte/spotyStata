import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ArtistType, ArtistsListType, ArtistsStateType } from './ArtistsTypes'
import axios from "axios"

const ReducerName = 'artists'


const InitialState: ArtistsStateType = {
  selectedArtist: null,
  searchedArtists: [],
  isPending: false,
  bestResult: null
}

export const getArtistsThunk = createAsyncThunk(`${ReducerName}/getArtists`, async ({ q }: { q: string }) => { 
  const response = await axios.get(
    `/api/artists`, {
      params: {
        q: q,
        type: 'artist'
      }
    }
  )
  return response.data.artists
  .items
})


export const artistsSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArtistsThunk.pending, (state, action) => {
      state.isPending = true
    })
    builder.addCase(getArtistsThunk.fulfilled, (state, action) => {
      state.searchedArtists = action.payload
      state.bestResult = action.payload[0]
      state.isPending = false
    })
    builder.addCase(getArtistsThunk.rejected, (state, action) => {
      state.isPending = false
    })
  }
})


export default artistsSlice.reducer