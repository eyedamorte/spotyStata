import { createSelector } from "@reduxjs/toolkit";

import type { ReleasesStateType } from "./ReleasesTypes";
import type { RootReducerType } from "../../store";

export const getReleases = createSelector<
  RootReducerType,
  ReleasesStateType["releases"],
  ReleasesStateType["releases"]
>(
  (state) => state.releases.releases,
  (value) => value
);
