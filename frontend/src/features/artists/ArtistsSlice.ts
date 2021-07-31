import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ArtistsStateType } from "./ArtistsTypes";
import { instance } from "../../httpInstance";

const ReducerName = "artists";

const InitialState: ArtistsStateType = {
  searchedArtists: [],
  isPending: false,
  selectedArtist: null,
};

export const getArtistsThunk = createAsyncThunk(
  `${ReducerName}/getArtists`,
  async ({ q }: { q: string }) => {
    const response = await instance.get(`/artists`, {
      params: {
        q: q,
        type: "artist",
      },
    });
    return response.data.artists.items;
  }
);

export const artistsSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,
  reducers: {
    selectArtist: (state, action) => {
      state.selectedArtist =
        state.searchedArtists.find((artist) => {
          return artist.id === action.payload;
        }) || null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArtistsThunk.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(getArtistsThunk.fulfilled, (state, action) => {
      state.searchedArtists = action.payload;
      state.selectedArtist = action.payload.reduce((acc: any, curr: any) =>
        acc.followers.total > curr.followers.total ? acc : curr
      );
      state.isPending = false;
    });
    builder.addCase(getArtistsThunk.rejected, (state, action) => {
      state.isPending = false;
    });
  },
});

export const { selectArtist } = artistsSlice.actions;

export default artistsSlice.reducer;
