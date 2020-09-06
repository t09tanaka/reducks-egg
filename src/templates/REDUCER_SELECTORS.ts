export const REDUCER_SELECTORS_TEMPLATE = `import { {{reducerName}}State } from './types';

export const get{{reducerName}}State = (state: State): {{reducerName}}State =>
  state.{{stateName}};
`
