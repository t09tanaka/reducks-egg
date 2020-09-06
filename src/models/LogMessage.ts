import { REDUCERS_ROOT } from '../config'
import chalk from 'chalk'

export class LogMessage {
  private reducerName: string
  private category?: string

  constructor(arg: { reducerName: string; category?: string }) {
    const { reducerName, category } = arg
    this.reducerName = reducerName
    if (category) this.category = category
  }

  get errorNoRootReducer(): string {
    return (
      chalk.red.bold('ERROR! You don`t have root reducer 🤔') +
      '\n' +
      chalk.red.bold('       Run ', chalk.blue.bold('reducks-egg farm'))
    )
  }

  get errorHasRootReducer(): string {
    return chalk.red.bold('ERROR! You already have root reducer 🤔')
  }

  get errorHasReducer(): string {
    return chalk.red.bold(
      `ERROR! You already have ${this.reducerName} reducer 🤔`
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

  get successFarm(): string {
    return chalk.blueBright.bold('Root reducer is ready 🎉')
  }

  get successSpawn(): string {
    return chalk.blueBright.bold(`${this.reducerName} reducer was spawned 🥚`)
  }

  get successBake(): string {
    return chalk.blueBright.bold(`${this.reducerName} reducer was baked 🍳`)
  }
}
