import { combineReducers, configureStore } from '@reduxjs/toolkit'
import artistsReducer from './features/artists/ArtistsSlice'
import releasesReducer from './features/releases/ReleasesSlice'


const RootReducer = combineReducers({
    artists: artistsReducer,
    releases: releasesReducer
})

export type RootReducerType = ReturnType<typeof RootReducer>

const Store = configureStore({
  reducer: RootReducer
})

export default Store