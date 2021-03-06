import getRequest from './getRequest.js';


// here while the shit code, if it's not lazy, I'll rewrite it in typescript
async function getReleases(req, key){
    const url = new URL("https://api.spotify.com/v1/artists/" + req.query.id + "/albums")
    
    const params = req.query

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
 
    const releases = await getRequest(url, key)

    const releasesWithTracksData = await Promise.all(
        releases.items.map(async (ReleaseInfo) => {
            const url = new URL("https://api.spotify.com/v1/albums/" + ReleaseInfo.id + "/tracks")

            const params = { id: ReleaseInfo.id }

            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

            const tracksInfo = await getRequest(url, key)
            let tracksds = tracksInfo.items.map(track => track.id);
            
            const audioFeaturesUrl = new URL("https://api.spotify.com/v1/audio-features")

            const audioFeaturesParams = { ids: tracksds.join() }

            Object.keys(audioFeaturesParams).forEach(key => audioFeaturesUrl.searchParams.append(key, audioFeaturesParams[key]))

            const audioFeatures = await getRequest(audioFeaturesUrl, key)
            if(tracksInfo.items.length)
                tracksInfo.items.map((track)=>{
                    if(audioFeatures.audio_features.length)
                        track.audioFeatures = audioFeatures.audio_features.find((feature)=>{return (feature?.id === track?.id) | null })
                })

            return { ...ReleaseInfo, tracks: tracksInfo.items }
        })
    )

    return releasesWithTracksData
}

export default getReleases
