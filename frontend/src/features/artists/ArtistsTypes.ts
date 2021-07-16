export type ExternalUrls = {
    spotify: string
}

export type Followers = {
    href: string | null,
    total: number
}

export type Genres = string[]

export type ArtistsListType = ArtistType[]

export type ArtistType = {
    id: string,
    name: string,
    popularity: number,
    uri: string,
    type: string,
    external_urls: ExternalUrls,
    followers: Followers,
    genres: Genres,
    href: string
    images: ArtistImage[]
}

export type ArtistImage = {
    url: string
}

export type ArtistsStateType = {
    searchedArtists: ArtistType[],
    isPending: boolean,
    selectedArtist: ArtistType | null,
}
