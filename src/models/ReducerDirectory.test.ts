import { ReducerDirectory } from './ReducerDirectory'
import { REDUCERS_ROOT } from '../config'

test('define', () => {
  expect(ReducerDirectory.define('accountDetail', 'forms')).toEqual({
    reducerDirectory: `/src/reducers/forms/account/detail`,
    reducerTestDirectory: `/test/reducers/forms/account/detail`,
  })
  expect(ReducerDirectory.define('accountEmail', 'forms')).toEqual({
    reducerDirectory: `/src/reducers/forms/account/email`,
    reducerTestDirectory: `/test/reducers/forms/account/email`,
  })
  expect(ReducerDirectory.define('account', 'domains')).toEqual({
    reducerDirectory: `/src/reducers/domains/account`,
    reducerTestDirectory: `/test/reducers/domains/account`,
  })
  expect(ReducerDirectory.define('account')).toEqual({
    reducerDirectory: `/src/reducers/account`,
    reducerTestDirectory: `/test/reducers/account`,
  })
})
