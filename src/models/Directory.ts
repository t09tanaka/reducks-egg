export class Directory {
  static directoryList(directory: string): string[] {
    const dirs = directory.replace(/^\//, '').split('/')

    const result: string[] = []
    dirs.forEach((dir, index) => {
      if (index === 0) {
        result.push(dir)
        return
      }

      const prev = result[index - 1]
      result.push(`${prev}/${dir}`)
    })
    return result
  }
}
