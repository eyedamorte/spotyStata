export type ReleaseType = {
    name: string,
    id: string,
    images: Image,
    href: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    tracks: Track[]
}

export type Artist = {
    id: string,
    name: string
}

export type AudioFeatures = {
    danceability: number,
    energy: number,
    key: number,
    loudness: number,
    mode: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number,
    liveness: number,
    valence: number,
    tempo: number,
    type: string,
    id: string,
    uri: string,
    track_href: string,
    duration_ms: number,
    time_signature: number
}

export type Track = {
    artists: Artist[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    href: string,
    id: string,
    is_local: boolean,
    is_playable: boolean,
    name: string,
    track_number: number,
    type: string,
    uri: string,
    audioFeatures: AudioFeatures
}

export type Image = {
    url: string,
    height: number,
    width: number,
}

export type ReleasesStateType = {
    releases: ReleaseType[],
    isPending: boolean,
}
