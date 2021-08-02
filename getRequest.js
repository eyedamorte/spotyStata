import fetch from "node-fetch";

export default async function getRequest(url = "", key) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: key.token_type + " " + key.access_token,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return await response.json();
}
