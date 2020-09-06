import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { REDUCERS_ROOT } from '../config'
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

  const reducerDirectory = ReducerDirectory.define(reducerName, category)

  if (existsSync(`${path.resolve()}${reducerDirectory}`)) {
    log(message.errorHasReducer)
    return
  }

  Directory.directoryList(reducerDirectory, REDUCERS_ROOT).forEach((dir) => {
    const directory = `${path.resolve()}${dir}`
    if (existsSync(directory)) {
      return
    }

    mkdirSync(directory)
  })

  const templates = new ReducerTemplate(reducerName)
  writeFileSync(
    `${path.resolve()}${reducerDirectory}/index.ts`,
    templates.index
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/models.ts`,
    templates.model
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/reducers.ts`,
    templates.reducers
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/selectors.ts`,
    templates.selectors
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/types.ts`,
    templates.types
  )

  log(message.successSpawn)
}
