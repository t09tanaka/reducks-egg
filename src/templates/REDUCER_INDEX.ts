export const REDUCER_INDEX_TEMPLATE = `import { createSlice } from '@reduxjs/toolkit';
import { initialState, reducers, extraReducers } from './reducers';

const slice = createSlice({
  name: '{{reducerName}}',
  initialState,
  reducers,
  extraReducers,
});

export const {{actionName}}Reducer = slice.actions;
export default slice.reducer;
`
