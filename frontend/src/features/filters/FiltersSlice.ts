import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { FiltersStateType } from './filtersTypes'

const InitialState: FiltersStateType = {
    search: '',
    isTopHeadlines: false
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: InitialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload
    },
    refreshSearch: (state) => {
      state.search = ''
    },
    refreshFilters: (state) => {
      state = InitialState
    },
    updateHeadlinesMethod: (state, action) => {
      state.isTopHeadlines = action.payload
    },
  },
  
})

export const { updateSearch, refreshSearch, refreshFilters, updateHeadlinesMethod } = filtersSlice.actions

export default filtersSlice.reducer