import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CountState, counterReducer, counterFeatureKey } from '../components/counter/counter.reducer';

export interface State {
  [counterFeatureKey]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [counterFeatureKey]: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
