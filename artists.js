import getRequest from './getRequest.js';

async function spotifyConnect(req, key){
    console.log(req.query);
    var url = new URL("https://api.spotify.com/v1/search"),
        params = req.query
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return await getRequest(url, key).then((data) => {
          return data;
    });

}

export default spotifyConnect
