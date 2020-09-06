import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { REDUCERS_ROOT } from '../config'
import { LogMessage } from '../models/LogMessage'
import { Directory } from '../models/Directory'
import { ReducerTemplate } from '../models/ReducerTemplate'
import { ComponentTemplate } from '../models/ComponentTemplate'
const { log } = console

export const bake = (
  reducerName: string,
  componentName: string,
  pathName: string
) => {
  const message = new LogMessage({ reducerName, componentName, pathName })
  if (!Boolean(reducerName)) {
    log(message.errorNoReducerName)
    return
  }

  if (!Boolean(componentName)) {
    log(message.errorNoComponentName)
    return
  }

  if (!Boolean(pathName)) {
    log(message.errorNoPathName)
    return
  }

  if (!existsSync(`${path.resolve()}${REDUCERS_ROOT}`)) {
    log(message.errorNoRootReducer)
    return
  }

  const componentPath = `${path.resolve()}${pathName}/${componentName}.tsx`

  if (existsSync(componentPath)) {
    log(message.errorNoRootReducer)
    return
  }

  Directory.directoryList(pathName, '/src').forEach((dir) => {
    const directory = `${path.resolve()}${dir}`
    if (existsSync(directory)) {
      return
    }

    mkdirSync(directory)
  })

  const templates = new ComponentTemplate(reducerName, componentName)
  writeFileSync(componentPath, templates.component)

  log(message.successBake)
}
