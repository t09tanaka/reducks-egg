import { REDUCERS_ROOT } from '../config'

export class ReducerDirectory {
  static define(reducerName: string, category?: string): string {
    const dirs = reducerName.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ')

    // category
    const categoryDir = category ? `/${category}` : ''

    // children
    let children = ''
    dirs.forEach((dir) => (children += '/' + dir.toLocaleLowerCase()))

    return `${REDUCERS_ROOT}${categoryDir}${children}`
  }
}
