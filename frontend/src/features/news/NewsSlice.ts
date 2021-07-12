import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import settings from '../../settings'

import type { NewsStateType } from './newsTypes'

const ReducerName = 'news'
const headlineMethods = ['top-headlines', 'everything'];

const InitialState: NewsStateType = {
  news: [],
  isPending: false,
}

export const getNewsThunk = createAsyncThunk(`${ReducerName}/getNews`, async ({ params, isTopHeadlines }: { params: any, isTopHeadlines: boolean }) => {
  console.log(isTopHeadlines);
  
  const response = await axios.get(
    `https://newsapi.org/v2/${isTopHeadlines ? headlineMethods[0] : headlineMethods[1]}`, {
      params: {
        ...params, sortBy: 'publishedAt',
        apiKey: settings.apiKey
      }
    }
  )
  return response.data.articles
})


export const newsSlice = createSlice({
  name: ReducerName,
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNewsThunk.pending, (state, action) => {
      state.isPending = true
    })
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.news = action.payload.map((item:any, index: number) => {return {...item, id: index}})
      state.isPending = false
    })
    builder.addCase(getNewsThunk.rejected, (state, action) => {
      state.isPending = false
    })
  }
})


export default newsSlice.reducer