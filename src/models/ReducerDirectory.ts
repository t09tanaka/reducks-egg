import { REDUCERS_ROOT, REDUCERS_TEST_ROOT } from '../config'

export class ReducerDirectory {
  static define(
    reducerName: string,
    category?: string
  ): { reducerDirectory: string; reducerTestDirectory: string } {
    const dirs = reducerName.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ')

    // category
    const categoryDir = category ? `/${category}` : ''

    // children
    let children = ''
    dirs.forEach((dir) => (children += '/' + dir.toLocaleLowerCase()))

    return {
      reducerDirectory: `${REDUCERS_ROOT}${categoryDir}${children}`,
      reducerTestDirectory: `${REDUCERS_TEST_ROOT}${categoryDir}${children}`,
    }
  }
}
