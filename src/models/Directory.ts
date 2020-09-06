export class Directory {
  static directoryList(directory: string, rootDir: string): string[] {
    const dirs = directory.replace(rootDir, '').replace(/^\//, '').split('/')

    const result: string[] = []
    dirs.forEach((dir, index) => {
      if (index === 0) {
        result.push(`${rootDir}/${dir}`)
        return
      }

      const prev = result[index - 1]
      result.push(`${prev}/${dir}`)
    })
    return result
  }
}
