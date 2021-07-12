import { createSelector } from '@reduxjs/toolkit'

import type { ArtistsStateType } from './ArtistsTypes';
import type { RootReducerType } from '../../store'

export const getArtistsList = createSelector<RootReducerType, ArtistsStateType['searchedArtists'], ArtistsStateType['searchedArtists']>(
    state => state.artists.searchedArtists,
    value => value
)

export const getBestArtist = createSelector<RootReducerType, ArtistsStateType['bestResult'], ArtistsStateType['bestResult']>(
    state => state.artists.bestResult,
    value => value
)

export const getArtistsIsPending = createSelector<RootReducerType, ArtistsStateType['isPending'], ArtistsStateType['isPending']>(
    state => state.artists.isPending,
    value => value
)

