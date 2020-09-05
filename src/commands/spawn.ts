import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { REDUCERS_ROOT } from '../config'
import chalk from 'chalk'
import { ReducerDirectory } from '../models/ReducerDirectory'
import { ReducerTemplate } from '../models/ReducerTemplate'
const { log } = console

export const spawn = (reducerName: string, category?: string) => {
  if (!existsSync(`${path.resolve()}${REDUCERS_ROOT}`)) {
    log(chalk.red.bold('ERROR! You don`t have root reducer 🤔'))
    log(chalk.red.bold('       Run ', chalk.blue.bold('reducks-egg farm')))
    return
  }

  if (!Boolean(reducerName)) {
    log(
      chalk.red.bold(
        'ERROR! You should set ',
        chalk.blue.bold('--reducer-name=YOUR_REDUCER_NAME'),
        ' option 🤔'
      )
    )
    return
  }

  const reducerDirectory = ReducerDirectory.define(reducerName, category)

  if (existsSync(`${REDUCERS_ROOT}${reducerDirectory}`)) {
    log(chalk.red.bold(`ERROR! You already have ${reducerName} reducer 🤔`))
    return
  }

  ReducerDirectory.directoryList(reducerDirectory).forEach((dir) => {
    const directory = `${path.resolve()}${dir}`
    if (existsSync(directory)) {
      return
    }

    mkdirSync(directory)
  })

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/index.ts`,
    ReducerTemplate.index(reducerName)
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/models.ts`,
    ReducerTemplate.model(reducerName)
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/selectors.ts`,
    ReducerTemplate.selectors(reducerName)
  )

  writeFileSync(
    `${path.resolve()}${reducerDirectory}/types.ts`,
    ReducerTemplate.types(reducerName)
  )

  log(chalk.blueBright.bold(`${reducerName} reducer was spawned 🎉🥚🎉`))
}
