import { ReducerTemplate } from './ReducerTemplate'

test('index', () => {
  expect(ReducerTemplate.index('accountDetail'))
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
  expect(ReducerTemplate.index('accountEmail'))
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
  expect(ReducerTemplate.index('account'))
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
  expect(ReducerTemplate.model('accountDetail'))
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
  expect(ReducerTemplate.model('accountEmail'))
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
  expect(ReducerTemplate.model('account'))
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
  expect(ReducerTemplate.selectors('accountDetail'))
    .toEqual(`import { AccountDetailState } from './types';

export const getAccountDetailState = (state: State): AccountDetailState =>
  state.accountDetail;
`)
  expect(ReducerTemplate.selectors('accountEmail'))
    .toEqual(`import { AccountEmailState } from './types';

export const getAccountEmailState = (state: State): AccountEmailState =>
  state.accountEmail;
`)
  expect(ReducerTemplate.selectors('account'))
    .toEqual(`import { AccountState } from './types';

export const getAccountState = (state: State): AccountState =>
  state.account;
`)
})

test('types', () => {
  expect(ReducerTemplate.types('accountDetail'))
    .toEqual(`export interface ErrorProps {
    yourValue?:boolean
}

export interface AccountDetailPayload {}

export interface AccountDetailState {
    yourValue:string
    error?:ErrorProps
}
`)

  expect(ReducerTemplate.types('accountEmail'))
    .toEqual(`export interface ErrorProps {
    yourValue?:boolean
}

export interface AccountEmailPayload {}

export interface AccountEmailState {
    yourValue:string
    error?:ErrorProps
}
`)

  expect(ReducerTemplate.types('account'))
    .toEqual(`export interface ErrorProps {
    yourValue?:boolean
}

export interface AccountPayload {}

export interface AccountState {
    yourValue:string
    error?:ErrorProps
}
`)
})
