import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filtersReducer from './features/filters/FiltersSlice'
import newsReducer from './features/news/NewsSlice'
import artistsReducer from './features/artists/ArtistsSlice'
import releasesReducer from './features/releases/ReleasesSlice'


const RootReducer = combineReducers({
    filters: filtersReducer,
    news: newsReducer,
    artists: artistsReducer,
    releases: releasesReducer
})

export type RootReducerType = ReturnType<typeof RootReducer>

const Store = configureStore({
  reducer: RootReducer
})

export default Store