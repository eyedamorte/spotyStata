import { ReleaseType } from "../features/releases/ReleasesTypes";
import type { SeriesOptionsType } from "highcharts";

const typesOfReleases = ["ALBUM", "FEATURE", "SINGLE"];

export function getReleasesYears(releases: ReleaseType[]): string[] {
  // return start and end of releases
  const years = releases.map((release) => {
    return new Date(release.release_date).getFullYear();
  });
  return Array.apply(null, { length: Math.max(...years) + 1 })
    .map(String.call, String)
    .slice(Math.min(...years));
}

export function getReleasesByYear(
  releases: ReleaseType[],
): SeriesOptionsType[] {
    console.log(getReleasesYears(releases));
    
  return typesOfReleases.map((type) => {
    return {
      type: "column",
      name: type,
      data: getReleasesYears(releases).map((year) => {
        switch(type){
            case "ALBUM":             
                return releases.filter((release)=>{return new Date(release.release_date).getFullYear() === parseInt(year) && release.album_type == 'album'}).length
            case "FEATURE": 
                return releases.filter((release)=>{return new Date(release.release_date).getFullYear() === parseInt(year) && (release.album_type == 'single' && release.artists.length > 1)}).length
            case "SINGLE": 
                return releases.filter((release)=>{return new Date(release.release_date).getFullYear() === parseInt(year) && (release.album_type == 'single' && release.artists.length === 1)}).length
            default: 
                return year
        }
      })
    };
  });
}
