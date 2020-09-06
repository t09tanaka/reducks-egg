import { LogMessage } from './LogMessage'
import chalk from 'chalk'

test('errorNoRootReducer', () => {
  expect(
    new LogMessage({ reducerName: 'accountDetail', category: 'forms' })
      .errorNoRootReducer
  ).toEqual(
    chalk.red.bold('ERROR! You don`t have root reducer 🤔') +
      '\n' +
      chalk.red.bold('       Run ', chalk.blue.bold('reducks-egg farm'))
  )
  expect(
    new LogMessage({ reducerName: 'accountDetail' }).errorNoRootReducer
  ).toEqual(
    chalk.red.bold('ERROR! You don`t have root reducer 🤔') +
      '\n' +
      chalk.red.bold('       Run ', chalk.blue.bold('reducks-egg farm'))
  )
})

test('errorHasRootReducer', () => {
  expect(
    new LogMessage({ reducerName: 'accountDetail', category: 'forms' })
      .errorHasRootReducer
  ).toEqual(chalk.red.bold('ERROR! You already have root reducer 🤔'))
  expect(
    new LogMessage({ reducerName: 'accountDetail' }).errorHasRootReducer
  ).toEqual(chalk.red.bold('ERROR! You already have root reducer 🤔'))
})

test('errorHasReducer', () => {
  expect(
    new LogMessage({ reducerName: 'accountDetail' }).errorHasReducer
  ).toEqual(chalk.red.bold(`ERROR! You already have accountDetail reducer 🤔`))
  expect(
    new LogMessage({ reducerName: 'accountEmail' }).errorHasReducer
  ).toEqual(chalk.red.bold(`ERROR! You already have accountEmail reducer 🤔`))
})

test('errorNoReducer', () => {
  expect(
    new LogMessage({ reducerName: 'accountDetail', category: 'forms' })
      .errorNoReducer
  ).toEqual(
    chalk.red.bold(
      `ERROR! You don't have accountDetail reducer 🤔` + '\n' + '       Run ',
      chalk.blue.bold(
        `reducks-egg spawn --reducer-name=accountDetail --category=forms`
      )
    )
  )
  expect(new LogMessage({ reducerName: 'account' }).errorNoReducer).toEqual(
    chalk.red.bold(
      `ERROR! You don't have account reducer 🤔` + '\n' + '       Run ',
      chalk.blue.bold(`reducks-egg spawn --reducer-name=account`)
    )
  )
})

test('errorNoReducerName', () => {
  expect(new LogMessage({ reducerName: '' }).errorNoReducerName).toEqual(
    chalk.red.bold(
      'ERROR! You should set ',
      chalk.blue.bold('--reducer-name=YOUR_REDUCER_NAME'),
      ' option 🤔'
    )
  )
})

test('errorNoReducerName', () => {
  expect(new LogMessage({ reducerName: '' }).errorNoReducerName).toEqual(
    chalk.red.bold(
      'ERROR! You should set ',
      chalk.blue.bold('--reducer-name=YOUR_REDUCER_NAME'),
      ' option 🤔'
    )
  )
})

test('successFarm', () => {
  expect(new LogMessage({ reducerName: '' }).successFarm).toEqual(
    chalk.blueBright.bold('Root reducer is ready 🎉')
  )
  expect(new LogMessage({ reducerName: '123' }).successFarm).toEqual(
    chalk.blueBright.bold('Root reducer is ready 🎉')
  )
})

test('successSpawn', () => {
  expect(new LogMessage({ reducerName: 'accountDetail' }).successSpawn).toEqual(
    chalk.blueBright.bold(`accountDetail reducer was spawned 🥚`)
  )
  expect(new LogMessage({ reducerName: 'accountEmail' }).successSpawn).toEqual(
    chalk.blueBright.bold(`accountEmail reducer was spawned 🥚`)
  )
})

test('successBake', () => {
  expect(new LogMessage({ reducerName: 'accountDetail' }).successBake).toEqual(
    chalk.blueBright.bold(`accountDetail reducer was baked 🍳`)
  )
  expect(new LogMessage({ reducerName: 'accountEmail' }).successBake).toEqual(
    chalk.blueBright.bold(`accountEmail reducer was baked 🍳`)
  )
})
