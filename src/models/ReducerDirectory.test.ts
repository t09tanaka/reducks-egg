import { ReducerDirectory } from './ReducerDirectory'
import { REDUCERS_ROOT } from '../config'

test('define', () => {
  expect(ReducerDirectory.define('accountDetail', 'forms')).toEqual(
    `${REDUCERS_ROOT}/forms/account/detail`
  )
  expect(ReducerDirectory.define('accountEmail', 'forms')).toEqual(
    `${REDUCERS_ROOT}/forms/account/email`
  )
  expect(ReducerDirectory.define('account', 'domains')).toEqual(
    `${REDUCERS_ROOT}/domains/account`
  )
  expect(ReducerDirectory.define('account')).toEqual(`${REDUCERS_ROOT}/account`)
})

test('splitDirectory', () => {
  expect(
    ReducerDirectory.directoryList(`${REDUCERS_ROOT}/forms/account/detail`)
  ).toEqual([
    `${REDUCERS_ROOT}/forms`,
    `${REDUCERS_ROOT}/forms/account`,
    `${REDUCERS_ROOT}/forms/account/detail`,
  ])
  expect(
    ReducerDirectory.directoryList(`${REDUCERS_ROOT}/forms/account/email`)
  ).toEqual([
    `${REDUCERS_ROOT}/forms`,
    `${REDUCERS_ROOT}/forms/account`,
    `${REDUCERS_ROOT}/forms/account/email`,
  ])
  expect(
    ReducerDirectory.directoryList(`${REDUCERS_ROOT}/account/email`)
  ).toEqual([`${REDUCERS_ROOT}/account`, `${REDUCERS_ROOT}/account/email`])
})
