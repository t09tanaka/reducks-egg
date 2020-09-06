import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { REDUCERS_ROOT } from '../config'
import { ROOT_REDUCER_TEMPLATE } from '../templates/ROOT_REDUCER'
import { LogMessage } from '../models/LogMessage'
const { log } = console

export const farm = () => {
  const message = new LogMessage({ reducerName: '' })
  if (existsSync(`${path.resolve()}${REDUCERS_ROOT}`)) {
    log(message.errorHasRootReducer)
    return
  }

  mkdirSync(`${path.resolve()}${REDUCERS_ROOT}`)
  writeFileSync(
    `${path.resolve()}${REDUCERS_ROOT}/index.ts`,
    ROOT_REDUCER_TEMPLATE
  )

  log(message.successFarm)
}
