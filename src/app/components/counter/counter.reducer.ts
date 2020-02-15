import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const counterFeatureKey = 'counter';

export interface CountState {
  count: number;
  username: string;
  password: string;
}

export const initialState: CountState = {
  count: 0,
  username: '',
  password: '',
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    let { count } = state;
    return {
      ...state,
      count: ++count,
      username: action.username,
      password: action.password
    };
  }),
  on(decrement, state => {
    let { count } = state;
    return { ...state, count: --count };
  }),
  on(reset, state => {
    return { ...state, count: 0 };
  })
);

export function counterReducer(state: CountState, action: Action) {
  return _counterReducer(state, action);
}
