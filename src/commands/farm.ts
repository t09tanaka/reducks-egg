import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { REDUCERS_ROOT } from '../config'
import { ROOT_REDUCER_TEMPLATE } from '../templates/rootReducers'
import chalk from 'chalk'
const { log } = console

export const farm = () => {
  if (existsSync(`${path.resolve()}${REDUCERS_ROOT}`)) {
    log(chalk.red.bold('ERROR! You already have root reducer 🤔'))
    return
  }

  mkdirSync(`${path.resolve()}${REDUCERS_ROOT}`)
  writeFileSync(
    `${path.resolve()}${REDUCERS_ROOT}/index.ts`,
    ROOT_REDUCER_TEMPLATE
  )

  log(chalk.blueBright.bold('Root reducer is ready 🎉'))
}
