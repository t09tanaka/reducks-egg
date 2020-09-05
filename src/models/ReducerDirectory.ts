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

  static directoryList(directory: string): string[] {
    const dirs = directory
      .replace(REDUCERS_ROOT, '')
      .replace(/^\//, '')
      .split('/')

    const result: string[] = []
    dirs.forEach((dir, index) => {
      if (index === 0) {
        result.push(`${REDUCERS_ROOT}/${dir}`)
        return
      }

      const prev = result[index - 1]
      result.push(`${prev}/${dir}`)
    })
    return result
  }
}
