import { Command } from 'commander'
import readlineSync from 'readline-sync'

import { farm } from './commands/farm'
import { spawn } from './commands/spawn'
import { bake } from './commands/bake'

const program = new Command()
program.version('0.0.1')

program
  .command('farm')
  .description('initialize root reducer')
  .action(() => farm())

program
  .command('spawn')
  .description('generate reducks style reducer module')
  .action(() => {
    const reducerName = readlineSync.question(
      'Enter your reducer name (e.g., accountDetail) '
    )
    const category = readlineSync.question(
      'Enter reducer category (optional / e.g., domains) '
    )
    spawn(reducerName, category)
  })

program
  .command('bake')
  .option('-n, --reducer-name <name>', 'reducer name: e.g., accountDetail')
  .option(
    '-c, --component-name <component>',
    'component name: e.g., YourComponent'
  )
  .option('-p, --path <path>', 'component path from root')
  .description('generate component using redux')
  .action((source) => {
    const reducerName = readlineSync.question(
      'Enter your reducer name (e.g., accountDetail) '
    )
    const componentName = readlineSync.question(
      'Enter your component name (e.g., AccountNameField) '
    )
    const pathName = readlineSync.question(
      'Enter component directory path (e.g., /src/components/account/detail) '
    )

    bake(reducerName, componentName, pathName)
  })

program.on('--help', () => {
  console.log()
  console.log('For more information, see')
  console.log('https://github.com/t09tanaka/reducks-egg')
  console.log()
})

program.parse(process.argv)
