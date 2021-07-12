import fetch from 'node-fetch';
import keys from './keys.js'

async function spotifyConnect(){
    var myHeaders = new fetch.Headers();
    const my_clientID = Buffer.from(keys.user_key + ':' + keys.secret_key).toString('base64')

    myHeaders.append("Authorization", 'Basic ' + my_clientID)
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    var urlencoded = new URLSearchParams()
    urlencoded.append("grant_type", "client_credentials")

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }
        
    let res = await fetch("https://accounts.spotify.com/api/token", requestOptions).then(r => r.json())
    return res;
}

export default spotifyConnect
