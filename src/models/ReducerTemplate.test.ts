import { ReducerTemplate } from './ReducerTemplate'

test('index', () => {
  expect(new ReducerTemplate('accountDetail').index)
    .toEqual(`import { createSlice } from '@reduxjs/toolkit';
import { initialState, reducers, extraReducers } from './reducers';

const slice = createSlice({
  name: 'accountDetail',
  initialState,
  reducers,
  extraReducers,
});

export const AccountDetailReducer = slice.actions;
export default slice.reducer;
`)
  expect(new ReducerTemplate('accountEmail').index)
    .toEqual(`import { createSlice } from '@reduxjs/toolkit';
import { initialState, reducers, extraReducers } from './reducers';

const slice = createSlice({
  name: 'accountEmail',
  initialState,
  reducers,
  extraReducers,
});

export const AccountEmailReducer = slice.actions;
export default slice.reducer;
`)
  expect(new ReducerTemplate('account').index)
    .toEqual(`import { createSlice } from '@reduxjs/toolkit';
import { initialState, reducers, extraReducers } from './reducers';

const slice = createSlice({
  name: 'account',
  initialState,
  reducers,
  extraReducers,
});

export const AccountReducer = slice.actions;
export default slice.reducer;
`)
})

test('model', () => {
  expect(new ReducerTemplate('accountDetail').model)
    .toEqual(`import { ErrorProps, AccountDetailState, AccountDetailPayload } from './types';

export default class AccountDetail {
  static trim = (state: AccountDetailState): AccountDetailPayload => {
    let result: AccountDetailPayload = {};
    return result;
  };

  static validate = (
    state: AccountDetailState
  ): { noError: boolean; error: ErrorProps } => {
    const error: ErrorProps = {};
    let noError = true;

    return { noError, error };
  };
}
`)
  expect(new ReducerTemplate('accountEmail').model)
    .toEqual(`import { ErrorProps, AccountEmailState, AccountEmailPayload } from './types';

export default class AccountEmail {
  static trim = (state: AccountEmailState): AccountEmailPayload => {
    let result: AccountEmailPayload = {};
    return result;
  };

  static validate = (
    state: AccountEmailState
  ): { noError: boolean; error: ErrorProps } => {
    const error: ErrorProps = {};
    let noError = true;

    return { noError, error };
  };
}
`)
  expect(new ReducerTemplate('account').model)
    .toEqual(`import { ErrorProps, AccountState, AccountPayload } from './types';

export default class Account {
  static trim = (state: AccountState): AccountPayload => {
    let result: AccountPayload = {};
    return result;
  };

  static validate = (
    state: AccountState
  ): { noError: boolean; error: ErrorProps } => {
    const error: ErrorProps = {};
    let noError = true;

    return { noError, error };
  };
}
`)
})

test('selectors', () => {
  expect(new ReducerTemplate('accountDetail').selectors)
    .toEqual(`import { AccountDetailState } from './types';

export const getAccountDetailState = (state: State): AccountDetailState =>
  state.accountDetail;
`)
  expect(new ReducerTemplate('accountEmail').selectors)
    .toEqual(`import { AccountEmailState } from './types';

export const getAccountEmailState = (state: State): AccountEmailState =>
  state.accountEmail;
`)
  expect(new ReducerTemplate('account').selectors)
    .toEqual(`import { AccountState } from './types';

export const getAccountState = (state: State): AccountState =>
  state.account;
`)
})

test('reducers', () => {
  expect(new ReducerTemplate('accountDetail').reducers)
    .toEqual(`import { AccountDetailState, ErrorProps } from './types';
import { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const initialState: AccountDetailState = {
  yourValue: ''
};

const initialize = (
  _: AccountDetailState,
  action: PayloadAction<AccountDetailState>
) => ({ ...action.payload });

const updateYourValue = (
  state: AccountDetailState,
  action: PayloadAction<string>
) => {
  const error = Object.assign({}, state.error ?? {});
  delete error?.yourValue;

  const result: AccountDetailState = {
    ...state,
    error,
    yourValue: action.payload,
  };
  return result;
};

const updateError = (
  state: AccountDetailState,
  action: PayloadAction<ErrorProps>
) => {
  const result: AccountDetailState = {
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
  builder: ActionReducerMapBuilder<AccountDetailState>
) => {};
`)
  expect(new ReducerTemplate('accountEmail').reducers)
    .toEqual(`import { AccountEmailState, ErrorProps } from './types';
import { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const initialState: AccountEmailState = {
  yourValue: ''
};

const initialize = (
  _: AccountEmailState,
  action: PayloadAction<AccountEmailState>
) => ({ ...action.payload });

const updateYourValue = (
  state: AccountEmailState,
  action: PayloadAction<string>
) => {
  const error = Object.assign({}, state.error ?? {});
  delete error?.yourValue;

  const result: AccountEmailState = {
    ...state,
    error,
    yourValue: action.payload,
  };
  return result;
};

const updateError = (
  state: AccountEmailState,
  action: PayloadAction<ErrorProps>
) => {
  const result: AccountEmailState = {
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
  builder: ActionReducerMapBuilder<AccountEmailState>
) => {};
`)
})

test('types', () => {
  expect(new ReducerTemplate('accountDetail').types)
    .toEqual(`export interface ErrorProps {
    yourValue?:boolean
}

export interface AccountDetailPayload {}

export interface AccountDetailState {
    yourValue:string
    error?:ErrorProps
}
`)

  expect(new ReducerTemplate('accountEmail').types)
    .toEqual(`export interface ErrorProps {
    yourValue?:boolean
}

export interface AccountEmailPayload {}

export interface AccountEmailState {
    yourValue:string
    error?:ErrorProps
}
`)

  expect(new ReducerTemplate('account').types)
    .toEqual(`export interface ErrorProps {
    yourValue?:boolean
}

export interface AccountPayload {}

export interface AccountState {
    yourValue:string
    error?:ErrorProps
}
`)

  expect(new ReducerTemplate('accountDetail', 'forms').testModel)
    .toEqual(`import AccountDetail from '~/src/reducers/forms/account/detail/models.ts';

test('trim', () => {
  expect(new AccountDetail().trim({yourValue:''})).toBe({});
});

test('validate', () => {
  expect(new AccountDetail().validate({yourValue:''}).noError).toBe(true);
});
`)
})
