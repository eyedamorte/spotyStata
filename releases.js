import getRequest from './getRequest.js';

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
            
            await Promise.all(
                tracksInfo.items.map(async (trackInfo) => {
                    const url = new URL("https://api.spotify.com/v1/audio-features/"+ trackInfo.id )

                    const params = { id: trackInfo.id }

                    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

                    trackInfo.audioFeatures = await getRequest(url, key)
                })
            )

            return { ...ReleaseInfo, tracks: tracksInfo.items }
        })
    )

    return releasesWithTracksData
}

export default getReleases
