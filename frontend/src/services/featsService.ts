import { ReleaseType } from "../features/releases/ReleasesTypes";

const getCountIds = (target: string[]) => {
  const result: { [artist: string]: number } = {};

  target.forEach((item) =>
    result[item] ? result[item]++ : (result[item] = 1)
  );

  return Object.keys(result).map((item) => {
    return [item, result[item]];
  });
};

export default function featuresService(
  releases: ReleaseType[],
  artistId: string
) {
  let artists = Object.values(
    releases
      .map((release) => {
        return release.tracks.map((track) =>
          track.artists.map((artist) => {
            return artist.name;
          })
        );
      })
      .flat(2)
      .filter((artist) => {
        return artist !== artistId;
      })
  );

  return getCountIds(artists);
}
