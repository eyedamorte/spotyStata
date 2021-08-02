import express from "express";
import cors from "cors";
import spotifyConnect from "../spotifyConnect.js";
import artists from "./artists.js";
import releases from "../releases.js";
import path from "path";

const PORT = process.env.PORT || 6100;
const app = express();

const __dirname = path.resolve(path.dirname(""));

app.use(express.static(path.join(__dirname, "./frontend/dist")));

var Key = null;

let timerId = setTimeout(function tick() {
  spotifyConnect().then((key) => {
    Key = key;
    timerId = setTimeout(tick, Key ? Key.expires_in * 1000 : 2000);
  });
}, 2000);

app.use(express.json());
app.use(cors());

app.get("/api/artists", (req, res) => {
  artists(req, Key).then((data) => res.send(data));
});

app.get("/api/releases", (req, res) => {
  releases(req, Key).then((data) => res.send(data));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./frontend/dist/index.html"));
});

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log("server started on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
