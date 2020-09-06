export const REDUCER_REDUCERS_TEMPLATE = `import { {{reducerName}}State, ErrorProps } from './types';
import { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const initialState: {{reducerName}}State = {
  yourValue: ''
};

const initialize = (
  _: {{reducerName}}State,
  action: PayloadAction<{{reducerName}}State>
) => ({ ...action.payload });

const updateYourValue = (
  state: {{reducerName}}State,
  action: PayloadAction<string>
) => {
  const error = Object.assign({}, state.error ?? {});
  delete error?.yourValue;

  const result: {{reducerName}}State = {
    ...state,
    error,
    yourValue: action.payload,
  };
  return result;
};

const updateError = (
  state: {{reducerName}}State,
  action: PayloadAction<ErrorProps>
) => {
  const result: {{reducerName}}State = {
    ...state,
    error: action.payload,
  };
  return result;
};

export const reducers = {
  initialize,
  updateYourValue,
  updateError,
};

export const extraReducers = (
  builder: ActionReducerMapBuilder<{{reducerName}}State>
) => {};
`
