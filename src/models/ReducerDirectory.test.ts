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
