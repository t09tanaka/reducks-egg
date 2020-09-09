import { Directory } from './Directory'
import { REDUCERS_ROOT, COMPONENTS_ROOT } from '../config'

test('splitDirectory', () => {
  expect(
    Directory.directoryList(`/src/reducers/forms/account/detail`)
  ).toEqual([
    `src`,
    `src/reducers`,
    `src/reducers/forms`,
    `src/reducers/forms/account`,
    `src/reducers/forms/account/detail`,
  ])
  expect(Directory.directoryList(`/src/reducers/forms/account/email`)).toEqual([
    `src`,
    `src/reducers`,
    `src/reducers/forms`,
    `src/reducers/forms/account`,
    `src/reducers/forms/account/email`,
  ])
  expect(Directory.directoryList(`/src/reducers/account/email`)).toEqual([
    `src`,
    `src/reducers`,
    `src/reducers/account`,
    `src/reducers/account/email`,
  ])

  expect(Directory.directoryList(`/src/components/account/email`)).toEqual([
    `src`,
    `src/components`,
    `src/components/account`,
    `src/components/account/email`,
  ])
})
