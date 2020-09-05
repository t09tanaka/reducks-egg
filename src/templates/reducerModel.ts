export const REDUCER_MODEL_TEMPLATE = `import { ErrorProps, {{reducerName}}State, {{reducerName}}Payload } from './types';

export default class {{reducerName}} {
  static trim = (state: {{reducerName}}State): {{reducerName}}Payload => {
    let result: {{reducerName}}Payload = {};
    return result;
  };

  static validate = (
    state: {{reducerName}}State
  ): { noError: boolean; error: ErrorProps } => {
    const error: ErrorProps = {};
    let noError = true;

    return { noError, error };
  };
}
`
