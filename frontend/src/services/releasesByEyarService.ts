import { ReleaseType } from "../features/releases/ReleasesTypes";
import type { SeriesOptionsType } from "highcharts";

const typesOfReleases = ["ALBUM", "FEATURE", "SINGLE"];

export function getReleasesYears(releases: ReleaseType[]): string[] {
  // return start and end of releases
  const years = releases.map((release) => {
    return new Date(release.release_date).getFullYear();
  });
  let arrayOfYears: string[] = [];
  for (let i = Math.min(...years); i < Math.max(...years); i++) {
    arrayOfYears.push(i.toString());
  }
  return arrayOfYears;
}

export function getReleasesByYear(
  releases: ReleaseType[]
): SeriesOptionsType[] {
  console.log(getReleasesYears(releases));

  return typesOfReleases.map((type) => {
    return {
      type: "column",
      name: type,
      data: getReleasesYears(releases).map((year) => {
        switch (type) {
          case "ALBUM":
            return releases.filter((release) => {
              return (
                new Date(release.release_date).getFullYear() ===
                  parseInt(year) && release.album_type == "album"
              );
            }).length || null;
          case "FEATURE":
            return releases.filter((release) => {
              return (
                new Date(release.release_date).getFullYear() ===
                  parseInt(year) &&
                release.album_type == "single" &&
                release.artists.length > 1
              );
            }).length || null;
          case "SINGLE":
            return releases.filter((release) => {
              return (
                new Date(release.release_date).getFullYear() ===
                  parseInt(year) &&
                release.album_type == "single" &&
                release.artists.length === 1
              );
            }).length || null;
          default:
            return year;
        }
      }),
    };
  });
}
