import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { REDUCERS_ROOT, REDUCERS_TEST_ROOT } from '../config'
import { ReducerDirectory } from '../models/ReducerDirectory'
import { ReducerTemplate } from '../models/ReducerTemplate'
import { LogMessage } from '../models/LogMessage'
import { Directory } from '../models/Directory'
const { log } = console

export const spawn = (reducerName: string, category?: string) => {
  const message = new LogMessage({ reducerName, category })
  if (!existsSync(`${path.resolve()}${REDUCERS_ROOT}`)) {
    log(message.errorNoRootReducer)
    return
  }

  if (!Boolean(reducerName)) {
    log(message.errorNoReducerName)
    return
  }

  const { reducerDirectory, reducerTestDirectory } = ReducerDirectory.define(
    reducerName,
    category
  )

  if (existsSync(`${path.resolve()}${reducerDirectory}`)) {
    log(message.errorHasReducer)
    return
  }

  // for reducer
  Directory.directoryList(reducerDirectory, REDUCERS_ROOT).forEach((dir) => {
    const directory = `${path.resolve()}${dir}`
    if (existsSync(directory)) {
      return
    }

    mkdirSync(directory)
  })

  const templates = new ReducerTemplate(reducerName)
  if (!existsSync(`${path.resolve()}${reducerDirectory}/index.ts`)) {
    writeFileSync(
      `${path.resolve()}${reducerDirectory}/index.ts`,
      templates.index
    )
  }

  if (!existsSync(`${path.resolve()}${reducerDirectory}/models.ts`)) {
    writeFileSync(
      `${path.resolve()}${reducerDirectory}/models.ts`,
      templates.model
    )
  }

  if (!existsSync(`${path.resolve()}${reducerDirectory}/reducers.ts`)) {
    writeFileSync(
      `${path.resolve()}${reducerDirectory}/reducers.ts`,
      templates.reducers
    )
  }

  if (!existsSync(`${path.resolve()}${reducerDirectory}/selectors.ts`)) {
    writeFileSync(
      `${path.resolve()}${reducerDirectory}/selectors.ts`,
      templates.selectors
    )
  }

  if (!existsSync(`${path.resolve()}${reducerDirectory}/types.ts`)) {
    writeFileSync(
      `${path.resolve()}${reducerDirectory}/types.ts`,
      templates.types
    )
  }

  // for test
  Directory.directoryList(reducerTestDirectory, REDUCERS_TEST_ROOT).forEach(
    (dir) => {
      const directory = `${path.resolve()}${dir}`
      if (existsSync(directory)) {
        return
      }

      mkdirSync(directory)
    }
  )

  if (!existsSync(`${path.resolve()}${reducerTestDirectory}/models.ts`)) {
    writeFileSync(
      `${path.resolve()}${reducerTestDirectory}/models.ts`,
      templates.testModel
    )
  }

  log(message.successSpawn)
}
