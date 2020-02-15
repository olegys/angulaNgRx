import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountState, counterFeatureKey } from "./counter.reducer";

export const selectCounterFeature = createFeatureSelector<CountState>(counterFeatureKey);

export const selectCount = createSelector(
  selectCounterFeature,
  (state): number => state.count,
);
