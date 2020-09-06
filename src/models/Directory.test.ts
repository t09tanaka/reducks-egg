import { Directory } from './Directory'
import { REDUCERS_ROOT, COMPONENTS_ROOT } from '../config'

test('splitDirectory', () => {
  expect(
    Directory.directoryList(
      `${REDUCERS_ROOT}/forms/account/detail`,
      REDUCERS_ROOT
    )
  ).toEqual([
    `${REDUCERS_ROOT}/forms`,
    `${REDUCERS_ROOT}/forms/account`,
    `${REDUCERS_ROOT}/forms/account/detail`,
  ])
  expect(
    Directory.directoryList(
      `${REDUCERS_ROOT}/forms/account/email`,
      REDUCERS_ROOT
    )
  ).toEqual([
    `${REDUCERS_ROOT}/forms`,
    `${REDUCERS_ROOT}/forms/account`,
    `${REDUCERS_ROOT}/forms/account/email`,
  ])
  expect(
    Directory.directoryList(`${REDUCERS_ROOT}/account/email`, REDUCERS_ROOT)
  ).toEqual([`${REDUCERS_ROOT}/account`, `${REDUCERS_ROOT}/account/email`])

  expect(
    Directory.directoryList(`${COMPONENTS_ROOT}/account/email`, COMPONENTS_ROOT)
  ).toEqual([`${COMPONENTS_ROOT}/account`, `${COMPONENTS_ROOT}/account/email`])
})
