import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filtersReducer from './features/filters/FiltersSlice'
import newsReducer from './features/news/NewsSlice'
import artistsReducer from './features/artists/ArtistsSlice'

const RootReducer = combineReducers({
    filters: filtersReducer,
    news: newsReducer,
    artists: artistsReducer
})

export type RootReducerType = ReturnType<typeof RootReducer>

const Store = configureStore({
  reducer: RootReducer
})

export default Store