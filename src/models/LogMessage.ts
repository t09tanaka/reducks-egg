import { REDUCERS_ROOT } from '../config'
import chalk from 'chalk'

export class LogMessage {
  private reducerName?: string
  private category?: string
  private componentName?: string
  private pathName?: string

  constructor(arg: {
    reducerName?: string
    category?: string
    componentName?: string
    pathName?: string
  }) {
    const { reducerName, category, componentName, pathName } = arg
    this.reducerName = reducerName
    if (category) this.category = category
    if (componentName) this.componentName = componentName
    if (pathName) this.pathName = pathName
  }

  get errorNoRootReducer(): string {
    return (
      chalk.red.bold('ERROR! You don`t have root reducer 🤔') +
      '\n' +
      chalk.red.bold('       Run ', chalk.blue.bold('reducks-egg farm'))
    )
  }

  get errorHasRootReducer(): string {
    return chalk.gray.bold('ERROR! You already have root reducer 🤔')
  }

  get errorHasReducer(): string {
    return chalk.red.bold(
      `ERROR! You already have ${this.reducerName} reducer 🤔`
    )
  }

  get errorHasComponent(): string {
    return chalk.red.bold(
      `ERROR! You already have ${this.componentName} component 🤔`
    )
  }

  get errorNoReducer(): string {
    return chalk.red.bold(
      `ERROR! You don't have ${this.reducerName} reducer 🤔` +
        '\n' +
        '       Run ',
      chalk.blue.bold(
        `reducks-egg spawn --reducer-name=${this.reducerName}${
          this.category ? ` --category=${this.category}` : ''
        }`
      )
    )
  }

  get errorNoReducerName(): string {
    return chalk.red.bold(
      'ERROR! You should set ',
      chalk.blue.bold('--reducer-name=YOUR_REDUCER_NAME'),
      ' option 🤔'
    )
  }

  get errorNoComponentName(): string {
    return chalk.red.bold(
      'ERROR! You should set ',
      chalk.blue.bold('--component-name=YOUR_COMPONENT_NAME'),
      ' option 🤔'
    )
  }

  get errorNoPathName(): string {
    return chalk.red.bold(
      'ERROR! You should set ',
      chalk.blue.bold('--path=YOUR_COMPONENT_PATH'),
      ' option 🤔'
    )
  }

  get successFarm(): string {
    return chalk.blueBright.bold('Root reducer is ready 🎉')
  }

  get successSpawn(): string {
    return chalk.blueBright.bold(`${this.reducerName} reducer was spawned 🥚`)
  }

  get successBake(): string {
    return chalk.blueBright.bold(`${this.componentName} component was baked 🍳`)
  }
}
