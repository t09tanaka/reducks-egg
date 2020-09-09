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

  const componentPath = `${path.resolve()}${pathName}/${componentName}.tsx`
  const componentTestPath = `${path.resolve()}${pathName.replace(
    '/src',
    '/test'
  )}/${componentName}.tsx`

  if (existsSync(componentPath)) {
    log(message.errorHasComponent)
    return
  }

  // for component
  Directory.directoryList(pathName).forEach((dir) => {
    const directory = `${path.resolve()}/${dir}`
    if (existsSync(directory)) {
      return
    }

    mkdirSync(directory)
  })

  const templates = new ComponentTemplate(reducerName, componentName)
  writeFileSync(componentPath, templates.component)

  // for test
  Directory.directoryList(pathName.replace('/src', '/test')).forEach((dir) => {
    const directory = `${path.resolve()}/${dir}`
    if (existsSync(directory)) {
      return
    }

    mkdirSync(directory)
  })

  writeFileSync(componentTestPath, templates.componentTest)

  log(message.successBake)
}
